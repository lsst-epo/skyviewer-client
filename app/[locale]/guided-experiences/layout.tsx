import { Metadata, Viewport } from "next";
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
export const generateViewport = (): Viewport => {
  return { themeColor: "#1f2121" };
};

const GuidedExperiencesLayout: FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default GuidedExperiencesLayout;
