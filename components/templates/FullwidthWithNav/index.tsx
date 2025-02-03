import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import styles from "./styles.module.css";

interface FullwidthWithNavProps {
  navigation: ReactNode;
}

const FullwidthWithNav: FunctionComponent<
  PropsWithChildren<FullwidthWithNavProps>
> = ({ navigation, children }) => {
  return (
    <main className={styles.fullWidthPage}>
      {children}
      <nav>{navigation}</nav>
    </main>
  );
};

FullwidthWithNav.displayName = "Templates.FullwidthWithNav";

export default FullwidthWithNav;
