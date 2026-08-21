import { FC, useState, MouseEvent, Fragment, ReactNode } from "react";
import clsx from "clsx/lite";
import { usePathname, useSearchParams } from "next/navigation";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
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
import { env } from "@/env";
import { currentViewAsParams } from "@/lib/aladin/helpers";
import { shouldShare } from "@/lib/utilities";
import WithButtonLabel from "@/components/atomic/WithButtonLabel";
import IconButton from "@/components/atomic/IconButton";
import LinkToView from "@/components/molecules/ShareButton/patterns/LinkToView";
import GetImageButton from "@/components/molecules/ShareButton/patterns/DownloadImage";
import EmbedButton from "@/components/molecules/ShareButton/patterns/Embed";
import styles from "./styles.module.css";

type Side = "top" | "bottom";
type Alignment = "right" | "left";
interface ShareProps {
  url?: string;
  className?: string;
  id?: string;
  socials?: boolean;
  email?: boolean;
  image?: boolean;
  link?: boolean;
  embed?: boolean;
  position?: `${Side} ${Alignment}`;
}

const Share: FC<ShareProps> = ({
  className,
  id,
  socials = true,
  email = true,
  link = true,
  image = true,
  embed = false,
  position = "top right",
  url,
}) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const baseUrl = new URL(pathname, env.NEXT_PUBLIC_BASE_URL).toString();
  const [viewUrl, setViewUrl] = useState(
    url || `${baseUrl}?${new URLSearchParams(searchParams).toString()}`
  );

  const imageType = "png";
  const mime = `image/${imageType}`;

  const { isLoading, aladin } = useAladin();

  const urlToShare = () => {
    if (url) return url;

    if (!isLoading) {
      return `${baseUrl}?${currentViewAsParams(aladin).toString()}`;
    }

    return baseUrl;
  };

  const imageBlob = async () => {
    if (!isLoading) {
      const data = await aladin.getViewData("blob", mime, false);
      const [ra, dec] = aladin.getRaDec();
      const [fov] = aladin.getFov();
      const filename = t("menu.share.options.image.filename", {
        ra: ra.toFixed(5),
        dec: dec.toFixed(5),
        fov: fov.toFixed(2),
        extension: imageType,
      });

      return { data, filename };
    }
  };

  const onImageShare = async () => {
    const image = await imageBlob();
    if (image) {
      saveAs(image.data, image.filename);
    }
  };

  const onLinkShare = async () => {
    try {
      await navigator.clipboard.writeText(viewUrl);
    } catch (error) {
      console.error(error.message);
    }
  };

  const nativeShare = async () => {
    const image = await imageBlob();
    const files: Array<File> = [];

    if (image) {
      files.push(
        new File([image.data], image.filename, { type: image.data.type })
      );
    }

    const data: ShareData = { url: urlToShare(), files };

    try {
      navigator.share(data);
    } catch (error) {
      console.warn(error);
    }
  };

  const handleMenuChange = async ({
    event,
    open,
  }: {
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>;
    open: boolean;
  }) => {
    if (!open) {
      if (shouldShare()) {
        event.preventDefault();
        nativeShare();
      }

      setViewUrl(urlToShare());
    }
  };

  const generateShareButtons = (close: () => void) => {
    const buttons: Array<{ label: string; item: ReactNode }> = [];

    if (socials) {
      buttons.push(
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
        }
      );
    }

    if (email) {
      buttons.push({
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
      });
    }

    if (link) {
      buttons.push({
        label: t("menu.share.options.url"),
        item: (
          <LinkToView
            label={t("menu.share.options.url")}
            onShare={onLinkShare}
          />
        ),
      });
    }

    if (image) {
      buttons.push({
        label: t("menu.share.options.image.cta"),
        item: (
          <GetImageButton
            label={t("menu.share.options.image.cta")}
            onShare={onImageShare}
          />
        ),
      });
    }

    if (embed) {
      buttons.push({
        label: t("menu.share.options.embed.cta"),
        item: (
          <EmbedButton
            label={t("menu.share.options.embed.cta")}
            onShare={close}
          />
        ),
      });
    }

    return buttons;
  };

  const [side, alignment] = position.split(" ");

  return (
    <Popover as="div" className={styles.shareMenu}>
      {({ open, close }) => {
        return (
          <>
            <PopoverButton
              as={IconButton}
              id={id}
              className={className}
              icon={open ? <IoIosClose /> : <IoMdShare />}
              text={open ? t("menu.share.close") : t("menu.share.open")}
              onClick={(event) => handleMenuChange({ event, open })}
              disabled={isLoading}
            />
            <AnimatePresence>
              {open && (
                <PopoverPanel static as={Fragment}>
                  <motion.div
                    onClick={close}
                    data-side={side}
                    data-alignment={alignment}
                    className={styles.shareMenuItems}
                    initial={{
                      opacity: 0,
                      translateX: alignment === "left" ? 100 : -100,
                    }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{
                      opacity: 0,
                      translateX: alignment === "left" ? 100 : -100,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {generateShareButtons(close).map(({ label, item }) => {
                      return (
                        <WithButtonLabel
                          key={label}
                          showLabel
                          label={label}
                          className={styles.itemLabel}
                        >
                          {item}
                        </WithButtonLabel>
                      );
                    })}
                  </motion.div>
                </PopoverPanel>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </Popover>
  );
};

Share.displayName = "Molecule.Explorer.Share";

export default Share;
