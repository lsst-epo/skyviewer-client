import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Aladin, { AladinProps } from "@/components/organisms/Aladin";
import styles from "./styles.module.css";

interface AladinTemplateProps extends AladinProps {
  embedded?: boolean;
  footer?: ReactNode;
}

const AladinTemplate: FunctionComponent<
  PropsWithChildren<AladinTemplateProps>
> = ({ embedded = false, footer, children, ...props }) => {
  return (
    <main
      className={styles.viewLayout}
      style={{ ...(embedded && { "--main-header-height": "0px" }) }}
    >
      <div className={styles.aladinViewer}>
        <Aladin {...props}>{children}</Aladin>
      </div>

      {footer && <footer className={styles.aladinFooter}>{footer}</footer>}
    </main>
  );
};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
