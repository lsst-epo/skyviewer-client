import { useEffect, useState } from "react";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilters = () => setIsOpen(!isOpen);

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
