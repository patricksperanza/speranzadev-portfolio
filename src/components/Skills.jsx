import "./Skills.css"
import SkillCard from "./SkillCard"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.svg"
import typescript from "../assets/typescript.svg"
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <header className="skills-header">
        <h2 className="skills-header-text">MY SKILLS</h2>
        <div className="skills-header-line"></div>
      </header>
      <main className="skills-main">
        <div className="skills-main-row">
          <SkillCard imgSrc={html} label="HTML" />
          <SkillCard imgSrc={css} label="CSS" />
          <SkillCard imgSrc={javascript} label="JavaScript" />
        </div>
        <div className="skills-main-row">
          <SkillCard imgSrc={typescript} label="TypeScript" />
          <SkillCard imgSrc={react} label="React JS" />
          <SkillCard imgSrc={nodejs} label=" Node JS" />
        </div>
      </main>
    </div>
  )
}

export default Skills
