import PropTypes from "prop-types";
import { linksShape } from "@/components/shapes/link";
import imageShape from "@/components/shapes/image";

const footerContentShape = PropTypes.shape({
  links: linksShape,
  colophon: PropTypes.node,
  supportersLogos: PropTypes.arrayOf(imageShape),
});

export default footerContentShape;
