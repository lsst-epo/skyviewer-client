import PropTypes from "prop-types";
import Link from "next/link";
import ExternalLink from "@/primitives/ExternalLink";
import { mixedLinkInternalShape } from "@/shapes/link";
import { normalizePathData } from "@/lib/utils";

export default function MixedLink({
  children,
  className,
  customText,
  element,
  params,
  text,
  target,
  type,
  url,
}) {
  // make sure we're not working with a rubin url
  url = url?.replace(/((https:\/\/|http:\/\/)(\w+\.)*rubin(\.\w+)*\/)/, "");

  if (url?.startsWith("http") || url?.startsWith("//")) {
    return (
      <ExternalLink href={url} className={className} target={target}>
        {!children && (customText ?? text)}
        {children}
      </ExternalLink>
    );
  } else {
    const pathname = element?.uri || url || "/";
    const { simplePathname, pathParams } = normalizePathData(pathname);

    const href = {
      pathname: simplePathname,
      query: { ...pathParams, ...params },
    };

    return (
      <Link href={href} className={className} target={target}>
        {!children && (customText ?? text)}
        {children}
      </Link>
    );
  }
}

MixedLink.displayName = "Primitives.MixedLink";

MixedLink.propTypes = {
  ...mixedLinkInternalShape,
  className: PropTypes.string,
};
