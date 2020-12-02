import { useRef, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useOnClickOutside, useKeyDownEvent } from "@/hooks/listeners";
import IconComposer from "@/svg/IconComposer";

const INPUT_ID = "headerSearchBar";

export default function SearchBar() {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useKeyDownEvent(handleKeyDown);
  useOnClickOutside(ref, () => setOpen(false));

  function handleKeyDown({ key }) {
    if (key !== "Escape") return;
    setOpen(false);
  }

  function handleSubmit(event) {
    console.log("Search submitted"); // eslint-disable-line
    event.preventDefault();
  }

  return (
    <div ref={ref} className="c-search-bar">
      <button
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="c-search-bar__toggle"
      >
        <span className="a-hidden">{t("toggle-search")}</span>
        <IconComposer icon="Search" className="c-global-header__icon" />
      </button>
      <form
        action=""
        onSubmit={handleSubmit}
        className={classNames({
          "c-search-bar__form": true,
          "c-search-bar__form--is-open": open,
        })}
      >
        <label htmlFor={INPUT_ID} className="a-hidden">
          {t("search-site")}
        </label>
        <input
          id={INPUT_ID}
          type="text"
          placeholder={t("search-placeholder")}
          autoComplete="off"
          className="c-search-bar__input"
          required
          tabIndex={open ? 0 : -1}
        />
        <button type="submit" className="a-hidden" tabIndex={open ? 0 : -1}>
          {t("submit-search")}
        </button>
      </form>
    </div>
  );
}

SearchBar.displayName = "Global.Header.SearchBar";
