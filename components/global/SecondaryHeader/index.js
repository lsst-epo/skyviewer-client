import PropTypes from "prop-types";
import classnames from "classnames";
import IconComposer from "@/svg/IconComposer";
import Filters from "./Filters";
import Sort from "./Sort";

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
          Search
        </li>
      </ul>
    </header>
  );
}

SecondaryHeader.propTypes = {
  context: PropTypes.object,
};
