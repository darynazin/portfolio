import "./Hero.scss"
import DarynaPhoto from "../../assets/images/daryna.png"
import CV from "../../assets/documents/Daryna_Zinchenko_CV.pdf"

function Hero() {
  return (
    <section id="home" className="hero-container">
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
            <h1 className="hero-title">Daryna Zinchenko</h1>
            <p className="hero-description">
              I am a motivated and skilled web developer passionate about creating accessible, high-quality, and user-friendly solutions. I strive for clean code and efficient results, and ready to contribute my knowledge and skills to developing innovative projects.</p>
            <div className="hero-buttons">
              <a href={CV} download="Daryna_Zinchenko_CV">
                <button className="hero-btn cv">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;