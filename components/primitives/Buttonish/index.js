import PropTypes from "prop-types";

export default function Buttonish({ url, text, isBlock = false }) {
  if (url)
    return (
      <a
        href={url}
        className={`c-buttonish ${isBlock ? "c-buttonish--block" : ""}`}
      >
        {text}
      </a>
    );

  return null;
}

Buttonish.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
  isBlock: PropTypes.bool,
};
