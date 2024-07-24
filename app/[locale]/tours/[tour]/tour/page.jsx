"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import LoadingSpinner from "@/primitives/LoadingSpinner";
import Pois from "@/components/Pois";
import Nav from "@/components/Pois/Nav";
import useTourPoiData from "@/hooks/useTourPoiData";

const PoiPage = ({ params: { tour } }) => {
  const { data, isLoading } = useTourPoiData(tour);
  const searchParams = useSearchParams();
  const poi = searchParams.get("poi");
  const navLinks = useMemo(() => getNavLinks(poi, data), [poi, data]);

  function getNavLinks(poi, tour) {
    if (!tour) return;
    const { slug, tourPois, factsContentBlocks } = tour;
    const current = +poi;
    const next = current < tourPois?.length ? current + 1 : null;
    const previous = current > 1 ? current - 1 : null;

    return {
      backLink: {
        url:
          previous === null
            ? `/tours/${slug}/?fact=${factsContentBlocks?.length}`
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Pois
          selector="#aladin-lite-div"
          survey="https://storage.googleapis.com/hips-data/dm-hips/color_riz"
          imgFormat="png"
          fov={10}
          fovRange={[0.03, 180]}
          poi={data?.tourPois[+poi - 1]}
          tourTitle={data.title}
        />
      )}
      {navLinks && <Nav {...navLinks} />}
    </>
  );
};

export default PoiPage;
