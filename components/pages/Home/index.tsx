import { FunctionComponent } from "react";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import NavigationList from "@/components/molecules/NavigationList";
import { useTranslation } from "@/lib/i18n";
import LogoCover from "@/components/organisms/LogoCover";

interface HomeProps {
  locale: string;
}

const Home: FunctionComponent<HomeProps> = async ({ locale }) => {
  const { t } = await useTranslation(locale, "translation");

  const links = [
    { url: "/explorer", prefetch: true, text: t("navigation.cta.explore") },
    { url: "/tours", prefetch: true, text: t("navigation.cta.tours") },
  ];

  return (
    <FullwidthWithNav navigation={<NavigationList {...{ links }} />}>
      <LogoCover {...{ locale }} />
    </FullwidthWithNav>
  );
};

Home.displayName = "Page.Home";

export default Home;
