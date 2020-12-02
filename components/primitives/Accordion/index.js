import PropTypes from "prop-types";

export default function Accordion({ summary, children }) {
  return (
    <details className="c-accordion">
      <summary className="c-accordion__summary">{summary}</summary>
      <div className="c-accordion__details">{children}</div>
    </details>
  );
}

Accordion.displayName = "Primitives.Accordion";

Accordion.propTypes = {
  summary: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
