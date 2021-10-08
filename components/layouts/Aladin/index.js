import PropTypes from "prop-types";

export default function AladinLayout({ children }) {
  return (
    <>
      <main className="viewer-container">{children}</main>
    </>
  );
}

AladinLayout.propTypes = {
  children: PropTypes.node,
};
