import { FunctionComponent } from "react";
import styles from "./styles.module.css";

interface PoiDescriptionProps {
  isOpen: boolean;
  tourTitle: string;
  title: string;
  description: string;
}

const PoiDescription: FunctionComponent<PoiDescriptionProps> = ({
  isOpen = false,
  tourTitle,
  title,
  description,
}) => {
  return (
    <article data-open={isOpen} className={styles.descriptionContainer}>
      <header>
        <div>{tourTitle}</div>
        <h2>{title}</h2>
      </header>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </article>
  );
};

PoiDescription.displayName = "Molecule.PoiDescription";

export default PoiDescription;
