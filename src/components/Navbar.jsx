import "./Navbar.css"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  return (
    <nav className="navbar">
      <FaBars className="bars" onClick={() => setShowNavbar(!showNavbar)} />
      <ul className={showNavbar ? "active" : ""}>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio</li>
        </a>
        <a href="https://medium.com/@patrick.m.speranza" target="_blank">
          <li>Blog</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar
