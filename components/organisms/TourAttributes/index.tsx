import { FC, Fragment } from "react";
import clsx from "clsx/lite";
import VerticalDivider from "@/components/primitives/VerticalDivider";
import TourAttribute, {
  TourAttributeProps,
} from "@/components/molecules/TourAttribute";
import styles from "./styles.module.css";

interface TourAttributesProps {
  attributes: Array<TourAttributeProps>;
  className?: string;
}

const TourAttributes: FC<TourAttributesProps> = ({ attributes, className }) => {
  return (
    <div className={clsx(styles.attributes, className)}>
      {attributes.map((props, i) => {
        return (
          <Fragment key={i}>
            {i > 0 && <VerticalDivider />}
            <TourAttribute {...props} />
          </Fragment>
        );
      })}
    </div>
  );
};

TourAttributes.displayName = "Organism.TourAttributes";

export default TourAttributes;
