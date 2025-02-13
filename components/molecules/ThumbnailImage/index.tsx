import { FC } from "react";
import Image, { ImageProps } from "next/image";
import Frame from "@rubin-epo/epo-react-lib/Frame";
import styles from "./styles.module.css";
import clsx from "clsx";

interface ThumbnailImageProps {
  image?: ImageProps;
  className?: string;
}

const ThumbnailImage: FC<ThumbnailImageProps> = ({ image, className }) => {
  return (
    <Frame className={clsx(styles.frame, className)} aspectRatio="1:1">
      {image && <Image {...image} className={styles.image} />}
    </Frame>
  );
};

ThumbnailImage.displayName = "Molecule.ThumbnailImage";

export default ThumbnailImage;
