import { useForm, ValidationError } from '@formspree/react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Contacts.scss"

function Contacts() {
  const [state, handleSubmit] = useForm('xldwrvnd');
  if (state.succeeded) {
    return <p>Your message was sent!</p>;
  }

  return (
    <section className="contact">
      <div className="contact__left">
        <h4 className="contact__subtitle">Contact</h4>
        <h2 className="contact__title">
          Let’s Build Something <span>Awesome</span> – Message Me!
        </h2>
        <p className="contact__description">
          I'd love to hear from you! Whether you have a project idea, need help
          with software development, or just want to connect and chat about
          tech, feel free to reach out.
        </p>

        <div className="contact__info">
          <div className="contact__info-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+491786549057">+491786549057</a>
          </div>
          <div className="contact__info-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:zinchenko.daryna@gmail.com">zinchenko.daryna@gmail.com</a>
          </div>
          <div className="contact__info-item">
            <i className="fas fa-map-marker-alt"></i>
            <a href='https://www.google.com/maps/search/?q=Schwarzenbach am Wald'
            target="_blank">Schwarzenbach am Wald, Germany</a>
          </div>
        </div>

        <div className="contact__socials">
          <a href="https://www.linkedin.com/in/daryna-zinchenko/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/darynazin"><i className="fab fa-github"></i></a>
          <a href="https://wa.me/+491786549057" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      <div className="contact__form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
           <div>
             <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="your name"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
           </div>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
              type="email"
              name="email"
              placeholder="e.g. example@gmai.com"
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
            <select
              name="enquiryType"
              required
            >
              <option value="">Select enquiry type</option>
              <option value="project">Project Idea</option>
              <option value="help">Need Help</option>
              <option value="collab">Collaboration</option>
              <option value="other">Other</option>
            </select>
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

          <button type="submit" className="btn-submit" disabled={state.submitting}>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts