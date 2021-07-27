import PropTypes from "prop-types";
import Link from "next/link";

export default function GuidedExperience({
  varietyName,
  slug,
  thumbnail,
  count,
}) {
  return (
    <li className="guided-experience">
      <Link href={slug}>
        <a className="guided-experience-link">
          <h2 className="guided-experience-heading">{varietyName}</h2>
          <div
            className="guided-experience-thumbnail"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}${thumbnail[0].url})`,
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
        </a>
      </Link>
    </li>
  );
}

GuidedExperience.propTypes = {
  varietyName: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  thumbnail: PropTypes.array.isRequired,
  count: PropTypes.number,
};
