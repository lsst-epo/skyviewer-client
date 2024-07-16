import PropTypes from "prop-types";
import classnames from "classnames";
import Link from "next/link";

export default function Buttonish({
  url,
  text,
  icon,
  isIcon,
  isBlock = false,
  isExternal = false,
  classes,
}) {
  const linkClasses = classnames("c-buttonish", {
    "c-buttonish--block": isBlock,
    [classes]: classes,
  });

  if (url && isExternal)
    return (
      <a href={url} className={linkClasses}>
        {icon}
        <span
          className={classnames({
            "screen-reader-only": isIcon,
          })}
        >
          {text}
        </span>
      </a>
    );

  if (url)
    return (
      <Link href={url} className={linkClasses}>
        {icon}
        <span
          className={classnames({
            "screen-reader-only": isIcon,
          })}
        >
          {text}
        </span>
      </Link>
    );

  return null;
}

Buttonish.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  isIcon: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool,
  classes: PropTypes.string,
};
