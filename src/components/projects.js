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

                <p className="project-category">Developed a custom WC (Word Count) tool in Golang, enabling users to count bytes, lines, words, and characters from files or input streams. The tool efficiently processes input via both file reading and stdin, demonstrating strong Go proficiency in file handling, concurrency, and stream processing. </p>
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
