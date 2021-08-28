import { useState, useContext } from "react";
import FiltersContext from "@/contexts/Filters";
import Menu from "@/primitives/Menu";
import Checkbox from "@/primitives/Checkbox";
import Slider from "@/primitives/Slider";
import IconComposer from "@/svg/IconComposer";

export default function Filters() {
  const menuLabelId = "filters-menu-label";
  const menuDescriptionId = "filters-menu-description";
  const { setFilters, filters } = useContext(FiltersContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  const handleTypeFilter = (checked, type) => {
    setFilters({ ...filters, types: { ...filters.types, [type]: checked } });
  };

  const handleCharacteristicFilter = (value, characteristic) => {
    setFilters({
      ...filters,
      characteristics: {
        ...filters.characteristics,
        [characteristic]: {
          ...filters.characteristics[characteristic],
          value,
        },
      },
    });
  };

  return (
    <Menu
      classes="filters-menu"
      labelledbyId={menuLabelId}
      describedbyId={menuDescriptionId}
      headerIcon="Filters"
      heading="Filtering Tool"
      subheading="Customize your view"
      openButtonOpts={{
        icon: <IconComposer icon="Filters" />,
        text: "Open Filters Modal Dialog",
        isIcon: true,
        classes: "filters-button control-button",
      }}
      secondaryCloseButton
      secondaryCloseButtonOpts={{
        text: "Apply Filters",
        classes: "filters-menu-close-button",
      }}
    >
      <div className="filters-menu-content-wrapper">
        <div className="menu-section">
          <h3 className="menu-section-heading">Object type</h3>
          {filters.types && (
            <div className="checkboxes">
              {Object.keys(filters.types).map((type, i) => {
                return (
                  <Checkbox
                    key={type + i}
                    label={type}
                    checked={filters.types[type]}
                    toggleCallback={handleTypeFilter}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="menu-section">
          <h3 className="menu-section-heading">Object characteristics</h3>
          {filters.characteristics && (
            <div className="sliders">
              {Object.keys(filters.characteristics).map((charKey, i) => {
                const characteristic = filters.characteristics[charKey];
                const { min, max, step, value } = characteristic;

                return (
                  <Slider
                    key={charKey + i}
                    label={charKey}
                    minLabel={min.label}
                    maxLabel={max.label}
                    min={min.value}
                    max={max.value}
                    step={step}
                    value={value}
                    doubleHandle
                    onChangeCallback={handleCharacteristicFilter}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Menu>
  );
}
