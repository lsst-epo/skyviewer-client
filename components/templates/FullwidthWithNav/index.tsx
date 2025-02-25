import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import clsx from "clsx/lite";
import styles from "./styles.module.css";

interface FullwidthWithNavProps {
  navigation: ReactNode;
  space?: string;
  className?: string;
}

const FullwidthWithNav: FunctionComponent<
  PropsWithChildren<FullwidthWithNavProps>
> = ({ navigation, className, space, children }) => {
  return (
    <main
      style={{ "--size-space-container": space }}
      className={clsx(styles.fullWidthPage, className)}
    >
      {children}
      <nav className={styles.footerNavigation}>{navigation}</nav>
    </main>
  );
};

FullwidthWithNav.displayName = "Templates.FullwidthWithNav";

export default FullwidthWithNav;
