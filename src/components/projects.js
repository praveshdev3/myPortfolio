import "../index.css";
import React from "react";
import { IonIcon } from "@ionic/react";
import {eyeOutline,logoGithub} from "ionicons/icons";
import projectImg from "../assets/project-1.png"
import project2Img from "../assets/wc.webp"

function Projects({isActive}) {
  return (
    <article className={isActive ? "portfolio active" : 'portfolio'}  data-page="portfolio">

        <header>
          <h2 className="h2 article-title">Projects</h2>
        </header>

        <section className="projects">

          <ul className="project-list">

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/praveshdev3/myPortfolio" target="_blank">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline}></IonIcon>
                  </div>

                  <img src={projectImg} alt="Portfolio" loading="lazy"/>
                </figure>

                <h3 className="project-title">My Portfolio
                <IonIcon icon={logoGithub} style={{float:"right"}} onClick={()=>{window.open("https://github.com/praveshdev3/myPortfolio","_blank")}}></IonIcon>
                </h3>

                <p className="project-category">Portfolio Website showcasing my skills, work experience and projects</p>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    <p style={{borderRadius: "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>React</p>
                    <p style={{borderRadius: "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>Javascript</p>
                    <p style={{borderRadius: "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>HTML</p>
                    <p style={{borderRadius: "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>CSS</p>
                </div>
              </a>
            </li>

             <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/praveshdev3/wc-go" target="_blank">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline}></IonIcon>
                  </div>

                  <img src={project2Img} alt="WcGO" loading="lazy"/>
                </figure>

                <h3 className="project-title">WcGo
                <IonIcon icon={logoGithub} style={{float:"right"}} onClick={()=>{window.open("https://github.com/praveshdev3/wc-go","_blank")}}></IonIcon>
                </h3>

                <p className="project-category">Wc Unix Utility command to count number of words,chars,bytes in a file</p>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    <p style={{borderRadius: "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>Go</p>
                    <p style={{borderRadius: "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>Linux</p>
                </div>
              </a>
            </li>

          </ul>

        </section>

      </article>
  );
}

export default Projects;
