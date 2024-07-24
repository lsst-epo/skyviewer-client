import { FunctionComponent } from "react";
import classnames from "classnames";
import Button from "@rubin-epo/epo-react-lib/Button";
import Link, { LinkProps } from "next/link";
import styles from "./styles.module.css";

interface NavListItem extends LinkProps {
  text: string;
  styleAs?: string;
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
      {links.map(({ text, ...link }) => (
        <li key={text}>
          <Button as={Link} {...link} isBlock>
            {text}
          </Button>
        </li>
      ))}
    </ul>
  );
};

NavigationList.displayName = "Layouts.NavigationList";

export default NavigationList;
