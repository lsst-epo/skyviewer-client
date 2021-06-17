import PropTypes from "prop-types";
import Link from "next/link";
import Bubbles from "@/components/Bubbles";

export default function Intro({ skipUrl, id, data, thumbnail }) {
  const { heading, subheading, blocks } = data;

  return (
    <>
      {id && (
        <div className="tour-intro mobile-only">
          <div className="top">
            <div
              className="tour-intro-thumbnail"
              style={{ backgroundImage: `url(${thumbnail})` }}
            />
            <div className="main">
              <div>
                <h2 className="tour-intro-heading">{heading}</h2>
                <h3 className="tour-intro-subheading">{subheading}</h3>
              </div>
              <div
                className="tour-intro-body"
                dangerouslySetInnerHTML={{ __html: blocks[+id - 1].block }}
              />
            </div>
          </div>
          {blocks.length > 1 && <Bubbles val={+id} max={blocks.length} />}
          {id && skipUrl && (
            <Link href={skipUrl}>
              <a className="skip-link">Skip Intro</a>
            </Link>
          )}
        </div>
      )}
      <div className="tour-intro desktop-only">
        <div
          className="tour-intro-thumbnail"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />
        <div className="main">
          <div>
            <h2 className="tour-intro-heading">{heading}</h2>
            <h3 className="tour-intro-subheading">{subheading}</h3>
          </div>
          <div className="tour-intro-body">
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
      </div>
    </>
  );
}

Intro.propTypes = {
  data: PropTypes.object,
  id: PropTypes.any,
  thumbnail: PropTypes.string,
  skipUrl: PropTypes.string,
};
