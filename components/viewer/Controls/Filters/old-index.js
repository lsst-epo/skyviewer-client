import { useEffect, useState, useContext } from "react";
import AladinCatalogsContext from "@/contexts/AladinCatalogs";
import FiltersContext from "@/contexts/Filters";
import Button from "@/primitives/Button";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";

export default function Filters() {
  const { setFilters, filters } = useContext(FiltersContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  // const toggleFilters = () => setIsOpen(!isOpen);
  const handleFilter = () => {
    if (!filters) return;
    const { score: oldScore } = filters || {};
    const newScore = oldScore + 0.25;
    setFilters({ ...filters, score: newScore >= 10 ? 4.5 : newScore });
  };

  return (
    <Button
      icon={<IconComposer icon="Filters" />}
      onClick={handleFilter}
      text="Toggle Filters"
      isIcon
      classes="filters-button control-button"
    />
  );
}
