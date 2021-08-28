import PropTypes from "prop-types";
import Link from "next/link";
import IconComposer from "@/svg/IconComposer";

export default function FunFact({ skipUrl, id, heading, blocks }) {
  return (
    <>
      {id && (
        <div className="tour-fact mobile-only">
          <div className="top">
            <IconComposer icon="Info" className="fact-icon" />
            <h2 className="tour-intro-heading">{heading}</h2>
          </div>
          <div className="main">
            <div
              className="tour-fact-body"
              dangerouslySetInnerHTML={{ __html: blocks[+id - 1].body }}
            />
          </div>
          <div className="bottom">
            {skipUrl && (
              <Link href={skipUrl}>
                <a className="skip-link">Skip Intro</a>
              </Link>
            )}
          </div>
        </div>
      )}
      <div className="tour-fact desktop-only">
        <div>
          <IconComposer icon="Info" className="fact-icon" />
          <h2 className="tour-fact-heading">{heading}</h2>
        </div>
        <div className="tour-fact-body">
          {blocks.map((block) => {
            const { id, body } = block;

            return (
              <div
                className="block"
                key={`block-${id}`}
                dangerouslySetInnerHTML={{
                  __html: body,
                }}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

FunFact.propTypes = {
  heading: PropTypes.string,
  blocks: PropTypes.array,
  id: PropTypes.any,
  skipUrl: PropTypes.string,
};
