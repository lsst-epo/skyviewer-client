import PropTypes from "prop-types";
import MixedLink from "@/primitives/MixedLink";
import { linksShape } from "@/shapes/link";

export default function Nav({ links }) {
  return (
    <nav aria-label="Footer Links" className="c-footer-nav">
      <ul className="c-footer-nav__list">
        {links.map((link, index) => (
          <li key={index} className="c-footer-nav__item">
            <MixedLink className="c-footer-nav__link" {...link.mixedLink} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

Nav.displayName = "Global.Footer.Nav";

Nav.propTypes = {
  links: linksShape.isRequired,
};
