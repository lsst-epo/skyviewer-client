import { FC, Suspense } from "react";
import { getAllTours } from "@/lib/api/tours";
import ScrollingList from "@/components/molecules/ScrollingList";
import TourCard from "../TourCard";
import styles from "./styles.module.css";

const ToursListContent: FC = async () => {
  const tours = await getAllTours();

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

const ToursList: FC = () => {
  const SkeletonCards = new Array(4).fill(undefined);

  return (
    <ScrollingList>
      <Suspense
        fallback={
          <>
            {SkeletonCards.map((card, i) => {
              return (
                <li key={i}>
                  <TourCard title={<div className={styles.skelly} />} />
                </li>
              );
            })}
          </>
        }
      >
        <ToursListContent />
      </Suspense>
    </ScrollingList>
  );
};

ToursList.displayName = "Organism.ToursList";

export default ToursList;
