import PropTypes from "prop-types";
import Link from "next/link";

export default function GuidedExperience({ title, slug, thumbnail, count }) {
  return (
    <li className="guided-experience">
      <Link href={slug} className="guided-experience-link">
        <h2 className="guided-experience-heading">{title}</h2>
        <div
          className="guided-experience-thumbnail"
          style={{
            backgroundImage: `url(${thumbnail[0].url})`,
          }}
        >
          <div className="guided-experience-count">
            <div className="ribbon-tail"></div>
            <div className="count-num">{count}</div>
            <div className="count-label">Tour{count > 1 ? "s" : ""}</div>
            <div className="angle-left" />
            <div className="angle-right" />
          </div>
        </div>
      </Link>
    </li>
  );
}

GuidedExperience.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.array.isRequired,
  count: PropTypes.number,
};
