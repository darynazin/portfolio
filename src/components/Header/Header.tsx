import { useEffect, useState, useRef } from "react"
import clickSound from '../../assets/sounds/click.wav';
import "./Header.scss"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const topRef = useRef(null)

  const handleClick = () => {
    new Audio(clickSound).play();
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(([entry]) => {
      setScrolled(!entry.isIntersecting)
    }, options)

    if (topRef.current) observer.observe(topRef.current)

    return () => {
      if (topRef.current) observer.unobserve(topRef.current)
    }
  }, [])

  return (
    <>
      <div ref={topRef} style={{ height: "1px" }} />

      <nav >
        <ul className={scrolled ? "navbar scrolled" : "navbar"}>
          <li onClick={handleClick}><a href="#home">Home</a></li>
          <li onClick={handleClick}><a href="#experience">Experience</a></li>
          <li onClick={handleClick}><a href="#projects">Projects</a></li>
          <li onClick={handleClick}><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header;