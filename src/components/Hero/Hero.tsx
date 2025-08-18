import "./Hero.scss"
import DarynaPhoto from "../../assets/daryna.jpg"

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
      </div>
      <div className="hero-image">
        <img src={DarynaPhoto} alt="Profile" />
      </div>
    </div>
  )
}

export default Hero