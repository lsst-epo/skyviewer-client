import PropTypes from "prop-types";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";

export default function Nav({ nextLink, backLink }) {
  return (
    <div className="poi-nav-container">
      <ul className="poi-nav">
        <li className="poi-nav-item">
          <Buttonish url={backLink.url} text={backLink.text} isBlock />
        </li>
        <li className="poi-nav-item">
          <Buttonish url={nextLink.url} text={nextLink.text} isBlock />
        </li>
      </ul>
    </div>
  );
}

Nav.propTypes = {
  nextLink: PropTypes.object,
  backLink: PropTypes.object,
};
