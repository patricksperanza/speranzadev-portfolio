import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div className="root">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Outlet />
    </div>
  )
}

export default Root
