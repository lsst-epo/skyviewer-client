import { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { IoIosClose, IoMdShare } from "react-icons/io";
import IconButton from "@/components/atomic/IconButton";
import LinkToView from "@/components/molecules/ShareButton/patterns/LinkToView";
import GetImageButton from "@/components/molecules/ShareButton/patterns/DownloadImage";
import FacebookShareButton from "@/components/molecules/ShareButton/patterns/Facebook";
import TwitterShareButton from "@/components/molecules/ShareButton/patterns/Twitter";
import EmailShareButton from "@/components/molecules/ShareButton/patterns/Email";
import styles from "./styles.module.css";

export default function Share() {
  const { t } = useTranslation();
  return (
    <Menu as="div" className={styles.shareMenu}>
      <MenuButton as={Fragment}>
        {({ open }) => (
          <IconButton
            icon={open ? <IoIosClose /> : <IoMdShare />}
            className={styles.shareMenuButton}
            text={open ? t("menu.share.close") : t("menu.share.open")}
          />
        )}
      </MenuButton>
      <MenuItems static className={styles.shareMenuItems}>
        <MenuItem>
          <FacebookShareButton showLabel />
        </MenuItem>
        <MenuItem>
          <TwitterShareButton showLabel />
        </MenuItem>
        <MenuItem>
          <LinkToView showLabel />
        </MenuItem>
        <MenuItem>
          <EmailShareButton showLabel />
        </MenuItem>
        <MenuItem>
          <GetImageButton showLabel />
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
