import Button from "@rubin-epo/epo-react-lib/Button";
import { FC, PropsWithChildren } from "react";

export interface TourControlProps {
  onClick: VoidFunction;
  id?: string;
  isActiveTutorialStep?: boolean;
  className?: string;
}

const TourControl: FC<PropsWithChildren<TourControlProps>> = ({
  isActiveTutorialStep,
  children,
  ...props
}) => {
  return (
    <Button {...props} data-active-tutorial-step={isActiveTutorialStep}>
      {children}
    </Button>
  );
};

TourControl.displayName = "Molecule.TourControl";

export default TourControl;
