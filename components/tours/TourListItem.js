import PropTypes from "prop-types";
import Link from "next/link";
import classnames from "classnames";
import IconComposer from "@/svg/IconComposer";

export default function Tour({ id, name, duration, complexity, thumbnail }) {
  function getBubble(complexity, bubble) {
    return (
      <div
        key={bubble}
        className={classnames("bubble", {
          full: complexity >= bubble,
        })}
      />
    );
  }

  function getBubbles(complexity) {
    return (
      <div className="bubbles">
        {[1, 2, 3, 4, 5].map((bubble) => {
          return getBubble(complexity, bubble);
        })}
      </div>
    );
  }

  function getTerm(complexity) {
    if (complexity <= 2) return "Easy";
    if (complexity <= 4) return "Medium";
    if (complexity >= 5) return "Hard";

    return "Medium";
  }

  return (
    <li className="tour-list-item">
      <Link href={`/tours/${id}`}>
        <a className="tour-link">
          <div
            className="thumbnail"
            style={{ backgroundImage: `url("${thumbnail}")` }}
          />
          <div className="details">
            <h3 className="name">{name}</h3>
            <div className="characteristics">
              <div className="duration">
                <div className="tablet-only-label">Duration</div>
                <IconComposer icon="Stopwatch" />
                <div className="time">{duration} min</div>
              </div>
              <div className="divider"></div>
              <div className="complexity">
                <div>Complexity </div>
                {getBubbles(complexity)}
                <div className="tablet-only-label">{getTerm(complexity)}</div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

Tour.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  complexity: PropTypes.number,
  duration: PropTypes.number,
  thumbnail: PropTypes.string,
};
