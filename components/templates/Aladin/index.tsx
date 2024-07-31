import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./styles.module.css";

const AladinLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <main className={styles.viewerContainer}>{children}</main>;
};

export default AladinLayout;
