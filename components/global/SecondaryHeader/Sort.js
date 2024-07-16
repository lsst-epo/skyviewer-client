import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Menu from "@/primitives/Menu";
import Radio from "@/primitives/Radio";
import IconComposer from "@/svg/IconComposer";

export default function Sort({ context }) {
  const menuLabelId = "filters-menu-label";
  const menuDescriptionId = "filters-menu-description";
  const { setFilters, filters } = useContext(context) || {};
  const { possibleSorts, sortBy } = filters;
  const [showSortReset, setShowSortReset] = useState(false);
  const handleSort = (checked, sort, id) => {
    setFilters({ ...filters, sortBy: id });

    if (!showSortReset) {
      setShowSortReset(true);
    }
  };

  const resetSort = () => {
    setFilters({ ...filters, sortBy: "0" });
    setShowSortReset(false);
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
      actionButton
      actionButtonHandler={showSortReset ? resetSort : null}
      actionButtonOpts={{
        text: "Reset Sort",
        classes: "sort-menu-reset-button",
      }}
    >
      <div className="sort-menu-content-wrapper">
        <div className="menu-section">
          <h3 className="menu-section-heading">Release Characteristics</h3>
          {possibleSorts && (
            <div className="checkboxes">
              {possibleSorts.map((sort) => {
                const { id, label } = sort;
                return (
                  <Radio
                    id={id}
                    key={sort + id}
                    label={label}
                    name="sort-tours"
                    checked={id === sortBy}
                    toggleCallback={handleSort}
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

Sort.propTypes = {
  context: PropTypes.object,
};
