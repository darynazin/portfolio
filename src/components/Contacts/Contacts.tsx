import { useState, useRef, useEffect } from 'react';
import 'sweetalert2/themes/bulma.css'
import Swal from 'sweetalert2'
import { useForm } from '@formspree/react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Contacts.scss";
import { useTranslation } from "react-i18next";

function Contacts() {
  const [state, handleSubmit] = useForm('xldwrvnd');
  const [enquiryType, setEnquiryType] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const { t } = useTranslation();

  const getFieldError = (field: string) => {
  const error = state.errors?.getFieldErrors(field)?.[0];

  if (!error) return null;

  if (error.code === "TYPE_EMAIL" || field === "email") {
    return t("errors.invalidEmail");
  }

  return t("errors.required");
};

  useEffect(() => {
  if (state.succeeded && formRef.current) {
    Swal.fire({
      title: "Your message is sent!",
      icon: "success",
      draggable: true,
      background: "#252931ff",
      customClass: {
        title: 'message-title',
        confirmButton: 'message-confirm',
        icon: 'message-icon'
      }
    });
    formRef.current.reset();
    setEnquiryType('');
  }
}, [state.succeeded]);


  return (
    <section className="section-wrapper">
      <div className="section">
        <h1 className="contact-subtitle">{t("contact.title")}</h1>
        <div className="contact" id="contact">

          <div className="contact-left">

            <h2 className="contact-title">
              <span>{t("contact.getInTouch")}</span> {t("contact.messageMe")}
            </h2>
            <p className="contact-description">
              {t("contact.description")}
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <i className="fas fa-phone"></i>
                <a href="tel:+491786549057">+491786549057</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:zinchenko.daryna@gmail.com">zinchenko.daryna@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <a href='https://www.google.com/maps/search/?q=Schwarzenbach am Wald'
                  target="_blank" rel="noopener noreferrer">Schwarzenbach am Wald, Germany</a>
              </div>
            </div>

            <div className="contact-socials">
              <a href="https://www.linkedin.com/in/daryna-zinchenko/"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/darynazin"><i className="fab fa-github"></i></a>
              <a href="https://wa.me/+491786549057" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group name-email">
                <div>
                  <label htmlFor="fullName">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                  />
                  {getFieldError("fullName") && (
  <p className="form-error">{getFieldError("fullName")}</p>
)}
                </div>
                <div>
                  <label htmlFor="email">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                  {getFieldError("email") && (
                <p className="form-error">{getFieldError("email")}</p>
              )}
                </div>
              </div>

              <div className="form-group">
                <input type="hidden" name="enquiryType" value={enquiryType} />
                {getFieldError("enquiryType") && (
  <p className="form-error">{getFieldError("enquiryType")}</p>
)}
              </div>

              <div className="form-group">
                <label htmlFor="message">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                />
                {getFieldError("message") && (
  <p className="form-error">{getFieldError("message")}</p>
)}
              </div>

              <div>
                <label>
                  <input type="checkbox" required /> {t("contact.form.consent")}

                </label>
                {getFieldError("checkbox") && (
  <p className="form-error">{getFieldError("checkbox")}</p>
)}
              </div>

              <button type="submit" className="btn-submit" disabled={state.submitting}>{t("contact.form.submit")}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
