import { FC } from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getGuidedExperiences } from "@/services/api/guidedExperiences";
import GuidedExperiencesPage from "@/components/pages/GuidedExperiences";

const GuidedExperiences: FC<RootProps> = async ({ params: { locale } }) => {
  setRequestLocale(locale);
  const data = await getGuidedExperiences();

  if (!data) {
    notFound();
  }

  return <GuidedExperiencesPage {...data} />;
};

export default GuidedExperiences;
