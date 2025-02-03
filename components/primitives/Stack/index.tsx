import { CSSProperties, FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

export interface StackProps {
  space?: string;
  className?: string;
  style?: CSSProperties;
}

const Stack: FunctionComponent<PropsWithChildren<StackProps>> = ({
  className,
  style,
  space,
  children,
}) => {
  return (
    <div
      style={{
        ...style,
        "--size-spacing-stack": space,
      }}
      className={classNames(className, styles.stack)}
    >
      {children}
    </div>
  );
};

Stack.displayName = "Atom.Stack";

export default Stack;
