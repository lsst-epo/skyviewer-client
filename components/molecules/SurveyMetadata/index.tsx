import { FC } from "react";
import Stack from "@rubin-epo/epo-react-lib/Stack";
import { SurveyProperties } from "@/services/aladin";
import { useTranslation } from "@/lib/i18n/server";

interface SurveyMetadataProps {
  metadata: SurveyProperties;
  locale?: string;
  className?: string;
}

const SurveyMetadata: FC<SurveyMetadataProps> = async ({
  metadata,
  className,
  locale,
}) => {
  const { t } = await useTranslation(locale);
  return (
    <Stack space="var(--size-spacing-2xs)" className={className}>
      <h4>{metadata.obs_title}</h4>
      {metadata.collection && <div>{metadata.collection}</div>}
      {metadata.obs_description && <div>{metadata.obs_description}</div>}
      <div>
        {t("menu.about.sections.metadata.created_by", {
          creator: metadata.hips_creator,
        })}
      </div>
      <time dateTime={metadata.hips_release_date.toISOString()}>
        {metadata.hips_release_date.toLocaleString(locale, {
          timeZoneName: "short",
          timeZone: "UTC",
        })}
      </time>
    </Stack>
  );
};

SurveyMetadata.displayName = "Molecule.SurveyMetadata";

export default SurveyMetadata;
