import { FC, ReactNode } from "react";
import clsx from "clsx/lite";
import { Link } from "next-view-transitions";
import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { MinimalAsset } from "@/lib/schema/canto";
import { assetAlt } from "@/lib/canto/metadata";
import { addLocaleUriSegment } from "@/lib/i18n";
import { useTranslation } from "@/lib/i18n/server";
import DotMeter from "@/components/molecules/DotMeter";
import ViewTransition from "@/components/primitives/ViewTransition";
import TourAttributes from "../TourAttributes";
import styles from "./styles.module.css";
import ThumbnailImage from "@/components/molecules/ThumbnailImage";

interface TourCardProps {
  title?: ReactNode;
  uri?: string;
  duration?: number;
  complexity?: number;
  thumbnail?: MinimalAsset;
  className?: string;
}

const TourCard: FC<TourCardProps> = async ({
  title,
  uri,
  duration = 0,
  complexity = 1,
  thumbnail,
  className,
}) => {
  const {
    t,
    i18n: { language: locale },
  } = await useTranslation();
  const hasLink = !!uri;
  const slug = hasLink ? uri.split("/").pop() : undefined;

  const titleWithLink = uri ? (
    <Link className={styles.link} href={addLocaleUriSegment(locale, uri)}>
      {title}
    </Link>
  ) : (
    title
  );

  const DetailsWrapper = slug ? ViewTransition : "div";

  return (
    <div className={clsx(styles.card, className)}>
      <ThumbnailImage
        image={
          thumbnail
            ? {
                width: thumbnail.width,
                height: thumbnail.height,
                src: thumbnail.url.directUrlOriginal,
                alt: assetAlt(thumbnail.additional, locale),
              }
            : undefined
        }
        className={styles.image}
      />
      <DetailsWrapper name={slug} className={styles.details}>
        <h3 className={styles.title}>{titleWithLink}</h3>
        <TourAttributes
          attributes={[
            {
              title: (
                <span className={styles.durationTitle}>
                  {t("experiences.details.duration.title")}
                </span>
              ),
              symbol: <IconComposer size="1.5em" icon="timer" />,
              attribute: t("experiences.details.duration.attribute", {
                count: duration,
              }),
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
              attribute: (
                <span className={styles.complexityAttribute}>
                  {t(`experiences.details.complexity.attribute.${complexity}`)}
                </span>
              ),
            },
          ]}
        />
      </DetailsWrapper>
    </div>
  );
};

TourCard.displayName = "Organism.TourCard";

export default TourCard;
