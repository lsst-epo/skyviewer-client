import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { withLayout } from "@moxy/next-layout";
import Link from "next/link";
import PrimaryLayout from "@/layouts/Primary";
import GuidedExperienceLayout from "@/layouts/GuidedExperience";
import GuidedExperienceLanding from "@/components/guidedExperiences/GuidedExperienceLanding";
import Intro from "@/components/tours/Intro";
import FunFact from "@/components/tours/FunFact";

import PLACEHOLDER_TOURS from "@/fixtures/placeholderTours";

const DEFAULT_NEXT = { url: "/intro/", text: "Let's Start" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const TourPage = ({ setLayoutState }) => {
  const router = useRouter();
  const {
    query,
    query: { tour: tourId, intro: introId, fact: factId },
  } = router;
  const [tourData, setTourData] = useState(getTourData(tourId));
  const [isLanding, setIsLanding] = useState(!introId && !factId);
  const [nextLink, setNextLink] = useState(DEFAULT_NEXT);
  const [backLink, setBackLink] = useState(DEFAULT_BACK);
  const {
    id,
    title,
    complexity,
    duration,
    thumbnail,
    backgroundImage,
    intro,
    fact,
  } = tourData || {};

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
      // Middle page
      if (id > 1 && id < totalPages) {
        return [
          {
            url: `/tours/${tourId}/?${type}=${previousId}`,
            text: "Back",
          },
          { url: `/tours/${tourId}/?${type}=${nextId}`, text: "Next" },
        ];
      }
      // First of many pages
      if (id === 1 && totalPages > 1) {
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
      // Only page
      if (id === 1 && totalPages === 1) {
        return [
          {
            url:
              type === "intro"
                ? `/tours/${tourId}/`
                : `/tours/${tourId}/?intro=${tourData.intro.blocks.length}`,
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
      // Last of many pages
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
    setIsLanding(!introId && !factId);
  }, [introId, factId]);

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
      navLinks = getNavLinks(+factId, factBlocks.length, "fact");
    }

    setBackLink(navLinks[0]);
    setNextLink(navLinks[1]);
  }, [tourId, introId, factId, tourData, getNavLinks]);

  useEffect(() => {
    setLayoutState({
      desktopBackLink: {
        url: isLanding ? `/tours` : `/tours/${tourId}`,
        text: "Back",
      },
      desktopNextLink: {
        url: isLanding ? `/tours/${tourId}/?intro=1` : `/tours/${tourId}/tour`,
        text: isLanding ? "Let's Start" : "Start the Tour",
      },
      mobileBackLink: backLink,
      mobileNextLink: nextLink,
    });
  }, [setLayoutState, nextLink, backLink, tourId, isLanding]);

  if (!tourData) return <div>loading</div>;

  return (
    <>
      {isLanding && (
        <GuidedExperienceLanding
          {...{ title, thumbnail, backgroundImage, duration, complexity }}
        />
      )}

      {(introId || factId) && (
        <div className="tour-intro-container">
          <div className="content-wrapper">
            {intro && (
              <Intro
                id={introId}
                data={intro}
                thumbnail={thumbnail}
                skipUrl={`/tours/${tourId}/tour`}
              />
            )}

            {fact && (
              <FunFact
                id={factId}
                data={fact}
                skipUrl={`/tours/${tourId}/tour`}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

TourPage.propTypes = {
  setLayoutState: PropTypes.func,
};

const mapLayoutStateToLayoutTree = ({
  desktopNextLink,
  desktopBackLink,
  mobileNextLink,
  mobileBackLink,
}) => (
  <PrimaryLayout closeUrl="/tours">
    <GuidedExperienceLayout
      desktopNextLink={desktopNextLink}
      desktopBackLink={desktopBackLink}
      mobileNextLink={mobileNextLink}
      mobileBackLink={mobileBackLink}
    />
  </PrimaryLayout>
);

export default withLayout(mapLayoutStateToLayoutTree, {
  mobileNextLink: DEFAULT_NEXT,
  mobileBackLink: DEFAULT_BACK,
  desktopNextLink: DEFAULT_NEXT,
  desktopBackLink: DEFAULT_BACK,
})(TourPage);
