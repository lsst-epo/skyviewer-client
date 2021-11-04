import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { EmailShareButton } from "react-share";
import IconComposer from "@/svg/IconComposer";

export default function ShareButton({ subject, body, separator, showLabel }) {
  return (
    <EmailShareButton
      url={
        typeof window !== "undefined"
          ? window.location.href
          : "https://www.rubinobservatory.com"
      }
      subject={subject}
      body={body}
      separator={separator}
      className="share-button"
    >
      <div className="share-icon email">
        <IconComposer icon="Email" />
      </div>
      <div
        className={classnames("share-network", {
          "screen-reader-only": !showLabel,
        })}
      >
        Email
      </div>
    </EmailShareButton>
  );
}

ShareButton.defaultProps = {
  separator: " ",
};

ShareButton.propTypes = {
  subject: PropTypes.string,
  body: PropTypes.string,
  separator: PropTypes.string,
  showLabel: PropTypes.bool,
};
