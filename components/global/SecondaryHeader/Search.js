import { useContext } from "react";
import PropTypes from "prop-types";
import Modal from "@/components/primitives/Modal";
import TextInput from "@/components/primitives/TextInput";
import IconComposer from "@/components/svg/IconComposer";
import useDebounce from "@/hooks/useDebounce";

export default function Search({ context }) {
  const menuLabelId = "guided-experience-search-menu-label";
  const { setSearchTerm, searchTerm } = useContext(context) || {};
  const debouncedSearchHandler = useDebounce(setSearchTerm, 500);

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
      closeKey={"Enter"}
    >
      <TextInput
        id="search-field"
        className="search-input"
        labelledbyId={menuLabelId}
        handleChange={(e) => {
          debouncedSearchHandler(e.target.value);
        }}
        label="Search"
      />
    </Modal>
  );
}

Search.propTypes = {
  context: PropTypes.object,
};
