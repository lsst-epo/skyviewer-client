import PropTypes from "prop-types";

export default function ExternalLink({ href, target, className, children }) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      className={className}
    >
      {children}
    </a>
  );
}

ExternalLink.displayName = "Primitives.ExternalLink";

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank"]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
};
