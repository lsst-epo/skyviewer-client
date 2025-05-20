import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import Aladin, { AladinProps } from "@/components/organisms/Aladin";
import styles from "./styles.module.css";
import { AladinDisplayProvider } from "@/contexts/AladinDisplay";

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
      <AladinDisplayProvider>
        <Aladin {...props}>{children}</Aladin>
      </AladinDisplayProvider>
    </main>
  );
};

AladinTemplate.displayName = "Templates.Aladin";

export default AladinTemplate;
