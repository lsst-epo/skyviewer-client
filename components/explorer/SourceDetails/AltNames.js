import PropTypes from "prop-types";
import AltName from "./AltName";

export default function AltNames({ names }) {
  return (
    <>
      {names.map((name, i) => {
        const key = i + 1;
        return (
          <AltName key={`${name}-${key}`} label={`Name ${key}`} name={name} />
        );
      })}
    </>
  );
}

AltNames.propTypes = {
  names: PropTypes.array,
};
