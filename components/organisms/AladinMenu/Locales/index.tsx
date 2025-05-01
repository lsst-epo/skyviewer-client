"use client";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { fallbackLng, languages } from "@/lib/i18n/settings";
import { usePathname, useRouter } from "next/navigation";
import { MenuItemRadio } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import Submenu from "../Submenu";

const LocalesMenu: FC = () => {
  const {
    t,
    i18n: { language, changeLanguage },
  } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    if (locale !== language) {
      const parts = pathname?.split("/") || [];
      parts.shift();

      if (language !== fallbackLng) {
        parts.shift();
      }

      const route = `/${locale}/${parts.join("/")}`;
      changeLanguage(locale);
      router.push(route);
    }
  };

  return (
    <Submenu
      title={t("menu.locales.title")}
      cta={t("menu.locales.cta")}
      icon="Globe"
    >
      {({ setOpen }) =>
        languages.map((locale) => {
          return (
            <MenuItemRadio
              key={locale}
              isChecked={locale === language}
              onCheckCallback={(close) => {
                handleLocaleChange(locale);

                if (close) {
                  setOpen(false);
                }
              }}
              text={t(`menu.locales.options.${locale}`)}
            />
          );
        })
      }
    </Submenu>
  );
};

LocalesMenu.displayName = "Organism.Menu.Locales";

export default LocalesMenu;
