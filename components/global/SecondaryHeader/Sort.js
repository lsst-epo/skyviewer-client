import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Menu from "@/primitives/Menu";
import Checkbox from "@/primitives/Checkbox";
import Slider from "@/primitives/Slider";
import IconComposer from "@/svg/IconComposer";

export default function Sort({ context }) {
  const menuLabelId = "filters-menu-label";
  const menuDescriptionId = "filters-menu-description";
  const { setFilters, filters } = useContext(context) || {};
  const { possibleSorts, sortBy } = filters;
  const [isOpen, setIsOpen] = useState(false);
  const handleSort = (checked, type) => {
    console.log("handleSort");
  };

  return (
    <Menu
      classes="sort-menu"
      labelledbyId={menuLabelId}
      describedbyId={menuDescriptionId}
      headerIcon="Sort"
      heading="Sort by"
      openButtonOpts={{
        icon: <IconComposer icon="Sort" />,
        text: "Open Sort by Modal Dialog",
        iconText: "Sort by",
        classes: "guided-experience-sort-button",
      }}
      secondaryCloseButton
      secondaryCloseButtonOpts={{
        text: "Apply Sort",
        classes: "sort-menu-close-button",
      }}
    >
      <>
        <div className="menu-section">
          <h3 className="menu-section-heading">Release Characteristics</h3>
          {possibleSorts && (
            <div className="checkboxes">
              {possibleSorts.map((sort) => {
                const { id, label } = sort;
                return (
                  <Checkbox
                    key={sort + id}
                    label={label}
                    checked={id === sortBy}
                    toggleCallback={handleSort}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="menu-section">
          <h3 className="menu-section-heading">Tour Characteristics</h3>
        </div>
      </>
    </Menu>
  );
}

Sort.propTypes = {
  context: PropTypes.object,
};
