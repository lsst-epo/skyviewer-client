import PropTypes from "prop-types";
import Buttonish from "@/primitives/Buttonish";
import Button from "@/primitives/Button";

export default function Nav({ nextLink, backLink }) {
  return (
    <div className="poi-nav-container">
      <ul className="poi-nav">
        {/* <li className="poi-nav-item">
          <Button text="Share" classes="poi-nav-button" />
        </li> */}
        <li className="poi-nav-item">
          <Buttonish
            url={backLink.url}
            text={backLink.text}
            classes="poi-nav-button"
          />
        </li>
        <li className="poi-nav-item">
          <Buttonish
            url={nextLink.url}
            text={nextLink.text}
            classes="poi-nav-button"
          />
        </li>
      </ul>
    </div>
  );
}

Nav.propTypes = {
  nextLink: PropTypes.object,
  backLink: PropTypes.object,
};
