import { FunctionComponent, PropsWithChildren } from "react";
import { AladinOptions, ImageHiPSOptions } from "@/types/aladin";
import { AladinProvider } from "@/contexts/Aladin";
import styles from "./styles.module.css";

interface AladinTemplateProps {
  fovRange?: Array<number>;
  options: AladinOptions;
  hipsConfig: {
    id: string;
    options: ImageHiPSOptions;
  };
}

const AladinTemplate: FunctionComponent<
  PropsWithChildren<AladinTemplateProps>
> = ({ options, fovRange, hipsConfig, children }) => {
  return (
    <main className={styles.viewerContainer}>
      <AladinProvider
        {...{
          options,
          fovRange,
          hipsConfig,
        }}
      >
        {children}
      </AladinProvider>
    </main>
  );
};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
