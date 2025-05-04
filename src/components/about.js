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
        Experienced Backend Engineer with a proven track record of delivering scalable and reliable systems for high-impact applications. As the founding backend engineer at TykeInvest, I’ve played a key role in building and scaling production-grade systems serving 30,000+ active users. Skilled in Golang, Node.js, and cloud technologies, with 4 years of hands-on experience translating business requirements into efficient technical solutions. A strong team player passionate about launching new projects, optimizing backend performance, and continuously learning to stay current with evolving technologies and industry trends. 
        </p>
      </section>
      <section className="clients">
        <h3 className="h3 clients-title">Skills</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">  
            <img alt="go" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item">
            <img alt="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" height="100px" width="100px" />
          </li>

          <li className="clients-item">
            <img alt="mongodb" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item">  
            <img alt="postgresql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height="100px" width="100px" />
          </li>

          <li className="clients-item"> 
            <img alt="aws" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" height="100px" width="100px"  />
          </li>

          <li className="clients-item"> 
            <img alt="javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item"> 
            <img alt="git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" height="100px" width="100px"/>
          </li>

          <li className="clients-item">      
            <img alt="docker" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"  height="100px" width="100px"/>
          </li>
        </ul>
      </section>{" "}
    </article>
  );
}

export default About;
