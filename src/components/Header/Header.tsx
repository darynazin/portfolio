import { useEffect, useState, useRef } from "react"
import "./Header.scss"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const topRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { root: null, rootMargin: "0px", threshold: 1.0 }
    )

    if (topRef.current) observer.observe(topRef.current)
    return () => {
      if (topRef.current) observer.unobserve(topRef.current)
    }
  }, [])

  return (
    <>
      <div ref={topRef} style={{ height: "1px" }} />

      <nav className={scrolled ? "nav-container scrolled" : "nav-container"}>
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar ${menuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
