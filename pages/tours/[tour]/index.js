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
// import { getTourData } from "@/helpers";
import { useTourData } from "@/lib/api/tour";

const DEFAULT_NEXT = { url: "/intro/", text: "Let's Start" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const TourPage = ({ setLayoutState }) => {
  const router = useRouter();
  const {
    query,
    query: { tour: tourSlug, intro: introId, fact: factId },
  } = router;

  const { data: tourData } = useTourData(tourSlug);
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
    introHeading,
    introSubheading,
    introContentBlocks,
    factsHeading,
    factsContentBlocks,
  } = tourData || {};

  const getNavLinks = useCallback(
    (id, totalPages, type) => {
      if (!type) {
        return [
          {
            url: `/tours/`,
            text: "Back",
          },
          { url: `/tours/${tourSlug}/?intro=1`, text: "Let's Start" },
        ];
      }

      const nextId = id + 1;
      const previousId = +id > 1 ? id - 1 : 1;
      // Middle page
      if (id > 1 && id < totalPages) {
        return [
          {
            url: `/tours/${tourSlug}/?${type}=${previousId}`,
            text: "Back",
          },
          { url: `/tours/${tourSlug}/?${type}=${nextId}`, text: "Next" },
        ];
      }
      // First of many pages
      if (id === 1 && totalPages > 1) {
        return [
          {
            url:
              type === "intro"
                ? `/tours/${tourSlug}/`
                : `/tours/${tourSlug}/?intro=${introContentBlocks.length}`,
            text: "Back",
          },
          { url: `/tours/${tourSlug}/?${type}=${nextId}`, text: "Next" },
        ];
      }
      // Only page
      if (id === 1 && totalPages === 1) {
        return [
          {
            url:
              type === "intro"
                ? `/tours/${tourSlug}/`
                : `/tours/${tourSlug}/?intro=${introContentBlocks.length}`,
            text: "Back",
          },
          {
            url:
              type === "intro"
                ? `/tours/${tourSlug}/?fact=1`
                : `/tours/${tourSlug}/tour?poi=1`,
            text: type === "intro" ? "Next" : "Start the Tour",
          },
        ];
      }
      // Last of many pages
      if (id >= totalPages) {
        return [
          {
            url: `/tours/${tourSlug}/?${type}=${previousId}`,
            text: "Back",
          },
          {
            url:
              type === "intro"
                ? `/tours/${tourSlug}/?fact=1`
                : `/tours/${tourSlug}/tour?poi=1`,
            text: type === "intro" ? "Next" : "Start the Tour",
          },
        ];
      }
    },
    [tourSlug, introContentBlocks?.length]
  );

  useEffect(() => {
    setIsLanding(!introId && !factId);
  }, [introId, factId]);

  useEffect(() => {
    if (!tourData) return;
    let navLinks = getNavLinks();
    if (introId) {
      navLinks = getNavLinks(+introId, introContentBlocks.length, "intro");
    } else if (factId) {
      navLinks = getNavLinks(+factId, factsContentBlocks.length, "fact");
    }

    setBackLink(navLinks[0]);
    setNextLink(navLinks[1]);
  }, [tourSlug, introId, factId, tourData, getNavLinks]);

  useEffect(() => {
    setLayoutState({
      desktopBackLink: {
        url: isLanding ? `/tours` : `/tours/${tourSlug}`,
        text: "Back",
      },
      desktopNextLink: {
        url: isLanding
          ? `/tours/${tourSlug}/?intro=1`
          : `/tours/${tourSlug}/tour?poi=1`,
        text: isLanding ? "Let's Start" : "Start the Tour",
      },
      mobileBackLink: backLink,
      mobileNextLink: nextLink,
    });
  }, [setLayoutState, nextLink, backLink, tourSlug, isLanding]);

  if (!tourData || Object.keys(tourData).length === 0) {
    return <div>loading</div>;
  }

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
            {introContentBlocks && (
              <Intro
                id={introId}
                heading={introHeading}
                subheading={introSubheading}
                blocks={introContentBlocks}
                thumbnail={thumbnail}
                skipUrl={`/tours/${tourSlug}/tour?poi=1`}
              />
            )}

            {factsContentBlocks && (
              <FunFact
                id={factId}
                blocks={factsContentBlocks}
                heading={factsHeading}
                skipUrl={`/tours/${tourSlug}/tour?poi=1`}
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
