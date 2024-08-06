import { FunctionComponent } from "react";
import AladinTemplate from "@/components/templates/Aladin";
import { getTourPoisData } from "@/lib/api/tour";
import { TourProps } from "../layout";
import { AladinOptions } from "@/types/aladin";
import AladinTourGuide from "@/components/organisms/AladinTourGuide";

const TourPage: FunctionComponent<TourProps> = async ({ params: { tour } }) => {
  const { tour: data } = await getTourPoisData(tour);

  const fov = 10;
  const options: AladinOptions = {
    fov,
  };

  return (
    <AladinTemplate
      fovRange={[0.03, 180]}
      hipsConfig={{
        id: "https://storage.googleapis.com/hips-data/dm-hips/color_riz",
        options: {},
      }}
      {...{ options }}
    >
      <AladinTourGuide initialFoV={fov} {...{ data, tour }} />
    </AladinTemplate>
  );
};

export default TourPage;
