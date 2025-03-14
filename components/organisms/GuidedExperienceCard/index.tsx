import { FC, Suspense } from "react";
import Image, { ImageProps } from "next/image";
import clsx from "clsx/lite";
import Frame from "@rubin-epo/epo-react-lib/Frame";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import { Link } from "next-view-transitions";
import { addLocaleUriSegment } from "@/lib/i18n";
import { useTranslation, getLocale } from "@/lib/i18n/server";
import { getTourCount } from "@/services/api/guidedExperiences";
import Ribbon from "@/components/primitives/Ribbon";
import styles from "./styles.module.css";
import ViewTransition from "@/components/primitives/ViewTransition";

interface GuidedExperienceCardProps {
  title: string;
  id: string;
  slug: string;
  image: ImageProps;
  className?: string;
}

const RibbonContent: FC<{ slug: string }> = async ({ slug }) => {
  const { t } = await useTranslation(getLocale());
  const count = await getTourCount(slug);

  return (
    <>
      <text transform="translate(24 45)" fontSize="10" fontWeight="300">
        <tspan x="-9.2" y="0">
          {t("guided-experiences.tour", { count })}
        </tspan>
      </text>
      <text transform="translate(24 28)" fontSize="22" fontWeight="700">
        <tspan x="-5.852" y="0">
          {count}
        </tspan>
      </text>
    </>
  );
};

const GuidedExperienceCard: FC<GuidedExperienceCardProps> = ({
  title,
  slug,
  image,
  className,
}) => {
  return (
    <Stack className={clsx(styles.card, className)}>
      <h2 className={styles.title}>
        <Link
          className={styles.link}
          href={addLocaleUriSegment(getLocale(), slug)}
          prefetch
        >
          <ViewTransition name={`${slug}-title`}>{title}</ViewTransition>
        </Link>
      </h2>

      <Frame className={styles.image} aspectRatio="3:2">
        <Image {...image} />
        <Ribbon className={styles.ribbon}>
          <Suspense fallback={null}>
            <RibbonContent slug={slug} />
          </Suspense>
        </Ribbon>
      </Frame>
    </Stack>
  );
};

GuidedExperienceCard.displayName = "Organism.GuidedExperienceCard";

export default GuidedExperienceCard;
