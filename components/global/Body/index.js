import PropTypes from "prop-types";
import GlobalDataContext from "@/contexts/GlobalData";
import HtmlHead from "@/global/HtmlHead";
import Header from "@/global/Header";
import Footer from "@/global/Footer";
import internalLinkShape from "@/shapes/link";
import { localizedShape } from "@/shapes/locale";
import siteInfoShape from "@/shapes/siteInfo";
import footerContentShape from "@/shapes/footerContent";
import imageShape from "@/shapes/image";

export default function Body({
  title,
  description,
  featuredImage,
  localized,
  language,
  children,
}) {
  return (
    <GlobalDataContext.Consumer>
      {({ siteInfo, headerNavItems, footerContent }) => {
        const {
          siteTitle,
          siteDescription,
          siteImage,
          contactInfo,
          ...socialInfo
        } = siteInfo;
        return (
          <>
            <HtmlHead
              title={title}
              description={description}
              featuredImage={featuredImage}
              siteInfo={siteInfo}
            />
            <Header
              navItems={headerNavItems}
              localized={localized}
              language={language}
            />
            <main id="page-content">{children}</main>
            <Footer socialInfo={socialInfo} content={footerContent} />
          </>
        );
      }}
    </GlobalDataContext.Consumer>
  );
}

Body.displayName = "Global.Body";

Body.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  featuredImage: PropTypes.arrayOf(imageShape),
  localized: localizedShape,
  language: PropTypes.string.isRequired,
  children: PropTypes.node,
};
