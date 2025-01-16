import { Fragment } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import CopyUrlButton from "@/components/organisms/ShareButtons/CopyUrlButton";
import GetImageButton from "@/components/organisms/ShareButtons/GetImageButton";
import FacebookShareButton from "@/components/organisms/ShareButtons/FacebookShareButton";
import TwitterShareButton from "@/components/organisms/ShareButtons/TwitterShareButton";
import EmailShareButton from "@/components/organisms/ShareButtons/EmailShareButton";
import IconButton from "@/components/primitives/IconButton";
import styles from "./styles.module.scss";

export default function Share() {
  return (
    <div className={styles.shareMenu}>
      <Menu>
        <MenuButton as={Fragment}>
          {({ open }) => (
            <IconButton
              icon={open ? "Close" : "ShareToggle"}
              className={styles.shareMenuButton}
              text={open ? "Close Share Menu" : "Open Share Menu"}
            />
          )}
        </MenuButton>
        <MenuItems static className={styles.shareMenuItems}>
          <MenuItem>
            <CopyUrlButton showLabel />
          </MenuItem>
          <MenuItem>
            <GetImageButton showLabel />
          </MenuItem>
          <MenuItem>
            <EmailShareButton showLabel />
          </MenuItem>
          <MenuItem>
            <FacebookShareButton showLabel />
          </MenuItem>
          <MenuItem>
            <TwitterShareButton showLabel />
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
