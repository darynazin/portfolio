import "./Cascade.scss"

function Cascade({images}: {images: string[]}) {
  return (
    <div className="container">
        <div className="photo-card card1">
            <img src={images[0]} alt="slide 1" />
        </div>
        <div className="photo-card card2">
          <img src={images[1]} alt="slide 2" />
        </div>
        <div className="photo-card card3">
          <img src={images[2]} alt="slide 3" />
        </div>
    </div>
  )
}

export default Cascade