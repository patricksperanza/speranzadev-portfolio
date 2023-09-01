import "./projectPage.css"
import { AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"

const ProjectPage = ({ title, image, link, info, tech, repo, date }) => {
  return (
    <div className="container">
      <div className="project-page">
        <header className="project-header">
          <div className="invisible"></div>
          <h1 className="project-title">{title}</h1>
          <Link to="/">
            <AiOutlineClose className="close" />
          </Link>
        </header>
        <main className="project-main">
          <div className="project-image-container">
            <a href={link} target="_blank">
              <img className="project-image" src={image} />
            </a>
          </div>
          <div className="project-text">
            <h4 className="project-info">Project Info:</h4>
            <p>{info}</p>
            <h4 className="project-details">Project Details:</h4>
            <ul>
              <li>Technologies: {tech}</li>

              <li>Created: {date}</li>
              <li>
                URL:{" "}
                <a className="green-text" href={link}>
                  {link}
                </a>
              </li>
              <li>
                Code:{" "}
                <a className="green-text" href={repo}>
                  {repo}
                </a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ProjectPage
