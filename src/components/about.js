import "../index.css";
import React from "react";

function About({isActive}) {
  return (
    <article className={isActive ? "about active" : 'about'}  data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I am a seasoned full stack developer with a strong proficiency in
          GoLang, NodeJs and database management. With a track record of
          successfully delivering scalable and efficient web applications, I
          bring a comprehensive skill set to the table. My experience includes
          designing and implementing amazing frontend, robust APIs, optimizing
          database performance, and collaborating seamlessly with business
          teams. I am passionate about staying updated with the latest
          technologies and frameworks. With my problem-solving abilities and
          strong analytical skills, I am confident in my ability to contribute
          to the success of your projects and help create exceptional user
          experiences.
        </p>

        <p>
          Knowledgeable of backend and frontend development requirements.
          Handles any part of process with ease. Collaborative team player with
          excellent technical abilities offering 3+ years of related experience.
          Passionate about implementing and launching new projects. Ability to
          translate business requirements into technical solutions. Love to
          constantly learn and keeping up-to-date with the latest technologies
          and industry trends.
        </p>
      </section>
      <section className="clients">
        <h3 className="h3 clients-title">Skills</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" height="100px" width="100px" />
          </li>

          <li className="clients-item"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item">  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height="100px" width="100px" />
          </li>

          <li className="clients-item"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height="100px" width="100px"  />
          </li>

          <li className="clients-item"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item"> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item">    
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="100px" width="100px" />
          </li>

          <li className="clients-item">      
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"  height="100px" width="100px"/>
          </li>
        </ul>
      </section>{" "}
    </article>
  );
}

export default About;
