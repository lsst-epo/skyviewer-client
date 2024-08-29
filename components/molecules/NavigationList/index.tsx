import { FunctionComponent, ReactNode } from "react";
import classnames from "classnames";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";
import styles from "./styles.module.css";

interface NavListItem {
  url: string;
  text: string;
  styleAs?: any;
}

interface NavigationListProps {
  links: Array<NavListItem>;
  direction?: "vertical" | "horizontal";
  className?: string;
}

const NavigationList: FunctionComponent<NavigationListProps> = ({
  links = [],
  direction = "horizontal",
  className,
}) => {
  return (
    <nav>
      <ul
        className={classnames(styles.navigationList, className)}
        role={direction === "horizontal" ? "menubar" : "menu"}
        data-direction={direction}
      >
        {links.map((link, i) => (
          <li key={i} role="none">
            <Buttonish
              {...link}
              role="menuitem"
              className={styles.listItem}
              isBlock
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavigationList.displayName = "Layouts.NavigationList";

export default NavigationList;
