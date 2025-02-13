import { FC, PropsWithChildren, ReactNode } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Center from "@rubin-epo/epo-react-lib/Center";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import { getLocale, useTranslation } from "@/lib/i18n/server";
import ViewTransition from "@/components/primitives/ViewTransition";
import BlockTitle from "@/components/primitives/BlockTitle";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import FullwidthWithNav from "../FullwidthWithNav";
import styles from "./styles.module.css";

interface GuidedExperienceLandingProps {
  title: ReactNode;
}

const GuidedExperienceLanding: FC<
  PropsWithChildren<GuidedExperienceLandingProps>
> = async ({ title, children }) => {
  const { t } = await useTranslation(getLocale());

  return (
    <FullwidthWithNav
      className={styles.guidedExperienceLanding}
      navigation={
        <TransitionButtonish
          icon={<IoArrowBackSharp />}
          href="/guided-experiences"
        >
          {t("experiences.back")}
        </TransitionButtonish>
      }
    >
      <Center andText>
        <Stack space="var(--size-spacing-s)">
          <BlockTitle className={styles.subtitle} as="h2">
            <ViewTransition name="title">
              {t("guided-experiences.title")}
            </ViewTransition>
          </BlockTitle>
          <h1 className={styles.title}>{title}</h1>
          {/* <SecondaryHeader /> */}
        </Stack>
      </Center>
      {children}
    </FullwidthWithNav>
  );
};

export default GuidedExperienceLanding;
