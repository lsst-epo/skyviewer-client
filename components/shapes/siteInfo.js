import PropTypes from "prop-types";
import imageShape from "@/shapes/image";

export const socialInfoInternalShape = {
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
  linkedIn: PropTypes.string,
  instagram: PropTypes.string,
  email: PropTypes.string,
};

export const socialInfoShape = PropTypes.shape(socialInfoInternalShape);

const siteInfoShape = PropTypes.shape({
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  siteImage: PropTypes.arrayOf(imageShape),
  ...socialInfoInternalShape,
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.node,
    })
  ),
});

export default siteInfoShape;
