import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "@/primitives/Image";

const StyledImage = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: ${(p) => p.padding};

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;

const ResponsiveImage = ({ image, ratio = "8:5" }) => {
  const paddingArray = ratio.split(":");
  const padding =
    paddingArray.length > 1
      ? (paddingArray[1] / paddingArray[0]) * 100 + "%"
      : "100%";

  return (
    <StyledImage padding={padding}>
      <Image image={image} />
    </StyledImage>
  );
};

ResponsiveImage.propTypes = {
  image: PropTypes.object,
  ratio: PropTypes.string,
};

export default ResponsiveImage;
