import { FunctionComponent } from "react";
import {
  IoArrowBackSharp,
  IoArrowForwardSharp,
  IoMusicalNotes,
} from "react-icons/io5";
import { Link } from "next-view-transitions";
import { useTranslation } from "@/lib/i18n/server";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import LogoCover from "@/components/organisms/LogoCover";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import { getSkySynthPage } from "@/services/api/skysynth";
import styles from "./styles.module.css";

interface HomeProps {
  locale: string;
}

const Home: FunctionComponent<HomeProps> = async ({ locale }) => {
  const { t } = await useTranslation(locale, "translation");
  const skysynth = await getSkySynthPage(locale);

  return (
    <FullwidthWithNav
      className={styles.main}
      navigation={
        <>
          <div className={styles.navigation}>
            <TransitionButtonish icon={<IoArrowBackSharp />} href="/explorer">
              {t("navigation.cta.explore")}
            </TransitionButtonish>
            <TransitionButtonish
              icon={<IoArrowForwardSharp />}
              iconAlignment="right"
              href="/guided-experiences"
            >
              {t("navigation.cta.tours")}
            </TransitionButtonish>
          </div>

          {skysynth && (
            <Link className={styles.listen} href="/skysynth">
              <IoMusicalNotes />
              {t("navigation.cta.listen")}
            </Link>
          )}
        </>
      }
    >
      <LogoCover {...{ locale }} />
    </FullwidthWithNav>
  );
};

Home.displayName = "Page.Home";

export default Home;
