import PropTypes from "prop-types";
import Header from "@/global/PrimaryHeader";

export default function PrimaryLayout({ closeUrl, children }) {
  return (
    <>
      <Header closeUrl={closeUrl} />
      {children}
    </>
  );
}

PrimaryLayout.propTypes = {
  closeUrl: PropTypes.string,
  children: PropTypes.node,
};
