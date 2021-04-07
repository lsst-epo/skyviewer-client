import { useEffect, useState, useContext } from "react";
import AladinCatalogsContext from "@/contexts/AladinCatalogs";
import FiltersContext from "@/contexts/Filters";
import Button from "@/primitives/Button";
import Modal from "@/primitives/Modal";
import IconComposer from "@/svg/IconComposer";
import AladinGlobalContext from "@/contexts/AladinGlobal";

export default function Filters() {
  const modalLabelId = "filters-modal-label";
  const modalDescriptionId = "filters-modal-description";
  const { setFilters, filters } = useContext(FiltersContext) || {};
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilters = () => setIsOpen(!isOpen);
  const handleFilter = () => {
    if (!filters) return;
    const { score: oldScore } = filters || {};
    const newScore = oldScore + 0.25;
    setFilters({ ...filters, score: newScore >= 10 ? 4.5 : newScore });
  };

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
          <div className="checkboxes">Checkboxes</div>
        </div>
        <div className="filters-modal-section">
          <h3 className="filters-modal-section-heading">Object characteristics</h3>
          <div className="sliders">sliders</div>
        </div>
      </div>
    </Modal>
  );
}
