import { z } from "zod";
import { FunctionComponent } from "react";
import { notFound } from "next/navigation";
import TourPage from "@/components/pages/Tour";
import { getTourInitial, getTourPois } from "@/services/api/tours";
import { TourProvider } from "@/contexts/Tour";
import AladinTemplate from "@/components/templates/Aladin";
import TourTutorial from "@/components/organisms/TourTutorial";

const Tour: FunctionComponent<WithSearchParams<TourProps>> = async ({
  params: { tour },
  searchParams = {},
}) => {
  const pois = await getTourPois(tour);
  const { poi = "1" } = searchParams;
  const { data: offset = 0 } = z.coerce
    .number()
    .min(1)
    .max(pois.length)
    .catch(1)
    .transform((arg) => arg - 1)
    .safeParse(poi);

  const data = await getTourInitial({ tour, offset });

  if (!data || pois.length === 0) {
    notFound();
  }

  const { survey, initial, title } = data;

  return (
    <AladinTemplate
      {...survey}
      disableInteraction={true}
      options={{ ...initial, backgroundColor: "rgb(0,0,0)" }}
    >
      <TourTutorial>
        <TourProvider {...{ pois }}>
          <TourPage title={title} />
        </TourProvider>
      </TourTutorial>
    </AladinTemplate>
  );
};

export default Tour;
