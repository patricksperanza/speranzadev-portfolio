import { projectData } from "./projectData";
import ProjectPage from "../components/ProjectPage";

const Keynotes = () => {
  const data = projectData.keynotes;
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

export default Keynotes;
