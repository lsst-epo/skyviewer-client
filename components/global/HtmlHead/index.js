import PropTypes from "prop-types";
import Head from "next/head";
import siteInfoShape from "@/shapes/siteInfo";
import imageShape from "@/shapes/image";

export default function HtmlHead({
  title,
  description,
  featuredImage,
  siteInfo: { siteTitle, siteDescription, siteImage },
  children,
}) {
  const image =
    featuredImage && featuredImage[0] ? featuredImage[0] : siteImage[0];
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description || siteDescription} />
      <meta name="og:url" content="" />
      <meta name="og:type" content="article" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description || siteDescription} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />
      {image && image.url && (
        <>
          <meta name="og:image" content={image.url} />
          {image.altText && (
            <meta name="og:image:alt" content={image.altText} />
          )}
          <meta name="twitter:image" content={image.url} />
          {image.altText && (
            <meta name="twitter:image:alt" content={image.altText} />
          )}
        </>
      )}
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
}

HtmlHead.displayName = "Global.HtmlHead";

HtmlHead.propTypes = {
  siteInfo: siteInfoShape,
  title: PropTypes.string,
  description: PropTypes.string,
  featuredImage: PropTypes.arrayOf(imageShape),
  children: PropTypes.node,
};
