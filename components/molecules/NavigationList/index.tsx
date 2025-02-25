import { FunctionComponent } from "react";
import { Link } from "next-view-transitions";
import classnames from "clsx/lite";
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
            <Link href={link.url}>{link.text}</Link>
            {/* <Buttonish
              {...link}
              role="menuitem"
              className={styles.listItem}
              isBlock
            /> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavigationList.displayName = "Layouts.NavigationList";

export default NavigationList;
