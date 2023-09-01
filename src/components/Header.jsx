import Navbar from "./Navbar"
import Social from "./Social"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <a href="#home">
        <h3 className="header-name">Patrick</h3>
      </a>
      <Navbar />
      <Social />
    </div>
  )
}

export default Header
