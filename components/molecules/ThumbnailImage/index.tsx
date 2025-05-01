"use client";
import { FC, useState } from "react";
import Image, { ImageProps } from "next/image";
import Frame from "@rubin-epo/epo-react-lib/Frame";
import styles from "./styles.module.css";
import clsx from "clsx/lite";
import Skeleton from "react-loading-skeleton";

interface ThumbnailImageProps {
  image?: ImageProps;
  className?: string;
}

const ThumbnailImage: FC<ThumbnailImageProps> = ({ image, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Frame className={clsx(styles.frame, className)} aspectRatio="1:1">
      {image && (
        <Image
          {...image}
          sizes="150px"
          className={styles.image}
          onLoadingComplete={() => setLoaded(true)}
        />
      )}

      {!loaded && (
        <Skeleton
          containerClassName={styles.skeletonContainer}
          className={styles.skeletonImage}
          circle
        />
      )}
    </Frame>
  );
};

ThumbnailImage.displayName = "Molecule.ThumbnailImage";

export default ThumbnailImage;
