import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import locales from "@/lib/locales";
import Input from "./Input";
import { localizedShape } from "@/shapes/locale";

const CRAFT_HOMEPAGE_URI = "__home__";

export default function LanguageSelect({
  localized,
  language: currentLanguage,
}) {
  const { t } = useTranslation();
  const router = useRouter();

  const getNewRoute = (newLanguage) => {
    const newLocale = localized.find(
      (locale) => locale.language === newLanguage
    );
    const uri = newLocale?.uri;
    if (uri === CRAFT_HOMEPAGE_URI) return "/";
    return uri;
  };

  const handleChange = ({ target: { value } }) => {
    if (value === currentLanguage) return null;
    const newRoute = getNewRoute(value);
    if (!newRoute) return null;
    router.push(newRoute);
  };

  return (
    <fieldset className="c-language-select">
      <legend className="a-hidden">{t("localize-content")}</legend>
      <div className="c-language-select__inner">
        {locales.map((locale) => {
          const { site, lang, label } = locale;
          return (
            <Input
              key={lang}
              id={`locale-select-${site}`}
              value={lang}
              label={label}
              checked={lang === currentLanguage}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </fieldset>
  );
}

LanguageSelect.displayName = "Global.LanguageSelect";

LanguageSelect.propTypes = {
  localized: localizedShape,
  language: PropTypes.string.isRequired,
};
