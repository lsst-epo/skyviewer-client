import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import useResizeObserver from "use-resize-observer";
import { useTranslation } from "react-i18next";
import locales from "@/lib/locales";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import LanguageSelect from "@/global/Header/LanguageSelect";
import Logo from "@/svg/unique/Logo";
import internalLinkShape from "@/shapes/link";
import { localizedShape } from "@/shapes/locale";

export default function Header({ navItems, localized, language }) {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const { t } = useTranslation();
  const localeObj = locales.find((locale) => locale.lang === language) || {
    subdirectory: "",
  };
  const homeUrl = `/${localeObj.subdirectory}`;

  const { ref } = useResizeObserver({
    onResize: ({ width }) => {
      document.documentElement.style.setProperty(
        "--header-width",
        `${ref.current.offsetWidth}px`
      );
    },
  });

  return (
    <header ref={ref} className="c-global-header">
      <a href="#page-content" className="c-global-header__skip-link">
        {t("skip-to-content")}
      </a>
      <div className="c-global-header__logo-block">
        <Link href={homeUrl}>
          <a className="c-global-header__logo-link">
            <Logo className="c-global-header__logo" />
          </a>
        </Link>
      </div>
      <nav className="c-global-header__nav-block">
        <Navigation items={navItems} theme="desktop" />
      </nav>
      <div className="c-global-header__search-block">
        <SearchBar />
      </div>
      <div className="c-global-header__toggle-block">
        <LanguageSelect localized={localized} language={language} />
      </div>
      <div className="c-global-header__hamburger-block">
        <Hamburger
          mobileNavActive={mobileNavActive}
          onClick={() => setMobileNavActive(!mobileNavActive)}
        />
      </div>
      <Navigation
        items={navItems}
        theme="mobile"
        mobileActive={mobileNavActive}
        mobileSetter={setMobileNavActive}
      />
    </header>
  );
}

Header.displayName = "Global.Header";

Header.propTypes = {
  navItems: PropTypes.arrayOf(internalLinkShape),
  localized: localizedShape,
  language: PropTypes.string.isRequired,
};
