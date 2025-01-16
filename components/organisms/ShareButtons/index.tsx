import { FC } from "react";
import classnames from "classnames";
import CopyUrlButton from "@/components/organisms/ShareButtons/CopyUrlButton";
import GetImageButton from "@/components/organisms/ShareButtons/GetImageButton";
import FacebookShareButton from "@/components/organisms/ShareButtons/FacebookShareButton";
import TwitterShareButton from "@/components/organisms/ShareButtons/TwitterShareButton";
import EmailShareButton from "@/components/organisms/ShareButtons/EmailShareButton";
import styles from "./styles.module.scss";

interface ShareButtonProps {
  className?: string;
  url?: boolean;
  facebook?: boolean;
  twitter?: boolean;
  download?: boolean;
  email?: boolean;
  embed?: boolean;
  showLabels?: boolean;
  direction?: "horizontal" | "vertical";
}

const ShareButtons: FC<ShareButtonProps> = ({
  className,
  url = true,
  showLabels = true,
  facebook = true,
  twitter = true,
  download = true,
  email = true,
  direction = "horizontal",
}) => {
  return (
    <ul
      className={classnames(styles.shareButtons, className)}
      data-direction={direction}
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
      {download && (
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
};

ShareButtons.displayName = "Organism.ShareButtons";

export default ShareButtons;
