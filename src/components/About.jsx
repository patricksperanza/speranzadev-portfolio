import React from "react"
import "./About.css"

const About = () => {
  return (
    <div id="about" className="about">
      <header className="about-header">
        <h2 className="about-header-text">ABOUT ME</h2>
        <div className="about-header-line"></div>
      </header>
      <main className="main">
        <div className="main-text">
          <div className="main-about">
            <h3 className="main-heading">
              I'm <span className="green-text">Patrick Speranza,</span> a Web
              Developer
            </h3>
            <div className="main-paragraphs">
              <p className="main-paragraph">
                Hello, and welcome to my portfolio site! My name is Patrick, and
                I am a web developer based in Northwest Indiana, just outside of
                Chicago. I am passionate about building responsive and
                user-friendly web applications using technologies such as HTML,
                CSS, JavaScript, and React.
              </p>
              <p className="main-paragraph">
                Take a look at my latest projects below, and contact me to get
                started on your own project. Thank you for taking the time to
                visit my site. I look forward to working with you soon!
              </p>
            </div>
          </div>
        </div>
        <div className="main-contact">
          <div className="main-contact-entry">
            <h6 className="main-contact-key">Name: </h6>
            <p className="main-contact-value">Patrick Speranza</p>
          </div>
          <div className="main-contact-entry">
            <h6 className="main-contact-key">Email: </h6>
            <a href="#contact">
              <p className="main-contact-value green-text">
                patrick.m.speranza@gmail.com
              </p>
            </a>
          </div>

          <div className="main-contact-entry">
            <h6 className="main-contact-key">Age:</h6>
            <p className="main-contact-value">32</p>
          </div>
          <div className="main-contact-entry">
            <h6 className="main-contact-key">From: </h6>
            <p className="main-contact-value">Munster, Indiana</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
