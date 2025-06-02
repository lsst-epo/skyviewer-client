import { FC, Suspense } from "react";
import Image, { ImageProps } from "next/image";
import { getLocale } from "next-intl/server";
import clsx from "clsx/lite";
import Frame from "@rubin-epo/epo-react-lib/Frame";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import { Link } from "next-view-transitions";
import { useTranslation } from "@/lib/i18n/server";
import { getTourCount } from "@/services/api/guidedExperiences";
import Ribbon from "@/components/atomic/Ribbon";
import styles from "./styles.module.css";
import ViewTransition from "@/components/atomic/ViewTransition";
import { getPathname } from "@/lib/i18n/navigation";
interface GuidedExperienceCardProps {
  title: string;
  id: string;
  slug: string;
  image: ImageProps;
  className?: string;
}

const RibbonContent: FC<{ slug: string }> = async ({ slug }) => {
  const { t } = await useTranslation();
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

const GuidedExperienceCard: FC<GuidedExperienceCardProps> = async ({
  title,
  slug,
  image,
  className,
}) => {
  const locale = await getLocale();
  const path = getPathname({ href: { pathname: slug }, locale });
  return (
    <Stack className={clsx(styles.card, className)}>
      <h2 className={styles.title}>
        <Link className={styles.link} href={path} prefetch>
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
