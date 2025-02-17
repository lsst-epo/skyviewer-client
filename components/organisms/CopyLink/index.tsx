import { FunctionComponent } from "react";
import styles from "./styles.module.css";

const CopyText: FunctionComponent<{ textToCopy: string }> = ({
  textToCopy,
}) => {
  return (
    <div className={styles.copyContainer}>
      Embed this view
      <code className={styles.copyBlock}>{textToCopy}</code>
    </div>
  );
};

CopyText.displayName = "Organism.CopyLink";

export default CopyText;
