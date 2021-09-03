import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useRouter } from "next/router";
import { withLayout } from "@moxy/next-layout";
import PrimaryLayout from "@/layouts/Primary";
import GuidedExperienceLayout from "@/layouts/GuidedExperience";
import LoadingSpinner from "@/primitives/LoadingSpinner";
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
    pathname,
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
          {
            url: { pathname, query: { tour: tourSlug, intro: 1 } },
            text: "Let's Start",
          },
        ];
      }

      const nextId = id + 1;
      const previousId = +id > 1 ? id - 1 : 1;
      // Middle Page
      if (id > 1 && id < totalPages) {
        return [
          {
            url: { pathname, query: { tour: tourSlug, [type]: previousId } },
            text: "Back",
          },
          {
            url: { pathname, query: { tour: tourSlug, [type]: nextId } },
            text: "Next",
          },
        ];
      }
      // First Page
      if (id === 1) {
        const backUrl = {
          pathname,
          query: { tour: tourSlug, intro: introContentBlocks.length },
        };
        const nextUrl = { pathname, query: { tour: tourSlug, [type]: nextId } };
        let nextText = "Next";

        if (type === "intro") {
          backUrl.query = { tour: tourSlug };
        }

        if (type === "intro" && totalPages === 1) {
          nextUrl.pathname = pathname;
          nextUrl.query = { tour: tourSlug, fact: 1 };
        } else if (totalPages === 1) {
          nextUrl.pathname = `${pathname}/tour`;
          nextUrl.query = { tour: tourSlug, poi: 1 };
          nextText = "Start the Tour";
        }

        return [
          {
            url: backUrl,
            text: "Back",
          },
          {
            url: nextUrl,
            text: nextText,
          },
        ];
      }
      // Last Page
      if (id >= totalPages) {
        const nextUrl = {
          pathname: `${pathname}/tour`,
          query: { tour: tourSlug, poi: 1 },
        };

        if (type === "intro") {
          nextUrl.pathname = pathname;
          nextUrl.query = { tour: tourSlug, fact: 1 };
        }

        return [
          {
            url: { pathname, query: { tour: tourSlug, [type]: previousId } },
            text: "Back",
          },
          {
            url: nextUrl,
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
    const updatedLayoutState = {
      desktopBackLink: {
        url: { pathname, query: { tour: tourSlug } },
        text: "Back",
      },
      desktopNextLink: {
        url: {
          pathname: `${pathname}/tour`,
          query: { tour: tourSlug, poi: 1 },
        },
        text: "Start the Tour",
      },
      mobileBackLink: backLink,
      mobileNextLink: nextLink,
    };

    if (isLanding) {
      updatedLayoutState.desktopBackLink = {
        url: `/tours`,
        text: "Back",
      };
      updatedLayoutState.desktopNextLink = {
        url: { pathname, query: { tour: tourSlug, intro: 1 } },
        text: "Let's Start",
      };
    }

    setLayoutState(updatedLayoutState);
  }, [setLayoutState, nextLink, backLink, tourSlug, isLanding, pathname]);

  if (!tourData || Object.keys(tourData).length === 0) {
    return <LoadingSpinner />;
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
  isLanding: true,
})(TourPage);
