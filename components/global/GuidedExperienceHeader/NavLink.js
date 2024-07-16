import PropTypes from "prop-types";
import Buttonish from "@/primitives/Buttonish";
import Button from "@/primitives/Button";

export default function NavLink({ url, classes, icon, text }) {
  return (
    <>
      {url ? (
        <Buttonish {...{ url, classes, icon, text }} isIcon />
      ) : (
        <Button disabled {...{ classes, icon, text }} isIcon />
      )}
    </>
  );
}

NavLink.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  classes: PropTypes.string,
};
