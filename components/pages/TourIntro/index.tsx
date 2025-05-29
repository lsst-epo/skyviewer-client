"use client";
import { FC } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useTransitionRouter } from "next-view-transitions";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import Button from "@rubin-epo/epo-react-lib/Button";
import Center from "@rubin-epo/epo-react-lib/Center";
import { getTour } from "@/services/api/tours";
import { assetAlt } from "@/lib/canto/metadata";
import VerticalDivider from "@/components/atomic/VerticalDivider";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import ThumbnailImage from "@/components/molecules/ThumbnailImage";
import IntroContent from "@/components/molecules/IntroContent";
import FactContent from "@/components/molecules/FactContent";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import styles from "./styles.module.css";
import { hasCompletedTutorial } from "@/lib/tutorial";

type TourIntroProps = NonNullable<Awaited<ReturnType<typeof getTour>>>;

const TourIntro: FC<TourIntroProps> = ({
  introHeading,
  introSubheading,
  introContentBlocks,
  factsHeading,
  factsContentBlocks,
  thumbnail: { width, height, url, additional },
}) => {
  const { push, prefetch } = useTransitionRouter();
  const searchParams = useSearchParams();
  const section = searchParams.get("section") || "intro";
  const {
    t,
    i18n: { language: locale },
  } = useTranslation();

  const gotoIntro = () => {
    const params = new URLSearchParams({
      ...Object.fromEntries(searchParams),
      section: "intro",
    });
    push(`?${params.toString()}`);
  };

  const gotoFact = () => {
    const params = new URLSearchParams({
      ...Object.fromEntries(searchParams),
      section: "fact",
    });
    push(`?${params.toString()}`);
  };

  const handleBackClick = () => {
    if (section !== "intro") {
      gotoIntro();
    } else {
      push("./");
    }
  };

  const getTourLink = () => {
    const startTourParams = new URLSearchParams(searchParams);

    if (hasCompletedTutorial()) {
      startTourParams.set("poi", "1");
    }

    return `tour?${startTourParams.toString()}`;
  };

  const startTour = () => {
    push(getTourLink());
  };

  const handleForwardClick = () => {
    if (section !== "fact") {
      gotoFact();

      prefetch(getTourLink());
    } else {
      startTour();
    }
  };

  return (
    <FullwidthWithNav
      className={styles.container}
      navigation={
        <>
          <div className={styles.mobileButtons}>
            <div className={styles.mobileNavigationIndicator}>
              <span />
              <div className={styles.indicator}>
                <button
                  data-active={section === "intro"}
                  className={styles.dotButton}
                  onClick={gotoIntro}
                ></button>
                <button
                  data-active={section === "fact"}
                  className={styles.dotButton}
                  onClick={gotoFact}
                ></button>
              </div>
              <button className={styles.skipIntro} onClick={startTour}>
                {t("navigation.cta.skip_intro")}
              </button>
            </div>
            <Button icon={<IoArrowBackSharp />} onClick={handleBackClick}>
              {t("navigation.cta.back")}
            </Button>
            <Button
              icon={<IoArrowForwardSharp />}
              iconAlignment="right"
              onClick={handleForwardClick}
            >
              {section === "fact"
                ? t("navigation.cta.start_tour")
                : t("navigation.cta.next")}
            </Button>
          </div>

          <div className={styles.desktopButtons}>
            <TransitionButtonish icon={<IoArrowBackSharp />} href="./">
              {t("navigation.cta.back")}
            </TransitionButtonish>
            <Button
              icon={<IoArrowForwardSharp />}
              iconAlignment="right"
              onClick={startTour}
              onMouseOver={() => {
                prefetch(getTourLink());
              }}
            >
              {t("navigation.cta.lets_start")}
            </Button>
          </div>
        </>
      }
    >
      <Center maxWidth="2000px" className={styles.content}>
        <ThumbnailImage
          className={styles.image}
          image={{
            width,
            height,
            src: url.directUrlPreview,
            alt: assetAlt(additional, locale),
          }}
        />
        <div className={styles.introText} data-visible={section}>
          <IntroContent
            className={styles.introContent}
            title={introHeading}
            subtitle={introSubheading}
            paragraphs={introContentBlocks}
          />
          <VerticalDivider className={styles.divider} />
          <FactContent
            className={styles.factContent}
            title={factsHeading || undefined}
            paragraphs={factsContentBlocks}
          />
        </div>
      </Center>
    </FullwidthWithNav>
  );
};

TourIntro.displayName = "Page.TourIntro";

export default TourIntro;
