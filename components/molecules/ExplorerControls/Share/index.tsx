import { FC, useState } from "react";
import clsx from "clsx/lite";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { IoIosClose, IoMdShare } from "react-icons/io";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsEnvelope } from "react-icons/bs";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
} from "react-share";
import saveAs from "file-saver";
import { useAladin } from "@/contexts/Aladin";
import { currentViewAsParams } from "@/lib/aladin/helpers";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";
import IconButton from "@/components/atomic/IconButton";
import LinkToView from "@/components/molecules/ShareButton/patterns/LinkToView";
import GetImageButton from "@/components/molecules/ShareButton/patterns/DownloadImage";
import styles from "./styles.module.css";

const Share: FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const baseUrl = new URL(pathname, process.env.NEXT_PUBLIC_BASE_URL);
  const [viewUrl, setViewUrl] = useState(
    `${baseUrl}?${new URLSearchParams(searchParams).toString}`
  );

  const imageType = "png";
  const mime = `image/${imageType}`;

  const { isLoading, aladin } = useAladin();

  const urlToShare = () => {
    if (!isLoading) {
      const url = `${baseUrl.href}?${currentViewAsParams(aladin).toString()}`;

      return url;
    }

    return baseUrl.href;
  };

  const onImageShare = async () => {
    if (!isLoading) {
      const dataUrl = await aladin.getViewData("blob", mime, false);
      const [ra, dec] = aladin.getRaDec();
      const [fov] = aladin.getFov();
      const filename = t("menu.share.options.image.filename", {
        ra: ra.toFixed(5),
        dec: dec.toFixed(5),
        fov: fov.toFixed(2),
        extension: imageType,
      });

      saveAs(dataUrl, filename);
    }
  };

  const onLinkShare = async () => {
    try {
      await navigator.clipboard.writeText(viewUrl);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleMenuChange = (open: boolean) => {
    if (!open) {
      setViewUrl(urlToShare());
    }
  };

  const generateShareButtons = (close: () => void) => [
    {
      label: t("menu.share.options.facebook"),
      item: (
        <FacebookShareButton
          url={viewUrl}
          className={clsx(styles.shareButton, styles.facebook)}
          resetButtonStyle={false}
          htmlTitle={t("menu.share.options.facebook")}
          onShareWindowClose={close}
        >
          <FaFacebookF />
        </FacebookShareButton>
      ),
    },
    {
      label: t("menu.share.options.twitterX"),
      item: (
        <TwitterShareButton
          url={viewUrl}
          className={clsx(styles.shareButton, styles.twitter)}
          resetButtonStyle={false}
          htmlTitle={t("menu.share.options.twitterX")}
          onShareWindowClose={close}
        >
          <FaXTwitter />
        </TwitterShareButton>
      ),
    },
    {
      label: t("menu.share.options.linkedin"),
      item: (
        <LinkedinShareButton
          url={viewUrl}
          className={clsx(styles.shareButton, styles.linkedin)}
          resetButtonStyle={false}
          htmlTitle={t("menu.share.options.linkedin")}
          onShareWindowClose={close}
        >
          <FaLinkedinIn />
        </LinkedinShareButton>
      ),
    },
    {
      label: t("menu.share.options.url"),
      item: (
        <LinkToView label={t("menu.share.options.url")} onShare={onLinkShare} />
      ),
    },
    {
      label: t("menu.share.options.email"),
      item: (
        <EmailShareButton
          url={viewUrl}
          className={clsx(styles.shareButton)}
          resetButtonStyle={false}
          htmlTitle={t("menu.share.options.email")}
          onShareWindowClose={close}
        >
          <BsEnvelope />
        </EmailShareButton>
      ),
    },
    {
      label: t("menu.share.options.image.cta"),
      item: (
        <GetImageButton
          label={t("menu.share.options.image.cta")}
          onShare={onImageShare}
        />
      ),
    },
  ];

  return (
    <Menu as="div" className={styles.shareMenu} data-loading={isLoading}>
      {({ open, close }) => {
        return (
          <>
            <MenuButton
              as={IconButton}
              icon={open ? <IoIosClose /> : <IoMdShare />}
              text={open ? t("menu.share.close") : t("menu.share.open")}
              onClick={() => handleMenuChange(open)}
              disabled={isLoading}
            />
            <AnimatePresence>
              {open && (
                <MenuItems
                  static
                  as={motion.div}
                  initial={{ opacity: 0, translateX: -100 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  exit={{ opacity: 0, translateX: -100 }}
                  transition={{ duration: 0.2 }}
                  className={styles.shareMenuItems}
                  onClick={close}
                >
                  {generateShareButtons(close).map(({ label, item }) => {
                    return (
                      <MenuItem
                        key={label}
                        as={WithButtonLabel}
                        showLabel
                        label={label}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuItems>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </Menu>
  );
};

Share.displayName = "Molecule.Explorer.Share";

export default Share;
