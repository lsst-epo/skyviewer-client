import { useEffect, useState, useContext } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";

export default function Filters() {
  const { aladin } = useContext(AladinGlobalContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilters = () => {
    const corners = aladin.getFovCorners();
    console.log(aladin, corners);
  };

  return (
    <Button
      icon={<IconComposer icon="Filters" />}
      onClick={toggleFilters}
      text="Toggle Filters"
      isIcon
      classes="filters-button control-button"
    />
  );
}
