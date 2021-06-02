import PropTypes from "prop-types";
import Link from "next/link";
import Tour from "./TourListItem";

export default function Tours({ tours }) {
  return (
    <div className="tours-list-container">
      <ul className="tours-list">
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} {...tour} />;
        })}
      </ul>
    </div>
  );
}

Tours.propTypes = {
  tours: PropTypes.array.isRequired,
};
