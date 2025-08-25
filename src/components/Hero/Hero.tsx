import "./Hero.scss"
import DarynaPhoto from "../../assets/daryna.png"

function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-text">

        <h1 className="hero-title">Hello, I'm Daryna</h1>
        <p className="hero-description">
          I'm a passionate software developer with a love for creating innovative solutions.
          Let's build something amazing together!
        </p>

      </div>
      <div className="hero-image">
        <img src={DarynaPhoto} alt="Profile" />
      </div>
    </div>
  )
}

export default Hero