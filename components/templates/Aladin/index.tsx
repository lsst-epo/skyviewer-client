import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Aladin from "@/components/organisms/Aladin";
import styles from "./styles.module.css";

interface AladinTemplateProps {
  fovRange?: Array<number>;
  options: AladinOptions;
  hipsConfig: {
    id: string;
    options: ImageHiPSOptions;
  };
  embedded?: boolean;
  footer?: ReactNode;
}

const AladinTemplate: FunctionComponent<
  PropsWithChildren<AladinTemplateProps>
> = ({ options, fovRange, hipsConfig, embedded = false, footer, children }) => {
  return (
    <main
      className={styles.viewLayout}
      style={{ ...(embedded && { "--size-height-menu": "0px" }) }}
    >
      <div className={styles.aladinViewer}>
        <Aladin
          {...{
            options,
            fovRange,
            hipsConfig,
          }}
        >
          {children}
        </Aladin>
      </div>

      {footer && <footer className={styles.aladinFooter}>{footer}</footer>}
    </main>
  );
};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
