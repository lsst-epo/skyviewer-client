import { FunctionComponent, PropsWithChildren } from "react";
import { AladinOptions, HiPSImageFormat } from "@/types/aladin";
import { AladinProvider } from "@/contexts/Aladin";
import styles from "./styles.module.css";

interface AladinTemplateProps {
  fovRange?: Array<number>;
  survey: string;
  imgFormat: HiPSImageFormat;
  options: AladinOptions;
}

const AladinTemplate: FunctionComponent<
  PropsWithChildren<AladinTemplateProps>
> = ({ survey, imgFormat, options, fovRange, children }) => {
  return (
    <main className={styles.viewerContainer}>
      <AladinProvider
        {...{
          survey,
          imgFormat,
          options,
          fovRange,
        }}
      >
        {children}
      </AladinProvider>
    </main>
  );
};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
