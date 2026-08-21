import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  Suspense,
} from "react";
import Aladin, { AladinProps } from "@/components/organisms/Aladin";
import { env } from "@/env";

interface AladinTemplateProps extends AladinProps {
  embedded?: boolean;
  menu?: ReactNode;
}

const AladinTemplate: FunctionComponent<
  PropsWithChildren<AladinTemplateProps>
> = ({ embedded = false, children, ...props }) => {
  return (
      <Suspense>
        <Aladin {...props} embedded={embedded} debug={env.CLOUD_ENV === "DEV"}>
          {children}
        </Aladin>
      </Suspense>
)};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
