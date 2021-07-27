import PropTypes from "prop-types";
import Link from "next/link";
import classnames from "classnames";
import IconComposer from "@/svg/IconComposer";
import Bubbles from "@/components/Bubbles";

export default function TourListItem({
  slug,
  title,
  duration,
  complexity,
  thumbnail,
}) {
  function getTerm(complexity) {
    if (complexity <= 2) return "Easy";
    if (complexity <= 4) return "Medium";
    if (complexity >= 5) return "Hard";

    return "Medium";
  }

  return (
    <li className="tour-list-item">
      <Link href={`/tours/${slug}`}>
        <a className="tour-link">
          <div
            className="thumbnail"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_ASSETS_BASE_URL}${thumbnail[0].url})`,
            }}
          />
          <div className="details">
            <h3 className="name">{title}</h3>
            <div className="characteristics">
              <div className="duration">
                <div className="tablet-only-label">Duration</div>
                <IconComposer icon="Stopwatch" />
                <div className="time">{duration} min</div>
              </div>
              <div className="divider"></div>
              <div className="complexity">
                <div>Complexity </div>
                <Bubbles val={complexity} />
                <div className="tablet-only-label">{getTerm(complexity)}</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

TourListItem.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  complexity: PropTypes.number,
  duration: PropTypes.number,
  thumbnail: PropTypes.array,
};
