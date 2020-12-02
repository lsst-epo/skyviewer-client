import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import IconComposer from "@/svg/IconComposer";
import ExternalLink from "@/primitives/ExternalLink";
import { capitalize } from "@/helpers";
import { socialInfoShape } from "@/shapes/siteInfo";

const hiddenText = (account, t) => {
  if (account === "email") return t("social.email-rubin");
  return `${t("social.visit-rubin")} ${capitalize(account)}`;
};

const finalizedUrl = (account, url) => {
  if (account === "email") return `mailto:${url}`;
  return url;
};

function Item({ account, url }) {
  const { t } = useTranslation();

  if (!account || !url) return null;
  return (
    <li className="c-social-list__item">
      <ExternalLink
        href={finalizedUrl(account, url)}
        className="c-social-list__link"
      >
        <span className="a-hidden">{hiddenText(account, t)}</span>
        <IconComposer icon={account} className="c-social-list__icon" />
      </ExternalLink>
    </li>
  );
}

Item.propTypes = {
  account: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function Social({ socialInfo }) {
  return (
    <div className="c-social-list">
      <div className="c-social-list__inner">
        <h3 className="c-social-list__heading">Let’s Connect</h3>
        <ul className="c-social-list__list">
          {Object.keys(socialInfo).map((account) => (
            <Item key={account} account={account} url={socialInfo[account]} />
          ))}
        </ul>
      </div>
    </div>
  );
}

Social.displayName = "Global.Footer.Social";

Social.propTypes = {
  socialInfo: socialInfoShape,
};
