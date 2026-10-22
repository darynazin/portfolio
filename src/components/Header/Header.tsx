import { useEffect, useState, useRef } from "react"
import { useLocation, Link } from "react-router-dom"
import "./Header.scss"

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const topRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const isHome = pathname === "/portfolio/"
  const isProject = pathname.startsWith("/portfolio/") && !isHome;

  useEffect(() => {
    const node = topRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { root: null, rootMargin: "0px", threshold: 1.0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <header>
      <div ref={topRef} style={{ height: "1px" }} />
      <nav className={`nav-container${scrolled ? ' scrolled' : ''}`}>
        {isHome && (
        <button
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ?
            <i className="fa-solid fa-xmark"></i> :
            <i className="fa-solid fa-bars"></i>
          }
        </button>
        )}
        {isProject && (
          <Link to="/portfolio/" className="burger back-link">Home
          </Link>
        )}
          <div className={`nav-wrapper${isProject ? " nav-wrapper--project" : ""}`}>
            <ul className={`navbar ${menuOpen ? "active" : ""}`}>
              {isHome && (
                <>
                  <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                  <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </>
              )}
              {isProject && (
                <li><Link to="/portfolio/" onClick={() => setMenuOpen(false)}>← Back to Home</Link></li>
              )}
            </ul>
          </div>
      
      </nav>
    </header>
  )
}

export default Header
