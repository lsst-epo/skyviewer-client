import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC, PropsWithChildren } from "react";
import { getGuidedExperiences } from "@/services/api/guidedExperiences";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getGuidedExperiences();

  if (!data) {
    notFound();
  }

  return {
    title: data.title,
  };
}

const GuidedExperiencesLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default GuidedExperiencesLayout;
