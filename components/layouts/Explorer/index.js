import PropTypes from "prop-types";
import AladinHeadMatter from "@/components/explorer/Aladin/AladinHeadMatter";

export default function ExplorerLayout({ children }) {
  return (
    <>
      <AladinHeadMatter />
      <main className="viewer-container">{children}</main>
    </>
  );
}

ExplorerLayout.propTypes = {
  children: PropTypes.node,
};
