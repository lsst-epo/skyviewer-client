import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import internalLinkShape from "@/shapes/link";

export default function Subnavigation({ items, active, onClick }) {
  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
  /*
   * Ignore false positives (key event exists on Navigation component; role attribute not needed
   * since Link component validly handles href and window history, click just closes subnav)
   */
  return (
    <ul
      className={classNames({
        "c-subnav-list": true,
        "c-subnav-list--is-active": active,
      })}
    >
      {items.map(({ id, title, uri }) => (
        <li key={id} className="c-subnav-list__item">
          <Link href={`/${uri}`}>
            <a
              className="c-subnav-list__link"
              tabIndex={active ? 0 : -1}
              onClick={onClick}
            >
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

Subnavigation.displayName = "Header.Navigation.Subnavigation";

Subnavigation.propTypes = {
  items: PropTypes.arrayOf(internalLinkShape),
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
