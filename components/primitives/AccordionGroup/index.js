import PropTypes from "prop-types";
import classnames from "clsx";

export default function AccordionGroup({ className, children }) {
  return (
    <div id="accordion-group" className={classnames("accordions", className)}>
      {children}
    </div>
  );
}

AccordionGroup.displayName = "Primitives.AccordionGroup";

AccordionGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
