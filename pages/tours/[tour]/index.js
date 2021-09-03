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
import { useTourData, getTourData } from "@/lib/api/tour";
import { getToursPaths } from "@/lib/api/tours";

const DEFAULT_NEXT = { url: "/intro/", text: "Let's Start" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const TourPage = ({ setLayoutState, tour }) => {
  const router = useRouter();
  const {
    pathname,
    query: { intro: introId, fact: factId },
  } = router;
  // const { data: tour } = useTourData(slug);
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
  } = tour || {};

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
          query: { tour: slug, intro: introContentBlocks.length },
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
    [slug, introContentBlocks?.length]
  );

  useEffect(() => {
    setIsLanding(!introId && !factId);
  }, [introId, factId]);

  useEffect(() => {
    if (!tour) return;
    let navLinks = getNavLinks();
    if (introId) {
      navLinks = getNavLinks(+introId, introContentBlocks.length, "intro");
    } else if (factId) {
      navLinks = getNavLinks(+factId, factsContentBlocks.length, "fact");
    }

    setBackLink(navLinks[0]);
    setNextLink(navLinks[1]);
  }, [slug, introId, factId, tour, getNavLinks]);

  useEffect(() => {
    const updatedLayoutState = {
      desktopBackLink: {
        url: { pathname, query: { tour: slug } },
        text: "Back",
      },
      desktopNextLink: {
        url: {
          pathname: `${pathname}/tour`,
          query: { tour: slug, poi: 1 },
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
        url: { pathname, query: { tour: slug, intro: 1 } },
        text: "Let's Start",
      };
    }

    setLayoutState(updatedLayoutState);
  }, [setLayoutState, nextLink, backLink, slug, isLanding, pathname]);

  if (!tour || Object.keys(tour).length === 0 || router.isFallback) {
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
    </>
  );
};

export async function getStaticPaths() {
  const data = await getToursPaths();
  const toursPaths = data?.tours.map((tour) => {
    const { slug } = tour;
    return { params: { tour: slug } };
  });

  return {
    paths: toursPaths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { tour } = params;
  const data = await getTourData(tour);

  return {
    props: data,
    revalidate: 30,
  };
}

TourPage.propTypes = {
  setLayoutState: PropTypes.func,
  tour: PropTypes.object,
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
