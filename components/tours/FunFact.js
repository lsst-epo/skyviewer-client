import PropTypes from "prop-types";
import Link from "next/link";
import IconComposer from "@/svg/IconComposer";

export default function FunFact({ skipUrl, id, heading, blocks }) {
  const mobileContent = blocks[id - 1]?.body;
  return (
    <>
      {mobileContent && (
        <div className="tour-fact mobile-only">
          <div className="top">
            <IconComposer icon="Info" className="fact-icon" />
            <h2 className="tour-fact-heading">{heading}</h2>
          </div>
          <div className="main">
            <div
              className="tour-fact-body"
              dangerouslySetInnerHTML={{ __html: mobileContent }}
            />
          </div>
          <div className="bottom">
            {skipUrl && (
              <Link href={skipUrl} className="skip-link">
                Skip Intro
              </Link>
            )}
          </div>
        </div>
      )}
      <div className="tour-fact desktop-only">
        <div className="main">
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
      </div>
    </>
  );
}

FunFact.propTypes = {
  heading: PropTypes.string,
  blocks: PropTypes.array,
  id: PropTypes.number,
  skipUrl: PropTypes.string,
};
