import PropTypes from "prop-types";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import IconComposer from "@/svg/IconComposer";

export default function Hamburger({ mobileNavActive, onClick }) {
  const { t } = useTranslation();

  return (
    <button
      aria-haspopup
      aria-expanded={mobileNavActive}
      onClick={onClick}
      className={classNames({
        "c-global-header__hamburger": true,
        "c-global-header__hamburger--is-active": mobileNavActive,
      })}
    >
      <span className="a-hidden">{t("toggle-nav")}</span>
      <IconComposer icon="Hamburger" className="c-global-header__icon" />
    </button>
  );
}

Hamburger.displayName = "Global.Header.Hamburger";

Hamburger.propTypes = {
  mobileNavActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
