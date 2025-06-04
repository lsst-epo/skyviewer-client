import { FC, PropsWithChildren, ReactNode } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Center from "@rubin-epo/epo-react-lib/Center";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import FullwidthWithNav from "../FullwidthWithNav";
import { useTranslation } from "@/lib/i18n/server";
import ViewTransition from "@/components/atomic/ViewTransition";
import BlockTitle from "@/components/atomic/BlockTitle";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import styles from "./styles.module.css";

interface GuidedExperienceLandingProps {
  title: ReactNode;
}

const GuidedExperienceLanding: FC<
  PropsWithChildren<GuidedExperienceLandingProps>
> = async ({ title, children }) => {
  const { t } = await useTranslation();

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
