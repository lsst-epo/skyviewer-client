import PropTypes from "prop-types";
import classnames from "classnames";
import IconComposer from "@/svg/IconComposer";
import ShareButton from "@/components/ShareButton";
import CopyUrlButton from "@/components/CopyUrlButton";
import GetImageButton from "@/components/GetImageButton";

export default function ShareButtons({
  classes,
  showLabels,
  url,
  facebook,
  twitter,
  image,
  email,
}) {
  return (
    <ul
      className={classnames("share-buttons", classes)}
      role="menu"
      aria-label="Share Buttons"
    >
      {url && (
        <li role="menuitem">
          <CopyUrlButton
            icon={<IconComposer icon="Chain" />}
            text="Get Url"
            network="url"
            showLabel={showLabels}
          />
        </li>
      )}
      {facebook && (
        <li role="menuitem">
          <ShareButton
            icon={<IconComposer icon="Facebook" />}
            text="Facebook"
            network="facebook"
            description="Example Facebook post description"
            showLabel={showLabels}
          />
        </li>
      )}
      {twitter && (
        <li role="menuitem">
          <ShareButton
            icon={<IconComposer icon="Twitter" />}
            text="Twitter"
            network="twitter"
            description="Example Tweet description"
            showLabel={showLabels}
          />
        </li>
      )}
      {image && (
        <li role="menuitem">
          <GetImageButton
            icon={<IconComposer icon="ShareSimple" />}
            text="Get Image"
            network="image"
            showLabel={showLabels}
          />
        </li>
      )}
      {email && (
        <li role="menuitem">
          <ShareButton
            icon={<IconComposer icon="Email" />}
            text="Email"
            network="email"
            message="Example Email message"
            showLabel={showLabels}
          />
        </li>
      )}
    </ul>
  );
}

ShareButtons.defaultProps = {
  url: true,
  showLabels: true,
  facebook: true,
  twitter: true,
  image: true,
  email: true,
};

ShareButtons.propTypes = {
  classes: PropTypes.string,
  showLabels: PropTypes.bool,
  url: PropTypes.bool,
  facebook: PropTypes.bool,
  twitter: PropTypes.bool,
  image: PropTypes.bool,
  email: PropTypes.bool,
};
