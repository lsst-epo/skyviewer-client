import { FunctionComponent } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import { useTranslation } from "@/lib/i18n/server";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import LogoCover from "@/components/organisms/LogoCover";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import styles from "./styles.module.css";

interface HomeProps {
  locale: string;
}

const Home: FunctionComponent<HomeProps> = async ({ locale }) => {
  const { t } = await useTranslation(locale, "translation");

  return (
    <FullwidthWithNav
      className={styles.main}
      navigation={
        <>
          <Buttonish icon={<IoArrowBackSharp />} href="/explorer" prefetch>
            {t("navigation.cta.explore")}
          </Buttonish>
          <TransitionButtonish
            icon={<IoArrowForwardSharp />}
            iconAlignment="right"
            href="/guided-experiences"
            prefetch
          >
            {t("navigation.cta.tours")}
          </TransitionButtonish>
        </>
      }
    >
      <LogoCover {...{ locale }} />
    </FullwidthWithNav>
  );
};

Home.displayName = "Page.Home";

export default Home;
