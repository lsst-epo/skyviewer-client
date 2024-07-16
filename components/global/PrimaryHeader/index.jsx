import { useContext } from "react";
import MenuContext from "@/contexts/Menu";
import PropTypes from "prop-types";
import classnames from "classnames";
import useResizeObserver from "use-resize-observer";
import Buttonish from "@/primitives/Buttonish";
import MainMenu from "@/global/MainMenu";
import IconComposer from "@/svg/IconComposer";

export default function Header({ closeUrl = "/", backgroundColor, route }) {
  const { ref } = useResizeObserver({
    onResize: ({ height }) => {
      document.documentElement.style.setProperty(
        "--main-header-height",
        `${height}px`
      );
    },
  });
  const { menusOpen } = useContext(MenuContext) || {};

  return (
    <header ref={ref} className={classnames("main-header", backgroundColor)}>
      <MainMenu route={route} />
      <Buttonish
        url={closeUrl}
        icon={<IconComposer icon="Close" />}
        text="Close Explorer"
        isIcon
        classes={classnames("close-button", {
          "menus-open": (menusOpen || []).length > 0,
        })}
      />
    </header>
  );
}

Header.propTypes = {
  backgroundColor: PropTypes.string,
  closeUrl: PropTypes.string,
  route: PropTypes.string,
};
