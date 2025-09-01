import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import CustomSelect from "../CustomSelect/CustomSelect";
import "./Contacts.scss";

function Contacts() {
  const [state, handleSubmit] = useForm('xldwrvnd');
  const [enquiryType, setEnquiryType] = useState('');

  if (state.succeeded) {
    return <p className='successMessage'>Your message was sent!</p>;
  }

  return (
    <section>
      <h4 className="contact-subtitle">Contact</h4>
      <div className="contact" id="contact">

        <div className="contact-left">

          <h2 className="contact-title">
            Let’s Build Something <span>Awesome</span> – Message Me!
          </h2>
          <p className="contact-description">
            I'd love to hear from you! Whether you have a project idea, need help
            with software development, or just want to connect and chat about
            tech, feel free to reach out.
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
          <form onSubmit={handleSubmit}>
            <div className="form-group name-email">
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="your name"
                  required
                />
                <ValidationError
                  prefix="Full Name"
                  field="fullName"
                  errors={state.errors}
                />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. example@gmail.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="enquiryType">Enquiry Type</label>
              <CustomSelect
                options={[
                  { value: "project", label: "Project Idea" },
                  { value: "collab", label: "Collaboration" },
                  { value: "other", label: "Other" },
                ]}
                placeholder="Select enquiry type"
                onChange={(value) => setEnquiryType(value)}
              />
              <input type="hidden" name="enquiryType" value={enquiryType} />
              <ValidationError
                prefix="EnquiryType"
                field="enquiryType"
                errors={state.errors}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div>
              <label>
                <input type="checkbox" required /> I consent to the processing of my personal data.

              </label>
              <ValidationError
                prefix="Checkbox"
                field="checkbox"
                errors={state.errors}
              />
            </div>

            <button type="submit" className="btn-submit" disabled={state.submitting}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
