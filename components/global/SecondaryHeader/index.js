"use client";
import PropTypes from "prop-types";
import Filters from "./Filters";
import Sort from "./Sort";
import Search from "./Search";

export default function SecondaryHeader({
  sortFilterContext,
  searchContext,
  defaultFilters,
}) {
  return (
    <header className="secondary-header">
      <ul role="menu" className="secondary-items">
        <li role="menuitem" className="secondary-item">
          <Sort context={sortFilterContext} />
        </li>
        <li role="menuitem" className="secondary-item">
          <Filters
            defaultFilters={defaultFilters}
            context={sortFilterContext}
          />
        </li>
        <li role="menuitem" className="secondary-item">
          <Search context={searchContext} />
        </li>
      </ul>
    </header>
  );
}

SecondaryHeader.propTypes = {
  sortFilterContext: PropTypes.object,
  searchContext: PropTypes.object,
  defaultFilters: PropTypes.object,
};
