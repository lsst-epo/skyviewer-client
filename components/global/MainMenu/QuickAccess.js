import PropTypes from "prop-types";
import IconComposer from "@/svg/IconComposer";
import Buttonish from "@/primitives/Buttonish";

export default function QuickAccess({ route }) {
  return (
    <nav aria-labelledby="settings-label" className="quick-access-nav">
      <h3 id="settings-label" className="menu-section-heading">
        Quick Access
      </h3>
      <ul className="quick-access-nav-items">
        <li className="quick-access-nav-item">
          {route === "/explorer" ? (
            <Buttonish
              url="/tours"
              icon={<IconComposer icon="Suitcase" />}
              text="Astronomical Tours"
            />
          ) : (
            <Buttonish
              url="/explorer"
              icon={<IconComposer icon="Sparkle" />}
              text="Skyviewer Explorer"
            />
          )}
        </li>
      </ul>
    </nav>
  );
}

QuickAccess.propTypes = {
  route: PropTypes.string,
};
