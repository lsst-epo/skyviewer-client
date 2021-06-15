import PropTypes from "prop-types";
import classnames from "classnames";
import Link from "next/link";

export default function NavLink({ url, icon, text, iconBefore, classes }) {
  return (
    <Link href={url}>
      <a
        className={classnames("nav-link", {
          "icon-before": iconBefore && icon,
          "icon-after": !iconBefore && icon,
          [classes]: classes,
        })}
      >
        {iconBefore && icon}
        <span className="text">{text}</span>
        {!iconBefore && icon}
      </a>
    </Link>
  );
}

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  iconBefore: PropTypes.bool,
  classes: PropTypes.string,
};