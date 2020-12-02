import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Social from "./Social";
import Nav from "./Nav";
import ContactForm from "./ContactForm";
import Image from "@/primitives/Image";
import { socialInfoShape } from "@/shapes/siteInfo";
import footerContentShape from "@/shapes/footerContent";

export default function Footer({
  socialInfo,
  content: { links, colophon, supportersLogos },
}) {
  const { t } = useTranslation();
  const supportersImage = supportersLogos && supportersLogos[0];

  return (
    <footer className="c-global-footer">
      <Social socialInfo={socialInfo} />
      <Nav links={links} />
      <div className="c-global-footer__main">
        <div className="c-global-footer__form-block">
          <h3 className="c-global-footer__heading">{t("contact-us")}</h3>
          <ContactForm className="c-global-footer__form" />
        </div>
        <div className="c-global-footer__colophon-block">
          {colophon && (
            <div
              dangerouslySetInnerHTML={{ __html: colophon }}
              className="c-content-rte c-global-footer__colophon"
            />
          )}
        </div>
        <div className="c-global-footer__sponsors-block">
          {supportersImage && <Image image={supportersImage} />}
        </div>
      </div>
    </footer>
  );
}

Footer.displayName = "Global.Footer";

Footer.propTypes = {
  socialInfo: socialInfoShape,
  content: footerContentShape,
};
