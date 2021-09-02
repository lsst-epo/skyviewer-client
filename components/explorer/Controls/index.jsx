import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Goals from "./Goals";
import Grid from "./Grid";
import Landmarks from "./Landmarks";
import Markers from "./Markers";
import Orientation from "./Orientation";
import Search from "./Search";
import Share from "./Share";
import Pan from "./Pan";
import Zoom from "./Zoom";

export default function Controls({ defaultFilters }) {
  return (
    <div className="controls">
      <ul
        role="menu"
        aria-label="Search and Filter"
        className="find controls-submenu"
      >
        <li role="menuitem">
          <Search />
        </li>
        <li role="menuitem">
          <Filters defaultFilters={defaultFilters} />
        </li>
      </ul>
      <Zoom />
      <Pan />
      <ul
        role="menu"
        aria-label="Wayfinding"
        className="wayfinding controls-submenu"
      >
        {/* <li role="menuitem">
          <Goals />
        </li> */}
        <li role="menuitem">
          <Landmarks />
        </li>
      </ul>
      <Share />
      <ul
        role="menu"
        aria-label="Toggle overlays"
        className="overlays controls-submenu"
      >
        <li role="menuitem">
          <Markers />
        </li>
        {/* <li role="menuitem">
          <Orientation />
        </li>*/}
        <li role="menuitem">
          <Grid />
        </li>
      </ul>
    </div>
  );
}

Controls.propTypes = {
  defaultFilters: PropTypes.object,
};
