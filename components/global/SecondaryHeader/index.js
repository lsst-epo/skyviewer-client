import PropTypes from "prop-types";
// import classnames from "classnames";
import Filters from "./Filters";
import Sort from "./Sort";
import Search from "./Search";

export default function SecondaryHeader({ context }) {
  return (
    <header className="secondary-header">
      <ul role="menu" className="secondary-items">
        <li role="menuitem" className="secondary-item">
          <Sort context={context} />
        </li>
        <li role="menuitem" className="secondary-item">
          <Filters context={context} />
        </li>
        <li role="menuitem" className="secondary-item">
          <Search context={context} />
        </li>
      </ul>
    </header>
  );
}

SecondaryHeader.propTypes = {
  context: PropTypes.object,
};
