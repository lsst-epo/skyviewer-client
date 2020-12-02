import PropTypes from "prop-types";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const EMAIL_ID = "footerContactEmail";
const MESSAGE_ID = "footerContactMessage";

export default function ContactForm({ className }) {
  const { t } = useTranslation();

  function handleSubmit(event) {
    console.log(event); // eslint-disable-line
    event.preventDefault();
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className={classNames({
        "c-contact-form": true,
        [`${className}`]: !!className,
      })}
    >
      <div className="c-contact-form__block">
        <label htmlFor={EMAIL_ID} className="a-hidden">
          {t("email")}
        </label>
        <input
          id={EMAIL_ID}
          type="email"
          placeholder={t("email")}
          required
          className="c-contact-form__input"
        />
      </div>
      <div className="c-contact-form__block">
        <label htmlFor={MESSAGE_ID} className="a-hidden">
          Inquiry
        </label>
        <textarea
          id={MESSAGE_ID}
          placeholder={t("inquiry")}
          required
          className="c-contact-form__input"
        />
      </div>
      <div className="c-contact-form__block">
        <button type="submit" className="c-contact-form__submit c-buttonish">
          {t("send")}
        </button>
      </div>
    </form>
  );
}

ContactForm.displayName = "Global.Footer.ContactForm";

ContactForm.propTypes = {
  className: PropTypes.string,
};
