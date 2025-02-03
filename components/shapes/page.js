import PropTypes from "prop-types";
import { localizedShape } from "@/components/shapes/locale";
import imageShape from "@/components/shapes/image";

const pageShape = PropTypes.shape({
  id: PropTypes.string,
  uri: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  contentBlocks: PropTypes.arrayOf(PropTypes.object),
  pageType: PropTypes.string.isRequired,
  dynamicComponent: PropTypes.string,
  localized: localizedShape,
  language: PropTypes.string.isRequired,
  hero: PropTypes.arrayOf(imageShape),
}).isRequired;

export default pageShape;
