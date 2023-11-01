import "../index.css";
import React from "react";
import { IonIcon } from "@ionic/react";
import {eyeOutline,logoGithub} from "ionicons/icons";
import projectImg from "../assets/project-1.png"
import project2Img from "../assets/wc.webp"

function Projects({isActive}) {
  return (
    <article class={isActive ? "portfolio active" : 'portfolio'}  data-page="portfolio">

        <header>
          <h2 class="h2 article-title">Projects</h2>
        </header>

        <section class="projects">

          <ul class="project-list">

            <li class="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/praveshdev3/myPortfolio" target="_blank">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <IonIcon icon={eyeOutline}></IonIcon>
                  </div>

                  <img src={projectImg} alt="Portfolio" loading="lazy"/>
                </figure>

                <h3 class="project-title">My Portfolio
                 <a href="https://github.com/praveshdev3/myPortfolio" target="_blank">
                <IonIcon icon={logoGithub} style={{float:"right"}}></IonIcon>
                </a>
                </h3>

                <p class="project-category">Portfolio Website showcasing my skills, work experience and projects</p>
                <div style={{display:"flex", "flex-wrap":"wrap"}}>
                    <p style={{"border-radius": "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>React</p>
                    <p style={{"border-radius": "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>Javascript</p>
                    <p style={{"border-radius": "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>HTML</p>
                    <p style={{"border-radius": "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>CSS</p>
                </div>
              </a>
            </li>

             <li class="project-item  active" data-filter-item data-category="web development">
              <a href="https://github.com/praveshdev3/wc-go" target="_blank">

                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <IonIcon icon={eyeOutline}></IonIcon>
                  </div>

                  <img src={project2Img} alt="WcGO" loading="lazy"/>
                </figure>

                <h3 class="project-title">WcGo
                 <a href="https://github.com/praveshdev3/wc-go" target="_blank">
                <IonIcon icon={logoGithub} style={{float:"right"}}></IonIcon>
                </a>
                </h3>

                <p class="project-category">Wc Unix Utility command to count number of words,chars,bytes in a file</p>
                <div style={{display:"flex", "flex-wrap":"wrap"}}>
                    <p style={{"border-radius": "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>Go</p>
                    <p style={{"border-radius": "0.5rem", color:"hsl(45, 54%, 58%)", fontSize: "13px", margin: "6px"}}>Linux</p>
                </div>
              </a>
            </li>

          </ul>

        </section>

      </article>
  );
}

export default Projects;
