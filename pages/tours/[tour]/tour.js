import { useEffect, useState, useMemo } from "react";
import { withLayout } from "@moxy/next-layout";
import { useRouter } from "next/router";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import LoadingSpinner from "@/primitives/LoadingSpinner";
import Pois from "@/components/Pois";
import Nav from "@/components/Pois/Nav";
import { getTourData, getPoiData } from "@/helpers";
import { useTourPoisData } from "@/lib/api/tour";

const DEFAULT_NEXT = { url: "/intro/", text: "Next" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const PoiPage = () => {
  const router = useRouter();
  const {
    query,
    query: { tour: tourSlug, poi },
  } = router;

  const { data: tourData } = useTourPoisData(tourSlug);
  const navLinks = useMemo(() => getNavLinks(poi, tourData), [poi, tourData]);

  function getNavLinks(poi, tourData) {
    if (!tourData) return;
    const { slug, tourPois, factsContentBlocks } = tourData;
    const last = tourPois.length;
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
            ? `/tours/${slug}/tour?summary=1`
            : `/tours/${slug}/tour?poi=${next}`,
        text: "Next",
      },
    };
  }
  return (
    <>
      {!tourData || !poi ? (
        <LoadingSpinner />
      ) : (
        <Pois
          selector="#aladin-lite-div"
          survey="http://alasky.u-strasbg.fr/DSS/DSSColor"
          fov={100}
          fovRange={[0.03, 180]}
          poi={tourData?.tourPois[+poi - 1]}
          tourTitle={tourData.title}
        />
      )}
      {navLinks && <Nav {...navLinks} />}
    </>
  );
};

export default withLayout(
  <PrimaryLayout closeUrl="/tours">
    <AladinLayout />
  </PrimaryLayout>
)(PoiPage);
