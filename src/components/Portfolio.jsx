import "./Portfolio.css";
import Project from "./Project";
import piano from "../assets/piano.svg";
import flashcards from "../assets/flashcards.svg";
import recorder from "../assets/recorder.svg";
import game from "../assets/game.svg";
import keynotes from "../assets/keynotes.svg";
import bracketology from "../assets/bracketology.svg";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <header className="portfolio-header">
        <h2 className="portfolio-header-text">MY PROJECTS</h2>
        <div className="portfolio-header-line"></div>
      </header>
      <main className="portfolio-main">
        <Project
          imgSrc={keynotes}
          link="/keynotes/#portfolio"
          description="A Full Stack web application for private lessons teachers and students. Built with React, TypeScript, Express, and MySQL."
        />
        <Project
          imgSrc={flashcards}
          link="/flashcards/#portfolio"
          description={
            "A Full Stack study application. Built with Next JS, TypeScript, Tailwind, and MongoDB."
          }
        />
        <Project
          imgSrc={recorder}
          link="/recorder/#portfolio"
          description={
            "A Front End web application built with React for the Elliot Elementary music classroom."
          }
        />
        <Project
          imgSrc={bracketology}
          link="/bracketology/#portfolio"
          description={
            "A Full Stack web application created for a new Bracketology organization. Built with Next JS, Tailwind, and Mongo DB."
          }
        />
        <Project
          imgSrc={piano}
          link="/piano/#portfolio"
          description={
            "A Front End web application that helps children learn how to play their first songs on the piano. Built with React."
          }
        />
        <Project
          imgSrc={game}
          link="/game/#portfolio"
          description={
            "A clone of the Rawg.io gaming website. Built with TypeScript and React."
          }
        />
      </main>
    </div>
  );
};

export default Portfolio;
