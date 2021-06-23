import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withLayout } from "@moxy/next-layout";
import { useRouter } from "next/router";
import PrimaryLayout from "@/layouts/Primary";
import AladinLayout from "@/layouts/Aladin";
import TourLayout from "@/layouts/Tour";
import Pois from "@/components/Pois";
import { getTourData, getPoiData } from "@/helpers";

const DEFAULT_NEXT = { url: "/intro/", text: "Next" };
const DEFAULT_BACK = { url: "/tours/", text: "Back" };

const PoiPage = ({ setLayoutState }) => {
  const router = useRouter();
  const {
    query,
    query: { tour: tourId, poi: poiId },
  } = router;
  const [tourData, setTourData] = useState(null);
  const [poiData, setPoiData] = useState(null);

  useEffect(() => {
    if (!tourId) return;
    setTourData(getTourData(tourId));
  }, [tourId]);

  useEffect(() => {
    if (!tourData) return;
    setPoiData(getPoiData(tourData.pois, poiId));
  }, [tourData, poiId]);

  useEffect(() => {
    if (!tourData || !poiData) return;

    const { pois, fact } = tourData;
    const lastIndex = pois.length - 1;
    const currentIndex = pois.indexOf(poiData);
    const nextIndex = currentIndex < lastIndex ? currentIndex + 1 : null;
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : null;

    setLayoutState({
      backLink: {
        url:
          previousIndex === null
            ? `/tours/${tourId}/?fact=${fact.blocks.length}`
            : `/tours/${tourId}/tour?poi=${pois[previousIndex].id}`,
        text: "Back",
      },
      nextLink: {
        url:
          nextIndex === null
            ? `/tours/${tourId}/tour?summary=1`
            : `/tours/${tourId}/tour?poi=${pois[nextIndex].id}`,
        text: "Next",
      },
    });
  }, [setLayoutState, tourId, tourData, poiData]);

  if (!poiData) {
    return <div>loading</div>;
  }

  return (
    <>
      <Pois
        selector="#aladin-lite-div"
        survey="http://alasky.u-strasbg.fr/DSS/DSSColor"
        fov={100}
        fovRange={[0.03, 180]}
        poi={poiData}
      />
    </>
  );
};

PoiPage.propTypes = {
  setLayoutState: PropTypes.func,
};

const mapLayoutStateToLayoutTree = ({ shareLink, nextLink, backLink }) => (
  <PrimaryLayout closeUrl="/tours">
    <TourLayout {...{ nextLink, backLink }}>
      <AladinLayout />
    </TourLayout>
  </PrimaryLayout>
);

export default withLayout(mapLayoutStateToLayoutTree, {
  nextLink: DEFAULT_NEXT,
  backLink: DEFAULT_BACK,
})(PoiPage);
