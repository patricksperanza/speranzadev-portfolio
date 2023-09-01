import { useRef } from "react"
import emailjs from "@emailjs/browser"

import "./Contact.css"
import { AiFillGithub, AiFillPhone, AiFillYoutube } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { RiTwitterFill, RiLinkedinFill } from "react-icons/ri"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    form.current.reset()
  }
  return (
    <div id="contact" className="contact">
      <header className="contact-header">
        <h2 className="contact-header-text">CONTACT</h2>
        <div className="contact-header-line"></div>
      </header>
      <main className="contact-main">
        <div className="contact-main-message">
          <h3>Send me a message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className="contact-main-input"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="contact-main-input"
              type="text"
              placeholder="Email"
              name="email"
            />
            <textarea
              placeholder="Your message..."
              className="contact-main-textarea"
              cols="30"
              rows="10"
              name="message"
            ></textarea>
            <button className="contact-main-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-main-info">
          <h5>Get In Touch</h5>
          <div className="phone">
            <AiFillPhone className="icon" />
            <span>(219)682-5493</span>
          </div>
          <div className="email">
            <MdEmail className="icon" />
            <span>patrick.m.speranza@gmail.com</span>
          </div>
          <div className="contacts-social">
            <h5>Follow Me</h5>
            <div className="contacts-social-links">
              <a href="https://github.com/patricksperanza" target="_blank">
                <AiFillGithub className="contacts-social-link" />
              </a>
              <a href="https://twitter.com/PatrickSperanza" target="_blank">
                <RiTwitterFill className="contacts-social-link" />
              </a>
              <a
                href="https://www.linkedin.com/in/patrick-speranza-893621273/"
                target="_blank"
              >
                <RiLinkedinFill className="contacts-social-link" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCZGOwC4UW6078N6IKkNmLZA"
                target="_blank"
              >
                <AiFillYoutube className="contacts-social-link" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
