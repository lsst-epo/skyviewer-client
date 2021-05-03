import PropTypes from "prop-types";
import Header from "@/global/PrimaryHeader";

export default function PrimaryLayout({ closeUrl, route, children }) {
  return (
    <>
      <Header closeUrl={closeUrl} route={route} />
      {children}
    </>
  );
}

PrimaryLayout.propTypes = {
  closeUrl: PropTypes.string,
  route: PropTypes.string,
  children: PropTypes.node,
};
