import PropTypes from "prop-types";
import { localizedShape } from "@/components/shapes/locale";
import imageShape from "@/components/shapes/image";

const newsShape = PropTypes.shape({
  contentBlocks: PropTypes.arrayOf(PropTypes.object),
  date: PropTypes.string,
  description: PropTypes.string,
  dynamicComponent: PropTypes.string,
  featuredImage: PropTypes.arrayOf(imageShape),
  hero: PropTypes.arrayOf(imageShape),
  id: PropTypes.string,
  language: PropTypes.string.isRequired,
  localized: localizedShape,
  title: PropTypes.string.isRequired,
  uri: PropTypes.string,
}).isRequired;

export default newsShape;
