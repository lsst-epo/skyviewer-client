import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { withLayout } from "@moxy/next-layout";
import Link from "next/link";
import PrimaryLayout from "@/layouts/Primary";
import GuidedExperienceLayout from "@/layouts/GuidedExperience";
import GuidedExperienceLanding from "@/components/guidedExperiences/GuidedExperienceLanding";

import PLACEHOLDER_TOURS from "@/fixtures/placeholderTours";

const DEFAULT_NEXT = { url: "/intro/", text: "Let's Start" };
const DEFAULT_BACK = { url: "/", text: "Back" };

const TourPage = ({ setLayoutState }) => {
  const router = useRouter();
  const {
    query,
    query: { tour: tourId, intro: introId, fact: factId },
  } = router;
  const [tourData, setTourData] = useState(getTourData(tourId));
  const [nextLink, setNextLink] = useState(DEFAULT_NEXT);
  const [backLink, setBackLink] = useState(DEFAULT_BACK);
  const { id, name, complexity, duration, thumbnail, backgroundImage } =
    tourData || {};

  function getTourData(id) {
    return PLACEHOLDER_TOURS.find((tour) => +id === tour.id);
  }

  const getNavLinks = useCallback(
    (id, totalPages, type) => {
      if (!type) {
        return [
          {
            url: `/tours/`,
            text: "Back",
          },
          { url: `/tours/${tourId}/?intro=1`, text: "Let's Start" },
        ];
      }

      const nextId = id + 1;
      const previousId = +id > 1 ? id - 1 : 1;

      if (id > 1 && id < totalPages) {
        return [
          {
            url: `/tours/${tourId}/?${type}=${previousId}`,
            text: "Back",
          },
          { url: `/tours/${tourId}/?${type}=${nextId}`, text: "Next" },
        ];
      }

      if (id === 1) {
        return [
          {
            url:
              type === "intro"
                ? `/tours/${tourId}/`
                : `/tours/${tourId}/?intro=${tourData.intro.blocks.length}`,
            text: "Back",
          },
          { url: `/tours/${tourId}/?${type}=${nextId}`, text: "Next" },
        ];
      }

      if (id >= totalPages) {
        return [
          {
            url: `/tours/${tourId}/?${type}=${previousId}`,
            text: "Back",
          },
          {
            url:
              type === "intro"
                ? `/tours/${tourId}/?fact=1`
                : `/tours/${tourId}/tour`,
            text: type === "intro" ? "Next" : "Start the Tour",
          },
        ];
      }
    },
    [tourId, tourData?.intro?.blocks?.length]
  );

  useEffect(() => {
    setTourData(getTourData(tourId));
  }, [tourId]);

  useEffect(() => {
    if (!tourData) return;
    const {
      intro: { blocks: introBlocks },
      fact: { blocks: factBlocks },
    } = tourData;

    let navLinks = getNavLinks();
    if (introId) {
      navLinks = getNavLinks(+introId, introBlocks.length, "intro");
    } else if (factId) {
      navLinks = getNavLinks(+factId, introBlocks.length, "fact");
    }

    const [backLink, nextLink] = navLinks;
    setBackLink(backLink);
    setNextLink(nextLink);
    // console.log(intro, fact);
  }, [tourId, introId, factId, tourData, getNavLinks]);

  useEffect(() => {
    setLayoutState({ nextLink, backLink });
  }, [setLayoutState, nextLink, backLink]);

  if (!tourData) return <div>loading</div>;

  if (introId) {
    return (
      <div>
        <h2>This is an Intro Page: {introId}</h2>
      </div>
    );
  }

  if (factId) {
    return (
      <div>
        <h2>This is a Fact Page: {factId}</h2>
      </div>
    );
  }

  return (
    <GuidedExperienceLanding
      {...{ name, thumbnail, backgroundImage, duration, complexity }}
    />
  );
};

TourPage.propTypes = {
  setLayoutState: PropTypes.func,
};

const mapLayoutStateToLayoutTree = ({ nextLink, backLink, className }) => (
  <PrimaryLayout closeUrl="/tours">
    <GuidedExperienceLayout
      nextLink={nextLink}
      backLink={backLink}
      className={className}
    />
  </PrimaryLayout>
);

export default withLayout(mapLayoutStateToLayoutTree, {
  nextLink: DEFAULT_NEXT,
  backLink: DEFAULT_BACK,
})(TourPage);
