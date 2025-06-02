"use client";
import { FC, useEffect, useTransition } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@/lib/i18n/settings";
import { redirect, usePathname, useRouter } from "@/lib/i18n/navigation";
import { MenuItemRadio } from "@rubin-epo/epo-react-lib/SlideoutMenu";
import Submenu from "../Submenu";
import { useLocale } from "next-intl";

const LocalesMenu: FC = () => {
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isPending) {
      changeLanguage(currentLocale);
      router.refresh();
    }
  }, [isPending]);

  const handleLocaleChange = (locale: string) => {
    if (locale !== currentLocale) {
      startTransition(() => {
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
                handleLocaleChange(locale);

                if (close) {
                  setOpen(false);
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
