import { useEffect, useState, useMemo } from "react";
import { withLayout } from "@moxy/next-layout";
import { useRouter } from "next/router";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import Pois from "@/components/Pois";
import Nav from "@/components/Pois/Nav";
import { getTourData, getPoiData } from "@/helpers";

const DEFAULT_NEXT = { url: "/intro/", text: "Next" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const PoiPage = () => {
  const router = useRouter();
  const {
    query,
    query: { tour: tourId, poi },
  } = router;

  const [tourData, setTourData] = useState(getTourData(tourId));
  const navLinks = useMemo(() => getNavLinks(poi, tourData), [poi, tourData]);

  useEffect(() => {
    setTourData(getTourData(tourId));
  }, [tourId]);

  function getNavLinks(poi, tourData) {
    if (!tourData) return;
    const { id, pois, fact } = tourData;
    const last = pois.length;
    const current = +poi;
    const next = current < pois.length ? current + 1 : null;
    const previous = current > 1 ? current - 1 : null;

    return {
      backLink: {
        url:
          previous === null
            ? `/tours/${id}/?fact=${fact.blocks.length}`
            : `/tours/${id}/tour?poi=${previous}`,
        text: "Back",
      },
      nextLink: {
        url:
          next === null
            ? `/tours/${id}/tour?summary=1`
            : `/tours/${id}/tour?poi=${next}`,
        text: "Next",
      },
    };
  }

  if (!tourData || !poi) {
    return <div>loading</div>;
  }

  return (
    <>
      <Pois
        selector="#aladin-lite-div"
        survey="http://alasky.u-strasbg.fr/DSS/DSSColor"
        fov={100}
        fovRange={[0.03, 180]}
        poi={tourData?.pois[+poi - 1]}
        tourTitle={tourData.title}
      />
      {navLinks && <Nav {...navLinks} />}
    </>
  );
};

export default withLayout(
  <PrimaryLayout closeUrl="/tours">
    <AladinLayout />
  </PrimaryLayout>
)(PoiPage);
