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
      <Search />
      <Filters />
      <Share />
      <Zoom />
      <Goals />
      <Landmarks />
      <Grid />
      <Markers />
      <Orientation />
    </div>
  );
}
