import { FunctionComponent } from "react";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import NavigationList from "@/components/molecules/NavigationList";
import { useTranslation } from "@/lib/i18n";
import LogoCover from "@/components/layouts/LogoCover";

interface HomeProps {
  locale: string;
}

const Home: FunctionComponent<HomeProps> = async ({ locale }) => {
  const { t } = await useTranslation(locale, "translation");

  const links = [
    { href: "/explorer", prefetch: true, text: t("navigation.cta.explore") },
    { href: "/tours", prefetch: true, text: t("navigation.cta.tours") },
  ];

  return (
    <FullwidthWithNav navigation={<NavigationList {...{ links }} />}>
      <LogoCover {...{ locale }} />
    </FullwidthWithNav>
  );
};

Home.displayName = "Page.Home";

export default Home;
