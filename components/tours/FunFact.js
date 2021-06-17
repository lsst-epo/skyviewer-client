import PropTypes from "prop-types";
import Link from "next/link";
import IconComposer from "@/svg/IconComposer";

export default function FunFact({ skipUrl, id, data }) {
  const { heading, blocks } = data;

  return (
    <>
      {id && (
        <div className="tour-fact mobile-only">
          <div className="top">
            <IconComposer icon="Info" className="fact-icon" />
            <h2 className="tour-intro-heading">{heading}</h2>
          </div>
          <div
            className="tour-fact-body"
            dangerouslySetInnerHTML={{ __html: blocks[+id - 1].block }}
          />
          {skipUrl && (
            <Link href={skipUrl}>
              <a className="skip-link">Skip Intro</a>
            </Link>
          )}
        </div>
      )}
      <div className="tour-fact desktop-only">
        <div>
          <IconComposer icon="Info" className="fact-icon" />
          <h2 className="tour-fact-heading">{heading}</h2>
        </div>
        <div className="tour-fact-body">
          {blocks.map((block, index) => {
            return (
              <div
                className="block"
                key={`block-${index}`}
                dangerouslySetInnerHTML={{
                  __html: blocks[index].block,
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
  data: PropTypes.object,
  id: PropTypes.any,
  skipUrl: PropTypes.string,
};
