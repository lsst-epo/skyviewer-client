import { useEffect, useState } from "react";
import Filters from "./Filters";
import Goals from "./Goals";
import Grid from "./Grid";
import Landmarks from "./Landmarks";
import Markers from "./Markers";
import Orientation from "./Orientation";
import Search from "./Search";
import Share from "./Share";
import Zoom from "./Zoom";

export default function Controls() {
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
          <Filters />
        </li>
      </ul>
      <Zoom />
      <ul
        role="menu"
        aria-label="Wayfinding"
        className="wayfinding controls-submenu"
      >
        <li role="menuitem">
          <Goals />
        </li>
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
        <li role="menuitem">
          <Orientation />
        </li>
        <li role="menuitem">
          <Grid />
        </li>
      </ul>
    </div>
  );
}
