import { useEffect, useState, useContext } from "react";
import AladinCatalogsContext from "@/contexts/AladinCatalogs";
import FiltersContext from "@/contexts/Filters";
import Button from "@/primitives/Button";
import Modal from "@/primitives/Modal";
import Checkbox from "@/primitives/Checkbox";
import Slider from "@/primitives/Slider";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";

export default function Filters() {
  const modalLabelId = "filters-modal-label";
  const modalDescriptionId = "filters-modal-description";
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

  // const handleFilter = () => {
  //   if (!filters) return;
  //   const { score: oldScore } = filters || {};
  //   const newScore = oldScore + 0.25;
  //   setFilters({ ...filters, score: newScore >= 10 ? 4.5 : newScore });
  // };

  return (
    <Modal
      labelledbyId={modalLabelId}
      describedbyId={modalDescriptionId}
      openButtonOpts={{
        icon: <IconComposer icon="Filters" />,
        text: "Open Filters Modal Dialog",
        isIcon: true,
        classes: "filters-button control-button",
      }}
    >
      <div className="filters-modal">
        <div className="filters-modal-header">
          <IconComposer icon="Filters" className="filters-modal-header-icon" />
          <div>
            <h2 id={modalLabelId} className="filters-modal-header-heading">
              Filtering Tool
            </h2>
            <div
              id={modalDescriptionId}
              className="filters-modal-header-subheading"
            >
              Customize your view
            </div>
          </div>
        </div>
        <div className="filters-modal-section">
          <h3 className="filters-modal-section-heading">Object type</h3>
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
        <div className="filters-modal-section">
          <h3 className="filters-modal-section-heading">
            Object characteristics
          </h3>
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
    </Modal>
  );
}
