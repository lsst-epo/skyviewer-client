import { FunctionComponent, useState } from "react";
import Checkbox from "@/primitives/Checkbox";
import Slider from "@rubin-epo/epo-react-lib/HorizontalSlider";
import IconComposer from "@/svg/IconComposer";
import FiltersMenu from "@/global/FiltersMenu";
import defaultFilters, {
  CharacteristicParams,
} from "@/fixtures/defaultExplorerFilters";
import { useAladin } from "@/contexts/Aladin";
import { AladinSource } from "@/types/aladin";

const Filters: FunctionComponent = () => {
  const menuLabelId = "filters-menu-label";
  const menuDescriptionId = "filters-menu-description";
  const { aladin } = useAladin();
  const [commited, setCommitted] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const [showFiltersReset, setShowFiltersReset] = useState(false);
  const handleTypeFilter = (checked, type) => {
    setFilters({ ...filters, types: { ...filters.types, [type]: checked } });

    if (!showFiltersReset) {
      setShowFiltersReset(true);
    }
  };

  const handleCharacteristicFilter = (
    value: Array<number>,
    characteristic: string
  ) => {
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

  const resetFilters = () => {
    setFilters(defaultFilters);
    setShowFiltersReset(false);
  };

  const filtersChecker = (source: AladinSource) => {
    const types = filters.types;
    const {
      distance: { value: distanceRange },
      brightness: { value: brightnessRange },
    } = filters.characteristics;
    const { type, brightness, distance } = source?.data;
    const [minDistance, maxDistance] = distanceRange;
    const [minBrightness, maxBrightness] = brightnessRange;

    if (
      !types[type] ||
      distance < minDistance ||
      distance > maxDistance ||
      brightness < minBrightness ||
      brightness > maxBrightness
    ) {
      return false;
    }

    return true;
  };

  const commitFilters = () => {
    aladin?.view.catalogs.forEach((catalog) => {
      catalog.filterFn = filtersChecker;
      catalog.reportChange();
    });
    setCommitted(true);
  };

  return (
    <FiltersMenu
      {...{ menuLabelId, menuDescriptionId }}
      heading="Filtering Tool"
      subheading="Customize your view"
      actionButtonHandler={showFiltersReset ? resetFilters : null}
      commitHandler={commitFilters}
      openButtonOpts={{
        icon: <IconComposer icon="Filters" />,
        text: "Open Filters Modal Dialog",
        isIcon: true,
        classes: "filters-button control-button",
      }}
    >
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
              const characteristic: CharacteristicParams =
                filters.characteristics[charKey];
              const { min, max, step, value } = characteristic;

              return (
                <Slider
                  key={charKey}
                  minLabel={min.label}
                  maxLabel={max.label}
                  min={min.value}
                  max={max.value}
                  step={step}
                  value={value}
                  onChangeCallback={(value: Array<number>) =>
                    handleCharacteristicFilter(value, charKey)
                  }
                  darkMode
                />
              );
            })}
          </div>
        )}
      </div>
    </FiltersMenu>
  );
};

export default Filters;
