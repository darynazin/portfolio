import "./Hero.scss"
import DarynaPhoto from "../../assets/images/daryna.png"
import CV from "../../assets/documents/Daryna_Zinchenko_CV.pdf"
import Certificate from "../../assets/documents/certificate_Daryna_Zinchenko.pdf"

function Hero() {
  return (

    <section id="home" className="hero-container">
      <div className="hero-left"></div>
      <div className="hero">
        <div className="hero-image-container">
          <div className="hero-image">
            <img src={DarynaPhoto} alt="Profile" />

          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/daryna-zinchenko/"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/darynazin"><i className="fab fa-github"></i></a>
            <a href="https://wa.me/+491786549057" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="hero-text">
          <div className="hero-text-content">
            <p className="hero-position">Web Developer</p>
            <h1 className="hero-title">Daryna Zinchenko</h1>
            <p className="hero-description">
              I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <div className="hero-buttons">
              <a href={CV} download="Daryna_Zinchenko_CV">
                <button className="hero-btn cv">Download CV</button>
              </a>
              <a href={Certificate} download="Daryna_Zinchenko_Certificate">
                <button className="hero-btn certificate">Download Docs</button>
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="hero-right"></div>
    </section>

  )
}

export default Hero;