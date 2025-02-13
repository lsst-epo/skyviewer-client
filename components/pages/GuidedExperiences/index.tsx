import { FC } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Center from "@rubin-epo/epo-react-lib/Center";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import { useTranslation } from "@/lib/i18n/server";
import { assetAlt } from "@/lib/canto/metadata";
import { getGuidedExperiences } from "@/lib/api/guidedExperiences";
import Grid from "@/components/primitives/Grid";
import PageTitle from "@/components/primitives/BlockTitle";
import ViewTransition from "@/components/primitives/ViewTransition";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import GuidedExperienceCard from "@/components/organisms/GuidedExperienceCard";
import styles from "./styles.module.css";

type GuidedExperiencesProps = NonNullable<
  Awaited<ReturnType<typeof getGuidedExperiences>>
>;

const GuidedExperiences: FC<GuidedExperiencesProps> = async ({
  title,
  experiences,
}) => {
  const { t } = await useTranslation();

  return (
    <FullwidthWithNav
      navigation={
        <TransitionButtonish icon={<IoArrowBackSharp />} href="/">
          {t("guided-experiences.back")}
        </TransitionButtonish>
      }
    >
      <Stack className={styles.content}>
        <Center andText>
          <PageTitle>
            <ViewTransition name="title">{title}</ViewTransition>
          </PageTitle>
        </Center>
        <section className={styles.cardContainer}>
          <Grid className={styles.cardGrid} minimum="400px">
            {experiences.map(({ id, slug, title, previewImage }) => {
              const { width, height } = previewImage;

              return (
                <GuidedExperienceCard
                  key={id}
                  {...{ id, slug, title }}
                  image={{
                    width,
                    height,
                    alt: assetAlt(previewImage.additional),
                    src: previewImage.url.directUrlOriginal,
                  }}
                />
              );
            })}
          </Grid>
        </section>
      </Stack>
    </FullwidthWithNav>
  );
};

GuidedExperiences.displayName = "Page.GuidedExperiences";

export default GuidedExperiences;
