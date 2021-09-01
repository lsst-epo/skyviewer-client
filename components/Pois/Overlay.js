import PropTypes from "prop-types";
import classnames from "classnames";

export default function Overlay({ isOpen, tourTitle, title, description }) {
  return (
    <div
      className={classnames("poi-overlay", {
        "is-open": isOpen,
      })}
    >
      <div className="poi-inner">
        <div className="poi-inner-header">
          <div className="tour-title">{tourTitle}</div>
          <h2 className="poi-title">{title}</h2>
        </div>
        <div
          className="poi-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}

Overlay.propTypes = {
  tourTitle: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isOpen: PropTypes.bool,
};
