"use client";
import { FC, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { MenuItemRadio } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import { useLocale } from "next-intl";
import Submenu from "../Submenu";
import { languages } from "@/lib/i18n/settings";
import { redirect, usePathname } from "@/lib/i18n/navigation";

const LocalesMenu: FC = () => {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const pathname = usePathname();

  const handleLocaleChange = (locale: string) => {
    if (locale !== currentLocale) {
      startTransition(() => {
        changeLanguage(locale);
        redirect({ href: { pathname }, locale, forcePrefix: true });
      });
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
              isChecked={locale === currentLocale}
              onCheckCallback={(close) => {
                if (!isPending) {
                  handleLocaleChange(locale);

                  if (close) {
                    setOpen(false);
                  }
                }
              }}
            >
              {t(`menu.locales.options.${locale}`)}
            </MenuItemRadio>
          );
        })
      }
    </Submenu>
  );
};

LocalesMenu.displayName = "Organism.Menu.Locales";

export default LocalesMenu;
