import { useContext } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import TourListItem from "./ListItem";
import TourSortFilterContext from "@/contexts/TourSortFilter";

export default function Tours({ tours }) {
  const { filters } = useContext(TourSortFilterContext) || {};
  const sortedFilteredTours = getSortedTours(
    getFilteredTours(tours, filters),
    filters
  );

  function getFilteredTours(tours, filters) {
    const {
      characteristics: {
        complexity: {
          value: [complexityMin, complexityMax],
        },
        duration: {
          value: [durationMin, durationMax],
        },
      },
      themes,
    } = filters;
    const activeThemes = Object.keys(themes).filter((theme) => {
      return themes[theme];
    });

    return tours.filter((tour) => {
      const { complexity, duration, tourTheme, title } = tour;
      const arrayifiedTourThemes = tourTheme.map((t) => {
        return t.title.toLowerCase();
      });
      const isActiveTheme = activeThemes.some(
        (val) => arrayifiedTourThemes.indexOf(val) !== -1
      );

      if (!isActiveTheme) return false;
      if (complexity < complexityMin || complexity > complexityMax) {
        return false;
      }
      if (duration < durationMin || duration > durationMax) return false;

      return true;
    });
  }

  function getSortedTours(tours, filters) {
    const { possibleSorts, sortBy } = filters;
    const { type, direction } = possibleSorts[sortBy];

    return tours.sort((tourA, tourB) => {
      if (direction === "ascending") {
        if (tourA[type] < tourB[type]) return -1;
        if (tourA[type] > tourB[type]) return 1;
      }

      if (tourA[type] > tourB[type]) return -1;
      if (tourA[type] < tourB[type]) return 1;

      return 0;
    });
  }

  return (
    <div className="tours-list-container">
      <ul className="tours-list">
        {sortedFilteredTours.map((tour) => {
          const { id } = tour;
          return <TourListItem key={id} {...tour} />;
        })}
      </ul>
    </div>
  );
}

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
};
