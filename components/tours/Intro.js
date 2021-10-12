import PropTypes from "prop-types";
import Link from "next/link";
import Bubbles from "@/components/Bubbles";

export default function Intro({
  skipUrl,
  id,
  heading,
  subheading,
  blocks,
  thumbnail,
}) {
  return (
    <>
      {id && (
        <div className="tour-intro mobile-only">
          <div className="top">
            <div
              className="tour-intro-thumbnail"
              style={{
                backgroundImage: `url(${thumbnail[0].url})`,
              }}
            />
            <div className="tour-intro-headings">
              <h2 className="tour-intro-heading">{heading}</h2>
              <h3 className="tour-intro-subheading">{subheading}</h3>
            </div>
          </div>
          <div className="main">
            <div
              className="tour-intro-body"
              dangerouslySetInnerHTML={{ __html: blocks[+id - 1]?.body }}
            />
          </div>
          <div className="bottom">
            {blocks.length > 1 && <Bubbles val={+id} max={blocks.length} />}
            {id && skipUrl && (
              <Link href={skipUrl}>
                <a className="skip-link">Skip Intro</a>
              </Link>
            )}
          </div>
        </div>
      )}
      <div className="tour-intro desktop-only">
        <div
          className="tour-intro-thumbnail"
          style={{
            backgroundImage: `url(${thumbnail[0].url})`,
          }}
        />
        <div className="main">
          <div>
            <h2 className="tour-intro-heading">{heading}</h2>
            <h3 className="tour-intro-subheading">{subheading}</h3>
          </div>
          <div className="tour-intro-body">
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

Intro.propTypes = {
  id: PropTypes.any,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  blocks: PropTypes.array,
  thumbnail: PropTypes.array,
  skipUrl: PropTypes.string,
};
