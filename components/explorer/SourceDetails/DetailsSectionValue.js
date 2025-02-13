import PropTypes from "prop-types";
import classnames from "clsx";

export default function DetailsSection({ children, isFullWidth, isFlex }) {
  return (
    <div
      className={classnames("source-details-section-value", {
        "full-width": isFullWidth,
        flex: isFlex,
      })}
    >
      {children}
    </div>
  );
}

DetailsSection.propTypes = {
  isFullWidth: PropTypes.bool,
  isFlex: PropTypes.bool,
  children: PropTypes.node,
};
