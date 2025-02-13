"use client";
import { FC } from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { Link, useTransitionRouter } from "next-view-transitions";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import Button from "@rubin-epo/epo-react-lib/Button";
import Center from "@rubin-epo/epo-react-lib/Center";
import { getTour } from "@/lib/api/tours";
import { assetAlt } from "@/lib/canto/metadata";
import VerticalDivider from "@/components/primitives/VerticalDivider";
import FullwidthWithNav from "@/components/templates/FullwidthWithNav";
import ThumbnailImage from "@/components/molecules/ThumbnailImage";
import IntroContent from "@/components/molecules/IntroContent";
import FactContent from "@/components/molecules/FactContent";
import TransitionButtonish from "@/components/molecules/TransitionButtonish";
import styles from "./styles.module.css";

type TourIntroProps = NonNullable<Awaited<ReturnType<typeof getTour>>>;

const TourIntro: FC<TourIntroProps> = ({
  introHeading,
  introSubheading,
  introContentBlocks,
  factsHeading,
  factsContentBlocks,
  thumbnail: { width, height, url, additional },
}) => {
  const { push } = useTransitionRouter();
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
  const handleForwardClick = () => {
    if (section !== "fact") {
      gotoFact();
    } else {
      push("tour");
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
              <Link className={styles.skipLink} href="tour" prefetch>
                {t("navigation.cta.skip_intro")}
              </Link>
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
            <TransitionButtonish
              icon={<IoArrowForwardSharp />}
              iconAlignment="right"
              onClick={handleForwardClick}
              href="tour"
              prefetch
            >
              {t("navigation.cta.lets_start")}
            </TransitionButtonish>
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
            src: url.directUrlOriginal,
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
            title={factsHeading}
            paragraphs={factsContentBlocks}
          />
        </div>
      </Center>
    </FullwidthWithNav>
  );
};

TourIntro.displayName = "Page.TourIntro";

export default TourIntro;
