import { useState } from "react";
import './Footer.scss';

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer className="footer">
       
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <button className="footer-link" onClick={() => setShowPrivacy(true)}>
            Privacy Policy
          </button>
     
      </footer>

      {showPrivacy && (
        <div className="modal-overlay" onClick={() => setShowPrivacy(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowPrivacy(false)}>×</button>
            <h1>Privacy Policy</h1>

            <div className="privacy-section">
              <h2>1. Information I Collect</h2>
              <p>When you use the contact form on my website, I may collect the following personal information:</p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Any message or information you provide</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>2. How I Use Your Information</h2>
              <p>The personal information you provide is used only for the purpose of:</p>
              <ul>
                <li>Responding to your inquiries or messages</li>
                <li>Improving my portfolio website</li>
              </ul>
              <p>I do not sell, rent, or share your personal information with third parties, except as required by law.</p>
            </div>

            <div className="privacy-section">
              <h2>3. Data Storage and Security</h2>
              <p>Your information is stored securely and only for as long as necessary to respond to your inquiries. I take reasonable precautions to protect your data against unauthorized access, alteration, or disclosure.</p>
            </div>

            <div className="privacy-section">
              <h2>4. Changes to this Privacy Policy</h2>
              <p>I may update this Privacy Policy from time to time. The updated version will be posted on this page with the “Effective Date” updated.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
