import PropTypes from "prop-types";
import Link from "next/link";

export default function GuidedExperience({ heading, url, thumbnail, count }) {
  return (
    <li className="guided-experience">
      <Link href={url}>
        <a className="guided-experience-link">
          <h2 className="guided-experience-heading">{heading}</h2>
          <div
            className="guided-experience-thumbnail"
            style={{ backgroundImage: `url(${thumbnail})` }}
          >
            <div className="guided-experience-count">
              <div className="ribbon-tail"></div>
              <div className="count-num">{count}</div>
              <div className="count-label">Tour{count > 1 ? "s" : ""}</div>
              <div className="angle-left" />
              <div className="angle-right" />
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

GuidedExperience.propTypes = {
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  count: PropTypes.number,
};
