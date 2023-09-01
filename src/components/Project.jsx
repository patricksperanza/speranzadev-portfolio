import "./Project.css";
import { HashLink as Link } from "react-router-hash-link";

const Project = ({ imgSrc, link, description }) => {
  return (
    <div className="project">
      <Link to={link}>
        <div className="project-container">
          <img src={imgSrc} alt="" />
        </div>
      </Link>
      <p className="project-description">{description}</p>
      <div className="project-bottom"></div>
    </div>
  );
};

export default Project;
