import PropTypes from "prop-types";
import Menu from "@/primitives/Menu";

export default function AboutMenu({ toggleMenuCallback, isOpen }) {
  return (
    <Menu
      classes="main-menu about-menu"
      labelledbyId="about-menu-modal-label"
      describedbyId="about-menu-modal-description"
      heading="About Skyviewer"
      subheading="Credits"
      openCallback={toggleMenuCallback}
      closeCallback={toggleMenuCallback}
      openOverride={isOpen}
    >
      <div className="main-menu-content-wrapper">
        <div className="menu-section">
          <p>
            Of brilliant syntheses consciousness trillion gathered by gravity
            star stuff harvesting star light at the edge of forever. The only
            home we ever known another world across the centuries a very small
            stage in a vast cosmic arena a very small stage in a vast cosmic
            arena light years? Stirred by starlight are creatures of the cosmos
            globular star cluster vanquish the impossible concept of the number
            one how far away and billions upon billions upon billions upon
            billions upon billions upon billions upon billions.
          </p>
          <p>
            Of brilliant syntheses consciousness trillion gathered by gravity
            star stuff harvesting star light at the edge of forever. The only
            home we ever known another world across the centuries a very small
            stage in a vast cosmic arena a very small stage in a vast cosmic
            arena light years? Stirred by starlight are creatures of the cosmos
            globular star cluster vanquish the impossible concept of the number
            one how far away and billions upon billions upon billions upon
            billions upon billions upon billions upon billions.
          </p>
          <p>
            Of brilliant syntheses consciousness trillion gathered by gravity
            star stuff harvesting star light at the edge of forever. The only
            home we ever known another world across the centuries a very small
            stage in a vast cosmic arena a very small stage in a vast cosmic
            arena light years? Stirred by starlight are creatures of the cosmos
            globular star cluster vanquish the impossible concept of the number
            one how far away and billions upon billions upon billions upon
            billions upon billions upon billions upon billions.
          </p>
          <p>
            Flatland cosmic fugue worldlets paroxysm of global death tesseract
            Euclid. Orion sword with pretty stories for which there little good
            evidence as a patch of light globular star cluster preserve and
            cherish that pale blue dot star stuff harvesting star light? Take
            root and flourish shores of the cosmic ocean shores of the cosmic
            ocean permanence of the stars brain is the seed of intelligence
            emerged into consciousness and billions upon billions upon billions
            upon billions upon billions upon billions upon billions.
          </p>
        </div>
      </div>
    </Menu>
  );
}

AboutMenu.propTypes = {
  toggleMenuCallback: PropTypes.func,
  isOpen: PropTypes.bool,
};
