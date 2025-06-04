import { FC, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import TourCard from "../TourCard";
import { getAllTours } from "@/services/api/tours";
import ScrollingList from "@/components/molecules/ScrollingList";

const ToursListContent: FC<{ locale: string }> = async (props) => {
  const tours = await getAllTours(props);

  return (
    <>
      {tours.map(({ id, ...props }, i) => {
        return (
          <li key={i}>
            <TourCard {...props} />
          </li>
        );
      })}
    </>
  );
};

const ToursList: FC<{ locale: string }> = (props) => {
  const SkeletonCards = new Array(4).fill(undefined);

  return (
    <ScrollingList>
      <Suspense
        fallback={
          <>
            {SkeletonCards.map((card, i) => {
              return (
                <li key={i}>
                  <TourCard
                    {...props}
                    title={<Skeleton width="12ch" height="1lh" />}
                  />
                </li>
              );
            })}
          </>
        }
      >
        <ToursListContent {...props} />
      </Suspense>
    </ScrollingList>
  );
};

ToursList.displayName = "Organism.ToursList";

export default ToursList;
