import { FC } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Center from "@rubin-epo/epo-react-lib/Center";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import {
  CopyUrlButton,
  EmailButton,
  FacebookButton,
  TwitterXButton,
} from "@rubin-epo/epo-react-lib/Share";
import { useTranslation } from "@/lib/i18n/server";
import ViewTransition from "@/components/atomic/ViewTransition";
import BlockTitle from "@/components/atomic/BlockTitle";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import Cover from "@/components/molecules/Cover";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import styles from "./styles.module.css";
import { env } from "@/env";
import { getPathname } from "@/lib/i18n/navigation";
import { getLocale } from "next-intl/server";

interface TourSummaryProps {
  tour: string;
}

const TourSummary: FC<TourSummaryProps> = async ({ tour }) => {
  const { t } = await useTranslation();
  const locale = await getLocale();
  const path = getPathname({ href: { pathname: `/tours/${tour}` }, locale });
  const url = new URL(path, env.NEXT_PUBLIC_BASE_URL).toString();

  return (
    <FullwidthWithNav
      className={styles.container}
      navigation={
        <TransitionButtonish icon={<IoArrowBackSharp />} href="/tours" prefetch>
          {t("tour.summary.back")}
        </TransitionButtonish>
      }
    >
      <Cover>
        <Center maxWidth="2000px">
          <Stack>
            <ViewTransition name="title">
              <BlockTitle>{t("tour.summary.title")}</BlockTitle>
            </ViewTransition>
            <div>{t("tour.summary.cta")}</div>
            <ul className={styles.share}>
              <li>
                <FacebookButton {...{ url }} />
              </li>
              <li>
                <TwitterXButton {...{ url }} />
              </li>
              <li>
                <CopyUrlButton {...{ url }} />
              </li>
              <li>
                <EmailButton {...{ url }} />
              </li>
            </ul>
          </Stack>
        </Center>
      </Cover>
    </FullwidthWithNav>
  );
};

TourSummary.displayName = "Page.TourSummary";

export default TourSummary;
