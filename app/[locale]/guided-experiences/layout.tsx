import { getGuidedExperiences } from "@/lib/api/guidedExperiences";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { FC, PropsWithChildren } from "react";

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
