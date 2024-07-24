"use client";
import { useState, useCallback, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import GuidedExperienceLayout from "@/components/organisms/GuidedExperience";
import LoadingSpinner from "@/primitives/LoadingSpinner";
import GuidedExperienceLanding from "@/components/guidedExperiences/GuidedExperienceLanding";
import Intro from "@/components/tours/Intro";
import FunFact from "@/components/tours/FunFact";
import useTourData from "@/hooks/useTourData";

const DEFAULT_NEXT = { url: "/intro/", text: "Let's Start" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const TourPage = ({ params: { tour } }) => {
  const { data = {}, isLoading } = useTourData(tour);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const introId = searchParams.get("intro");
  const factId = searchParams.get("fact");

  const [isLanding, setIsLanding] = useState(!introId && !factId);
  const [nextLink, setNextLink] = useState(DEFAULT_NEXT);
  const [backLink, setBackLink] = useState(DEFAULT_BACK);

  const {
    id,
    slug,
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
  } = data;

  const getNavLinks = useCallback(
    (id, totalPages, type) => {
      if (!type) {
        return [
          {
            url: `/tours/`,
            text: "Back",
          },
          {
            url: { pathname, query: { tour: slug, intro: 1 } },
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
            url: { pathname, query: { tour: slug, [type]: previousId } },
            text: "Back",
          },
          {
            url: { pathname, query: { tour: slug, [type]: nextId } },
            text: "Next",
          },
        ];
      }
      // First Page
      if (id === 1) {
        const backUrl = {
          pathname,
          query: { tour: slug, intro: introContentBlocks?.length },
        };
        const nextUrl = { pathname, query: { tour: slug, [type]: nextId } };
        let nextText = "Next";

        if (type === "intro") {
          backUrl.query = { tour: slug };
        }

        if (type === "intro" && totalPages === 1) {
          nextUrl.pathname = pathname;
          nextUrl.query = { tour: slug, fact: 1 };
        } else if (totalPages === 1) {
          nextUrl.pathname = `${pathname}/tour`;
          nextUrl.query = { tour: slug, poi: 1 };
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
          query: { tour: slug, poi: 1 },
        };

        if (type === "intro") {
          nextUrl.pathname = pathname;
          nextUrl.query = { tour: slug, fact: 1 };
        }

        return [
          {
            url: { pathname, query: { tour: slug, [type]: previousId } },
            text: "Back",
          },
          {
            url: nextUrl,
            text: type === "intro" ? "Next" : "Start the Tour",
          },
        ];
      }
    },
    [slug, pathname, introContentBlocks?.length]
  );

  useEffect(() => {
    setIsLanding(!introId && !factId);
  }, [introId, factId]);

  useEffect(() => {
    if (!tour) return;
    let navLinks = getNavLinks();
    if (introId) {
      navLinks = getNavLinks(+introId, introContentBlocks?.length, "intro");
    } else if (factId) {
      navLinks = getNavLinks(+factId, factsContentBlocks?.length, "fact");
    }

    setBackLink(navLinks[0]);
    setNextLink(navLinks[1]);
  }, [
    slug,
    introId,
    factId,
    tour,
    getNavLinks,
    introContentBlocks?.length,
    factsContentBlocks?.length,
  ]);

  const updatedLayoutState = {
    desktopBackLink: {
      url: { pathname, query: { tour: slug } },
      text: "Back",
    },
    desktopNextLink: {
      url: {
        pathname: `${pathname}/tour`,
        query: { poi: 1 },
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
      url: { pathname, query: { intro: 1 } },
      text: "Let's Start",
    };
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <GuidedExperienceLayout
      desktopNextLink={updatedLayoutState.desktopNextLink}
      desktopBackLink={updatedLayoutState.desktopBackLink}
      mobileNextLink={updatedLayoutState.mobileNextLink}
      mobileBackLink={updatedLayoutState.mobileBackLink}
    >
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
                skipUrl={`/tours/${slug}/tour?poi=1`}
              />
            )}

            {factsContentBlocks && (
              <FunFact
                id={factId}
                blocks={factsContentBlocks}
                heading={factsHeading}
                skipUrl={`/tours/${slug}/tour?poi=1`}
              />
            )}
          </div>
        </div>
      )}
    </GuidedExperienceLayout>
  );
};

// TourPage.propTypes = {
//   setLayoutState: PropTypes.func,
//   tour: PropTypes.object,
// };

export default TourPage;
