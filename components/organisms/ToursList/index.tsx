import { FC, Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import TourCard from "../TourCard";
import ScrollingList from "@/components/molecules/ScrollingList";
import { TourCardType } from "@/services/api/tours/schema";
interface ToursListProps {
  categorySlug?: string,
  tours?: TourCardType[]
}

const ToursList: FC<ToursListProps> = (
  {categorySlug, tours}
) => {
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
                    {...tours}
                    categorySlug={categorySlug}
                    title={<Skeleton width="12ch" height="1lh" />}
                  />
                </li>
              );
            })}
          </>
        }
      >
       {tours && tours.map(({...props }, i) => {
        return (
          <li key={i}>
            <TourCard {...props} categorySlug={categorySlug}/>
          </li>
        );
      })}
      </Suspense>
    </ScrollingList>
  );
};

ToursList.displayName = "Organism.ToursList";

export default ToursList;
