import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Checkbox from "@/components/primitives/Checkbox";
import Slider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import IconComposer from "@/components/svg/IconComposer";
import FiltersMenu from "@/components/global/FiltersMenu";

export default function Filters({ context, defaultFilters }) {
  const menuLabelId = "guided-experience-filters-menu-label";
  const menuDescriptionId = "guided-experience-filters-menu-description";
  const { setFilters, filters } = useContext(context) || {};
  const [isOpen, setIsOpen] = useState(false);
  const [showFiltersReset, setShowFiltersReset] = useState(false);
  const handleThemeFilter = (checked, theme) => {
    setFilters({ ...filters, themes: { ...filters.themes, [theme]: checked } });

    if (!showFiltersReset) {
      setShowFiltersReset(true);
    }
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

    if (!showFiltersReset) {
      setShowFiltersReset(true);
    }
  };

  const resetSort = () => {
    setFilters({
      ...filters,
      themes: { ...defaultFilters.themes },
      characteristics: { ...defaultFilters.characteristics },
    });
    setShowFiltersReset(false);
  };

  return (
    <FiltersMenu
      {...{ menuLabelId, menuDescriptionId }}
      heading="Filtering Tool"
      subheading="Customize tours"
      actionButtonHandler={showFiltersReset ? resetSort : null}
      openButtonOpts={{
        icon: <IconComposer icon="Filters" />,
        text: "Open Filters Modal Dialog",
        iconText: "Filter",
        classes: "guided-experience-filters-button",
      }}
    >
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
                  key={charKey}
                  label={charKey}
                  minLabel={min.label}
                  maxLabel={max.label}
                  min={min.value}
                  max={max.value}
                  step={step}
                  value={value}
                  darkMode
                  onChangeCallback={(value) =>
                    handleCharacteristicFilter(value, charKey)
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </FiltersMenu>
  );
}

Filters.propTypes = {
  context: PropTypes.object,
  defaultFilters: PropTypes.object,
};
