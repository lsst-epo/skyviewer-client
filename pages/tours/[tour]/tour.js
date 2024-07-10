import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { withLayout } from "@moxy/next-layout";
import { useRouter } from "next/router";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import LoadingSpinner from "@/primitives/LoadingSpinner";
import Pois from "@/components/Pois";
import Nav from "@/components/Pois/Nav";
import { getTourPoisData } from "@/lib/api/tour";
import { getToursPaths } from "@/lib/api/tours";

const DEFAULT_NEXT = { url: "/intro/", text: "Next" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const PoiPage = ({ tour }) => {
  const router = useRouter();
  const {
    query: { poi },
  } = router;
  const navLinks = useMemo(() => getNavLinks(poi, tour), [poi, tour]);

  function getNavLinks(poi, tour) {
    if (!tour) return;
    const { slug, tourPois, factsContentBlocks } = tour;
    const current = +poi;
    const next = current < tourPois.length ? current + 1 : null;
    const previous = current > 1 ? current - 1 : null;

    return {
      backLink: {
        url:
          previous === null
            ? `/tours/${slug}/?fact=${factsContentBlocks.length}`
            : `/tours/${slug}/tour?poi=${previous}`,
        text: "Back",
      },
      nextLink: {
        url:
          next === null
            ? `/tours/${slug}/summary`
            : `/tours/${slug}/tour?poi=${next}`,
        text: "Next",
      },
    };
  }
  return (
    <>
      {!tour || !poi || router.isFallback ? (
        <LoadingSpinner />
      ) : (
        <Pois
          selector="#aladin-lite-div"
          survey="http://alasky.u-strasbg.fr/DSS/DSSColor"
          fov={100}
          fovRange={[0.03, 180]}
          poi={tour?.tourPois[+poi - 1]}
          tourTitle={tour.title}
        />
      )}
      {navLinks && <Nav {...navLinks} />}
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
  const data = await getTourPoisData(tour);

  return {
    props: data,
    revalidate: 30,
  };
}

PoiPage.propTypes = {
  tour: PropTypes.object,
};

export default withLayout(
  <PrimaryLayout closeUrl="/tours">
    <AladinLayout />
  </PrimaryLayout>
)(PoiPage);
