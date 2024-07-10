import PropTypes from "prop-types";
import classnames from "classnames";
import IconComposer from "@/svg/IconComposer";
import CopyUrlButton from "@/components/ShareButtons/CopyUrlButton";
import GetImageButton from "@/components/ShareButtons/GetImageButton";
import FacebookShareButton from "@/components/ShareButtons/FacebookShareButton";
import TwitterShareButton from "@/components/ShareButtons/TwitterShareButton";
import EmailShareButton from "@/components/ShareButtons/EmailShareButton";

export default function ShareButtons({
  classes,
  url = true,
  showLabels = true,
  facebook = true,
  twitter = true,
  image = true,
  email = true,
}) {
  return (
    <ul
      className={classnames("share-buttons", classes)}
      role="menu"
      aria-label="Share Buttons"
    >
      {url && (
        <li role="menuitem">
          <CopyUrlButton showLabel={showLabels} />
        </li>
      )}
      {facebook && (
        <li role="menuitem">
          <FacebookShareButton hashtag="#skyviewer" showLabel={showLabels} />
        </li>
      )}
      {twitter && (
        <li role="menuitem">
          <TwitterShareButton
            title="Example Tweet"
            hashtags={["#skyviewer"]}
            showLabel={showLabels}
          />
        </li>
      )}
      {image && (
        <li role="menuitem">
          <GetImageButton showLabel={showLabels} />
        </li>
      )}
      {email && (
        <li role="menuitem">
          <EmailShareButton
            subject="Example Email Subject"
            body="Example Email Body"
            showLabel={showLabels}
          />
        </li>
      )}
    </ul>
  );
}

ShareButtons.propTypes = {
  classes: PropTypes.string,
  showLabels: PropTypes.bool,
  url: PropTypes.bool,
  facebook: PropTypes.bool,
  twitter: PropTypes.bool,
  image: PropTypes.bool,
  email: PropTypes.bool,
};
