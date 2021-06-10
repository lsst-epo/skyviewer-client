import { useState, useContext } from "react";
import PropTypes from "prop-types";
import Modal from "@/primitives/Modal";
import TextInput from "@/primitives/TextInput";
import IconComposer from "@/svg/IconComposer";

export default function Search({ context }) {
  const menuLabelId = "guided-experience-search-menu-label";
  const { setFilters, filters } = useContext(context) || {};
  const handleSearch = (criteria) => {
    console.log("handleSearch");
  };

  return (
    <Modal
      classes="search-menu"
      labelledbyId={menuLabelId}
      openButtonOpts={{
        icon: <IconComposer icon="Search" />,
        text: "Open Search Modal Dialog",
        iconText: "Search",
        classes: "guided-experience-search-button",
      }}
      closeButtonOpts={{
        icon: <IconComposer icon="Search" />,
        text: "Close Search Modal Dialog",
        iconText: "Search",
        isIcon: true,
        classes: "search-menu-close-button",
      }}
    >
      <TextInput
        id="search-field"
        className="search-input"
        labelledbyId={menuLabelId}
        onChange={handleSearch}
        label="Search"
      />
    </Modal>
  );
}

Search.propTypes = {
  context: PropTypes.object,
};
