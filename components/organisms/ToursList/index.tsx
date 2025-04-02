import { FC, Suspense } from "react";
import { getAllTours } from "@/services/api/tours";
import ScrollingList from "@/components/molecules/ScrollingList";
import TourCard from "../TourCard";
import styles from "./styles.module.css";

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
                    title={<div className={styles.skelly} />}
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
