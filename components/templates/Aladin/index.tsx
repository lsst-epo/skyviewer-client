import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
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
      <Aladin {...props}>{children}</Aladin>
    </main>
  );
};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
