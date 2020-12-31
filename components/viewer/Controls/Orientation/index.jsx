import { useEffect, useState } from "react";
import IconComposer from "@/svg/IconComposer";

export default function Orientation() {
  return (
    <div className="button icon-button orientation-indicator">
      <IconComposer icon="Compass" />
    </div>
  );
}
