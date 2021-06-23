import { useState } from "react";
import PropTypes from "prop-types";
import Nav from "@/components/Pois/Nav";

export default function TourLayout({ nextLink, backLink, children }) {
  return (
    <>
      {children}
      <Nav {...{ nextLink, backLink }} />
    </>
  );
}

TourLayout.propTypes = {
  nextLink: PropTypes.object,
  backLink: PropTypes.object,
  children: PropTypes.node,
};
