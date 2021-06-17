import PropTypes from "prop-types";
import Link from "next/link";
import TourListItem from "./ListItem";

export default function Tours({ tours }) {
  return (
    <div className="tours-list-container">
      <ul className="tours-list">
        {tours.map((tour) => {
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
