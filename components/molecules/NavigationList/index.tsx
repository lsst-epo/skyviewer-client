import { FunctionComponent } from "react";
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
    <ul
      className={classnames(styles.navigationList, className)}
      data-direction={direction}
    >
      {links.map((link, i) => (
        <li key={i}>
          <Buttonish {...link} isBlock />
        </li>
      ))}
    </ul>
  );
};

NavigationList.displayName = "Layouts.NavigationList";

export default NavigationList;
