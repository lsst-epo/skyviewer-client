import { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Subnavigation from "./Subnavigation";
import IconComposer from "@/svg/IconComposer";
import useFocusTrap from "@/hooks/useFocusTrap";
import { useKeyDownEvent } from "@/hooks/listeners";
import internalLinkShape, { internalLinkInternalShape } from "@/shapes/link";

export default function NavItemWithChildren({
  id,
  active,
  title,
  uri,
  childItems,
  onToggleClick,
  onEsc,
  theme,
}) {
  const ref = useRef(null);

  useFocusTrap(ref, active);
  useKeyDownEvent(handleKeyDown);

  function handleKeyDown({ key }) {
    if (!active || key !== "Escape") return;
    onEsc();
  }

  const parent = { id, title, uri };
  const childrenWithParent = [parent].concat(childItems);

  return (
    <div ref={ref}>
      <button
        onClick={() => onToggleClick(id)}
        aria-expanded={active}
        aria-haspopup
        className={classNames({
          "c-nav-list__link": true,
          "c-nav-list__link--is-active": active,
          [`c-nav-list__link--${theme}`]: !!theme,
        })}
      >
        <IconComposer icon="Caret" className="c-nav-list__link-icon" />
        <span className="c-nav-list__link-text">{title}</span>
      </button>
      <Subnavigation
        items={childrenWithParent}
        active={active}
        onClick={onEsc}
      />
    </div>
  );
}

NavItemWithChildren.displayName =
  "Global.Header.Navigation.NavItemWithChildren";

NavItemWithChildren.propTypes = {
  ...internalLinkInternalShape,
  active: PropTypes.bool,
  childItems: PropTypes.arrayOf(internalLinkShape),
  onToggleClick: PropTypes.func.isRequired,
  onEsc: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["desktop", "mobile"]),
};
