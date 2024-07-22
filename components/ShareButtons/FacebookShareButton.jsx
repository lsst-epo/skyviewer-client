import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FacebookShareButton } from "react-share";
import IconComposer from "@/svg/IconComposer";

export default function ShareButton({ quote, hashtag, showLabel }) {
  return (
    <FacebookShareButton
      url={
        typeof window !== "undefined"
          ? window.location.href
          : "https://www.rubinobservatory.com"
      }
      quote={quote}
      hashtag={hashtag}
      className="share-button"
    >
      <div className="share-icon facebook">
        <IconComposer icon="ShareFacebook" />
      </div>
      <div
        className={classnames("share-network", {
          "screen-reader-only": !showLabel,
        })}
      >
        Facebook
      </div>
    </FacebookShareButton>
  );
}

ShareButton.propTypes = {
  quote: PropTypes.string,
  hashtag: PropTypes.string,
  showLabel: PropTypes.bool,
};
