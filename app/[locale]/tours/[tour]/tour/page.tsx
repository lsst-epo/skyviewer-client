import { FunctionComponent } from "react";
import { getTourPoisData } from "@/lib/api/tour";
import { TourProps } from "../layout";
import AladinTourGuide from "@/components/organisms/AladinTourGuide";
import NavigationList from "@/components/molecules/NavigationList";

const TourPage: FunctionComponent<WithSearchParams<TourProps>> = async ({
  params: { tour },
  searchParams = {},
}) => {
  const { tour: data } = await getTourPoisData(tour);
  const { poi = "1" } = searchParams;
  const poiIndex = parseInt(Array.isArray(poi) ? poi[0] : poi) - 1;

  const getNavLinks = (current: number, data) => {
    const { tourPois, factsContentBlocks, introContentBlocks } = data;
    const next = current < tourPois?.length - 1 ? current + 1 : null;
    const previous = current > 1 ? current - 1 : null;

    const lastStep = factsContentBlocks.length + introContentBlocks.length;

    return [
      {
        url:
          previous === null
            ? `/tours/${tour}/intro?step=${lastStep}`
            : `/tours/${tour}/tour?poi=${previous}`,
        text: "Back",
      },
      {
        url:
          next === null
            ? `/tours/${tour}/summary`
            : `/tours/${tour}/tour?poi=${next}`,
        text: "Next",
      },
    ];
  };

  const { tourPois, title } = data;

  return (
    <AladinTourGuide
      {...{ tourPois, title, poiIndex }}
      controls={<NavigationList links={getNavLinks(poiIndex + 1, data)} />}
    />
  );
};

export default TourPage;
