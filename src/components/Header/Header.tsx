import "./Header.scss"

function Header() {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Header