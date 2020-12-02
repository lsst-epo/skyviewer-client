import { useState, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";
import NavItemWithChildren from "./NavItemWithChildren";
import { useClickEvent } from "@/hooks/listeners";
import { internalLinkWithChildrenShape } from "@/shapes/link";

export default function Navigation({
  items,
  theme,
  mobileActive,
  mobileSetter,
}) {
  const [active, setActive] = useState(null);
  const navList = useRef();

  useClickEvent(handleClick);

  function handleClick(e) {
    const isLink =
      e.target.nodeName === "A" || e.target.parentElement.nodeName === "A";
    if (mobileSetter && mobileActive && isLink) {
      mobileSetter(false);
    }
    if (navList.current.contains(e.target)) return;
    setActive(null);
  }

  function handleToggleClick(id) {
    setActive((prevActive) => (prevActive === id ? null : id));
  }

  if (!items || items.length < 1) return null;

  return (
    <ul
      ref={navList}
      className={classNames({
        "c-nav-list": true,
        [`c-nav-list--${theme}`]: !!theme,
        "c-nav-list--is-active": mobileActive,
      })}
    >
      {items.map(({ id, title, uri, children }) => {
        const hasChildren = children && children.length > 0;

        return (
          <li key={id} className="c-nav-list__item">
            {hasChildren && (
              <NavItemWithChildren
                id={id}
                active={id === active}
                title={title}
                uri={uri}
                childItems={children}
                onToggleClick={handleToggleClick}
                onEsc={() => setActive(null)}
                theme={theme}
              />
            )}
            {!hasChildren && (
              <Link href={`/${uri}`}>
                {/* eslint-disable */}
                <a
                  onClick={() => setActive(null)}
                  className={classNames({
                    "c-nav-list__link": true,
                    [`c-nav-list__link--${theme}`]: !!theme,
                  })}
                >
                  {/* eslint-enable */}
                  <span className="c-nav-list__link-text">{title}</span>
                </a>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Navigation.displayName = "Header.Navigation";

Navigation.propTypes = {
  items: PropTypes.arrayOf(internalLinkWithChildrenShape),
  theme: PropTypes.oneOf(["desktop", "mobile"]),
  mobileActive: PropTypes.bool,
  mobileSetter: PropTypes.func,
};

Navigation.defaultProps = {
  theme: "desktop",
};
