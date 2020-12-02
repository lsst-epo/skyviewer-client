import PropTypes from "prop-types";
import imageShape from "@/shapes/image";
import { localizedShape } from "@/shapes/locale";

const staffShape = PropTypes.shape({
  id: PropTypes.string,
  language: PropTypes.string,
  localized: localizedShape,
  header: PropTypes.string,
  staffLocation: PropTypes.string,
  staffPortrait: PropTypes.arrayOf(imageShape),
  staffBio: PropTypes.string,
  plainText: PropTypes.string.isRequired,
  staffType: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  uri: PropTypes.string,
});

export default staffShape;
