import {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  Suspense,
} from "react";
import Aladin, { AladinProps } from "@/components/organisms/Aladin";
import styles from "./styles.module.css";

interface AladinTemplateProps extends AladinProps {
  embedded?: boolean;
  menu?: ReactNode;
}

const AladinTemplate: FunctionComponent<
  PropsWithChildren<AladinTemplateProps>
> = ({ embedded = false, children, ...props }) => {
  return (
    <main
      className={styles.viewLayout}
      data-has-menu={!!props.menu && !embedded}
    >
      <Suspense>
        <Aladin {...props}>{children}</Aladin>
      </Suspense>
    </main>
  );
};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
