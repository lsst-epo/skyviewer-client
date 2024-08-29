import { FunctionComponent } from "react";
import styles from "./styles.module.css";
import IconButton from "@/components/primitives/IconButton";

const CopyText: FunctionComponent<{ textToCopy: string }> = ({
  textToCopy,
}) => {
  return (
    <div className={styles.copyContainer}>
      Embed this view
      {/* <IconButton icon="ShareCopyUrl" className={styles.copyButton} size={20} /> */}
      <code className={styles.copyBlock}>{textToCopy}</code>
    </div>
  );
};

CopyText.displayName = "Organism.CopyLink";

export default CopyText;
