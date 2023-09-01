import { projectData } from "./projectData";
import ProjectPage from "../components/ProjectPage";

const Bracketology = () => {
  const data = projectData.bracketology;
  return (
    <ProjectPage
      title={data.title}
      image={data.image}
      link={data.link}
      info={data.info}
      tech={data.tech}
      repo={data.repo}
      date={data.date}
    />
  );
};

export default Bracketology;
