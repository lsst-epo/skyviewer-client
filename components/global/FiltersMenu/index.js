import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Menu from "@/primitives/Menu";
import IconComposer from "@/svg/IconComposer";

export default function Filters({
  menuLabelId,
  menuDescriptionId,
  heading,
  subheading,
  actionButtonHandler,
  openButtonOpts,
  children,
}) {
  return (
    <Menu
      classes="filters-menu"
      labelledbyId={menuLabelId}
      describedbyId={menuDescriptionId}
      headerIcon="Filters"
      heading={heading}
      subheading={subheading}
      openButtonOpts={openButtonOpts}
      secondaryCloseButton
      secondaryCloseButtonOpts={{
        text: "Apply Filters",
        classes: "filters-menu-close-button",
      }}
      actionButton
      actionButtonHandler={actionButtonHandler}
      actionButtonOpts={{
        text: "Reset Filters",
        classes: "filters-menu-reset-button",
      }}
    >
      <div className="filters-menu-content-wrapper">{children}</div>
    </Menu>
  );
}

Filters.propTypes = {
  children: PropTypes.node,
  menuLabelId: PropTypes.string,
  menuDescriptionId: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  actionButtonHandler: PropTypes.func,
  openButtonOpts: PropTypes.object,
};
