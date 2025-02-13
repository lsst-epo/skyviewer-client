import { FC } from "react";
import { notFound } from "next/navigation";
import { getGuidedExperiences } from "@/lib/api/guidedExperiences";
import GuidedExperiencesPage from "@/components/pages/GuidedExperiences";

const GuidedExperiences: FC<RootProps> = async () => {
  const data = await getGuidedExperiences();

  if (!data) {
    notFound();
  }

  return <GuidedExperiencesPage {...data} />;
};

export default GuidedExperiences;
