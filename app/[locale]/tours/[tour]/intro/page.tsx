import { FunctionComponent } from "react";
import GuidedExperienceLayout from "@/components/organisms/GuidedExperience";
import Intro from "@/components/tours/Intro";
import FunFact from "@/components/tours/FunFact";
import { getTourData } from "@/lib/api/tour";
import { useTranslation } from "@/lib/i18n";

interface IntroProps extends TourProps {
  searchParams?: Record<string, string | Array<string> | undefined>;
}

const TourIntro: FunctionComponent<IntroProps> = async ({
  params: { tour, locale },
  searchParams,
}) => {
  const {
    tour: {
      introHeading,
      introSubheading,
      introContentBlocks,
      factsHeading,
      factsContentBlocks,
      thumbnail,
    },
  } = await getTourData(tour);
  const { t } = await useTranslation(locale, "translation");

  const getStep = (): number => {
    const { step } = searchParams || {};

    if (typeof step === "string") {
      return parseInt(step);
    }

    return 1;
  };

  const step = getStep();
  const introSteps: number = introContentBlocks.length;
  const factSteps: number = factsContentBlocks.length;
  const totalSteps = introSteps + factSteps;
  const isInIntro = step <= introSteps;

  const desktopBackLink = {
    url: `/tours/${tour}`,
    text: t("navigation.cta.back"),
  };
  const desktopNextLink = {
    url: {
      pathname: `tour`,
      query: { poi: 1 },
    },
    text: t("navigation.cta.start_tour"),
  };

  const mobileBackLink =
    step === 1
      ? desktopBackLink
      : { ...desktopBackLink, url: { query: { step: step - 1 } } };

  const mobileNextLink =
    step === totalSteps
      ? desktopNextLink
      : { text: t("navigation.cta.next"), url: { query: { step: step + 1 } } };

  return (
    <GuidedExperienceLayout
      {...{ desktopBackLink, desktopNextLink, mobileBackLink, mobileNextLink }}
    >
      <div className="tour-intro-container">
        <div className="content-wrapper">
          <Intro
            id={step}
            heading={introHeading}
            subheading={introSubheading}
            blocks={introContentBlocks}
            thumbnail={thumbnail}
            skipUrl={`/tours/${tour}/tour?poi=1`}
          />
          <FunFact
            id={isInIntro ? undefined : step - introSteps}
            blocks={factsContentBlocks}
            heading={factsHeading}
            skipUrl={`/tours/${tour}/tour?poi=1`}
          />
        </div>
      </div>
    </GuidedExperienceLayout>
  );
};

export const dynamic = "force-dynamic";

export default TourIntro;
