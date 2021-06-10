import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Menu from "@/primitives/Menu";
import Checkbox from "@/primitives/Checkbox";
import Slider from "@/primitives/Slider";
import IconComposer from "@/svg/IconComposer";

export default function Filters({ context }) {
  const menuLabelId = "guided-experience-filters-menu-label";
  const menuDescriptionId = "guided-experience-filters-menu-description";
  const { setFilters, filters } = useContext(context) || {};
  const [isOpen, setIsOpen] = useState(false);
  const handleThemeFilter = (checked, theme) => {
    setFilters({ ...filters, themes: { ...filters.themes, [theme]: checked } });
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
      subheading="Customize tours"
      openButtonOpts={{
        icon: <IconComposer icon="Filters" />,
        text: "Open Filters Modal Dialog",
        iconText: "Filter",
        classes: "guided-experience-filters-button",
      }}
      secondaryCloseButton
      secondaryCloseButtonOpts={{
        text: "Apply Filters",
        classes: "filters-menu-close-button",
      }}
    >
      <>
        <div className="menu-section">
          <h3 className="menu-section-heading">Themes</h3>
          {filters.themes && (
            <div className="checkboxes">
              {Object.keys(filters.themes).map((theme, i) => {
                return (
                  <Checkbox
                    key={theme + i}
                    label={theme}
                    checked={filters.themes[theme]}
                    toggleCallback={handleThemeFilter}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="menu-section">
          <h3 className="menu-section-heading">Duration and Complexity</h3>
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
      </>
    </Menu>
  );
}

Filters.propTypes = {
  context: PropTypes.object,
};
