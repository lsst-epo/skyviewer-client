import PropTypes from "prop-types";
import classnames from "classnames";
import IconComposer from "@/svg/IconComposer";

export default function Accordion({
  id,
  isExpanded,
  title,
  handleToggle,
  children,
}) {
  return (
    <div
      className={classnames("accordion", {
        "is-expanded": isExpanded,
      })}
    >
      <h3>
        <button
          aria-expanded={isExpanded}
          className="accordion-toggle"
          aria-controls={`sect-${id}`}
          id={`accordion-${id}`}
          onClick={() => {
            handleToggle(id);
          }}
        >
          <span className="accordion-title">{title}</span>
          <IconComposer
            className="accordion-icon"
            icon={isExpanded ? "Minus" : "Plus"}
          />
        </button>
      </h3>
      <div
        id={`sect-${id}`}
        role="region"
        aria-labelledby={`accordion-${id}`}
        className={classnames("accordion-panel", {
          "is-expanded": isExpanded,
        })}
        hidden={!isExpanded}
      >
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  );
}

Accordion.displayName = "Primitives.Accordion";

Accordion.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func,
};
