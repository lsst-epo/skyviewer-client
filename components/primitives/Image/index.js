import PropTypes from "prop-types";
import classNames from "classnames";
import imageShape from "@/shapes/image";

const position = (x, y) => {
  if (!x && !y) return null;
  return `${x || 50}% ${y || 50}%`;
};

export default function Image({ image, className }) {
  const {
    url,
    url2x,
    url3x,
    width,
    height,
    altText,
    focalPointX,
    focalPointY,
  } = image;
  const style = {
    objectPosition: position(focalPointX, focalPointY),
  };

  return (
    <img
      width={width}
      height={height}
      srcSet={`${url3x} 3x, ${url2x} 2x, ${url} 1x`}
      src={url}
      alt={altText}
      className={classNames({
        [`${className}`]: !!className,
      })}
      style={style}
    />
  );
}

Image.displayName = "Primitives.Image";

Image.propTypes = imageShape;
