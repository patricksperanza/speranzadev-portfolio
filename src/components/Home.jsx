import "./Home.css"

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-text">
        <p className="home-text-primary">Patrick Speranza</p>
        <p className="home-text-tertiary">A web developer</p>
        <p className="home-text-tertiary">based in Northwest Indiana</p>

        <a href="#contact">
          <button class="home-text-btn">Hire Me</button>
        </a>
      </div>
    </div>
  )
}

export default Home
