import { FC } from "react";
import { getImageProps } from "next/image";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import Center from "@rubin-epo/epo-react-lib/Center";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { getTourMetadata } from "@/services/api/tours";
import { assetAlt } from "@/lib/canto/metadata";
import { useTranslation } from "@/lib/i18n/server";
import ViewTransition from "@/components/atomic/ViewTransition";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import DotMeter from "@/components/molecules/DotMeter";
import TourAttributes from "@/components/organisms/TourAttributes";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import styles from "./styles.module.css";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

type TourLandingProps = NonNullable<
  Awaited<ReturnType<typeof getTourMetadata>>
>;

const TourLanding: FC<TourLandingProps> = async ({
  title,
  slug,
  complexity,
  duration,
  backgroundImage: {
    width,
    height,
    url: { directUrlPreview: src },
    additional,
  },
}) => {
  const { t } = await useTranslation();
  const {
    props: { srcSet },
  } = getImageProps({
    alt: assetAlt(additional),
    width,
    height,
    src,
    quality: 90,
  });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <>
      <div
        className={styles.backdropImage}
        style={{ "--image-backdrop-tour": backgroundImage }}
      />
      <FullwidthWithNav
        navigation={
          <>
            <TransitionButtonish icon={<IoArrowBackSharp />} href="/tours">
              {t("navigation.cta.back")}
            </TransitionButtonish>
            <TransitionButtonish
              icon={<IoArrowForwardSharp />}
              iconAlignment="right"
              href={`${slug}/intro`}
              prefetch
            >
              {t("navigation.cta.lets_start")}
            </TransitionButtonish>
          </>
        }
      >
        <Center andText className={styles.tourContainer}>
          <ViewTransition name={slug}>
            <Stack className={styles.tourInfo}>
              <h1>{title}</h1>
              <TourAttributes
                attributes={[
                  {
                    title: t("experiences.details.duration.title"),
                    symbol: <IconComposer size="1.5em" icon="timer" />,
                    attribute: t("experiences.details.duration.attribute", {
                      count: duration,
                    }),
                    responsive: false,
                  },
                  {
                    title: t("experiences.details.complexity.title"),
                    symbol: (
                      <DotMeter
                        min={1}
                        max={5}
                        value={complexity}
                        text={t(
                          `experiences.details.complexity.attribute.${complexity}`
                        )}
                      />
                    ),
                    attribute: t(
                      `experiences.details.complexity.attribute.${complexity}`
                    ),
                    responsive: false,
                  },
                ]}
              />
            </Stack>
          </ViewTransition>
        </Center>
      </FullwidthWithNav>
    </>
  );
};

TourLanding.displayName = "Page.TourLanding";

export default TourLanding;
