import Pois from "@/components/Pois";
import Nav from "@/components/Pois/Nav";
import { getTourPoisData } from "@/lib/api/tour";

const PoiPage = async ({ params: { tour }, searchParams }) => {
  const { tour: data } = await getTourPoisData(tour);
  const { poi } = searchParams;

  const getNavLinks = (poi, data) => {
    const { tourPois, factsContentBlocks, introContentBlocks } = data;
    const current = +poi;
    const next = current < tourPois?.length ? current + 1 : null;
    const previous = current > 1 ? current - 1 : null;

    const lastStep = factsContentBlocks.length + introContentBlocks.length;

    return {
      backLink: {
        url:
          previous === null
            ? `/tours/${tour}/intro?step=${lastStep}`
            : `/tours/${tour}/tour?poi=${previous}`,
        text: "Back",
      },
      nextLink: {
        url:
          next === null
            ? `/tours/${tour}/summary`
            : `/tours/${tour}/tour?poi=${next}`,
        text: "Next",
      },
    };
  };

  const navLinks = getNavLinks(poi, data);

  return (
    <>
      <Pois
        selector="#aladin-lite-div"
        survey="https://storage.googleapis.com/hips-data/dm-hips/color_riz"
        imgFormat="png"
        fov={10}
        fovRange={[0.03, 180]}
        poi={data?.tourPois[+poi - 1]}
        tourTitle={data.title}
      />
      {navLinks && <Nav {...navLinks} />}
    </>
  );
};

export default PoiPage;
