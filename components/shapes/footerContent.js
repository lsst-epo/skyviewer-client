import PropTypes from "prop-types";
import { linksShape } from "@/shapes/link";
import imageShape from "@/shapes/image";

const footerContentShape = PropTypes.shape({
  links: linksShape,
  colophon: PropTypes.node,
  supportersLogos: PropTypes.arrayOf(imageShape),
});

export default footerContentShape;
