import React from "react"
import "./Social.css"
import { RiTwitterFill, RiLinkedinFill } from "react-icons/ri"
import { AiFillGithub, AiFillYoutube } from "react-icons/ai"

const Social = () => {
  return (
    <div className="social">
      <a href="https://github.com/patricksperanza" target="_blank">
        <AiFillGithub className="social-link" />
      </a>
      <a href="https://twitter.com/PatrickSperanza" target="_blank">
        <RiTwitterFill className="social-link" />
      </a>
      <a
        href="https://www.linkedin.com/in/patrick-speranza-893621273/"
        target="_blank"
      >
        <RiLinkedinFill className="social-link" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCZGOwC4UW6078N6IKkNmLZA"
        target="_blank"
      >
        <AiFillYoutube className="social-link" />
      </a>
    </div>
  )
}

export default Social
