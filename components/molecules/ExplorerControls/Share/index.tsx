import { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoIosClose, IoMdShare } from "react-icons/io";

import LinkToView from "@/components/molecules/ShareButton/patterns/LinkToView";
import GetImageButton from "@/components/molecules/ShareButton/patterns/DownloadImage";
import FacebookShareButton from "@/components/molecules/ShareButton/patterns/Facebook";
import TwitterShareButton from "@/components/molecules/ShareButton/patterns/Twitter";
import EmailShareButton from "@/components/molecules/ShareButton/patterns/Email";
import IconButton from "@/components/primitives/IconButton";
import styles from "./styles.module.css";

export default function Share() {
  return (
    <div className={styles.shareMenu}>
      <Menu>
        <MenuButton as={Fragment}>
          {({ open }) => (
            <IconButton
              icon={open ? <IoIosClose /> : <IoMdShare />}
              className={styles.shareMenuButton}
              text={open ? "Close Share Menu" : "Open Share Menu"}
            />
          )}
        </MenuButton>
        <MenuItems static className={styles.shareMenuItems}>
          <MenuItem>
            {/* <CopyUrlButton showLabel /> */}
            <LinkToView />
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
