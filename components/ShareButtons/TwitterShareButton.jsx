import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { TwitterShareButton } from "react-share";
import IconComposer from "@/components/svg/IconComposer";

export default function ShareButton({
  title,
  via,
  hashtags,
  related,
  showLabel,
}) {
  return (
    <TwitterShareButton
      url={
        typeof window !== "undefined"
          ? window.location.href
          : "https://www.rubinobservatory.com"
      }
      title={title}
      hashtags={hashtags}
      className="share-button"
    >
      <div className="share-icon twitter">
        <IconComposer icon="ShareTwitter" />
      </div>
      <div
        className={classnames("share-network", {
          "screen-reader-only": !showLabel,
        })}
      >
        Twitter
      </div>
    </TwitterShareButton>
  );
}

ShareButton.propTypes = {
  title: PropTypes.string,
  via: PropTypes.string,
  hashtags: PropTypes.array,
  related: PropTypes.array,
  showLabel: PropTypes.bool,
};
