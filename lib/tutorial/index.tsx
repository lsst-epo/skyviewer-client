import IconComposer from "@rubin-epo/epo-react-lib/IconComposer";
import { Step, useNextStep } from "nextstepjs";

export const tourTutorialTitle = "tourTutorial";

const commonProps: Partial<Step> = {
  pointerPadding: 0,
  pointerRadius: 0,
  side: "top",
};

export const steps: Array<Step> = [
  {
    ...commonProps,
    icon: <IconComposer size="2em" icon="info" />,
    title: "Step 1",
    content: null,
  },
  {
    ...commonProps,
    icon: null,
    title: "Step 2",
    content: null,
    selector: "#navigationButtons",
  },
  {
    ...commonProps,
    icon: null,
    title: "Step 3",
    content: null,
    selector: "#shareButton",
  },
  {
    ...commonProps,
    icon: null,
    title: "Step 4",
    content: null,
    selector: "#nextButton",
  },
];

const stripIdSelector = (selector?: string) => {
  return selector ? selector.replace("#", "") : selector;
};

export const useStep = (stepIndex: number) => {
  const { currentStep, currentTour } = useNextStep();
  const step = steps[stepIndex];

  return {
    id: stripIdSelector(step.selector),
    active: currentTour === tourTutorialTitle && currentStep === stepIndex,
  };
};

const tutorialSessionKey = "hasCompletedTutorial";

export const hasCompletedTutorial = () => {
  return sessionStorage.getItem(tutorialSessionKey) === "true";
};
export const completeTutorial = () => {
  sessionStorage.setItem(tutorialSessionKey, "true");
};
