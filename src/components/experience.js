import "../index.css";
import React from "react";
import { IonIcon } from "@ionic/react";
import {bookOutline} from "ionicons/icons";

function Experience({isActive}) {
  return (
    <article className={isActive ? "resume active" : 'resume'} data-page="resume">

        <header>
          <h2 className="h2 article-title">Experience</h2>
        </header>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
                <IonIcon icon={bookOutline}></IonIcon>
            </div>

            <h3 className="h3">Work Background</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h3 timeline-item-title">Backend Developer@<a href="https://tykeinvest.com/" target="_blank" style={{display:"inline", color: "#1fd9ed"}}>Tyke</a></h4>

              <span>Mar 2022 — Present</span>

              <p className="timeline-text">
              Designed and led the P2P investor flow as a dedicated microservice in Golang, leveraging gRPC for internal service communication and REST APIs for NBFC integrations. Utilized goroutines for concurrent processing, context for managing request lifecycles, and implemented structured logging, retry logic, and error handling to ensure reliable and seamless investment operations. 
 Implemented secure authentication and authorization, using HTTP cookies, JWT tokens, and custom auth middleware. Integrated Redis and AWS Cognito to enhance session management and identity control.
Collaborated in the successful migration of legacy NodeJS backend code to Go lang, resulting in a substantial reduction 50% in memory usages and api response time
Spearheaded the KYC flow, integrating third-party providers via REST. Designed secure data models using PostgreSQL for relational data and MongoDB for unstructured vendor responses, resulting in a 50% reduction in user onboarding time while maintaining compliance and scalability.
Architected a microservice for Signing flow, integrating third party vendors, handling asynchronous workflows using RabbitMQ, AWS Lambda and CloudWatch scheduled events (Crons), leading to 30% improvement process automation.
Integrated escrow and in-app wallet flows, building full payment pipelines from scratch using Juspay, Tazapay, Cashfree SDKs, with tight validation and transactional safety.
              </p>

            </li>

            <li className="timeline-item">

                <h4 className="h3 timeline-item-title">Software Developer@<a href="https://www.surveysensum.com/" target="_blank" style={{display:"inline", color: "#0052CC"}}>NeuroSensum</a></h4>


              <span>Jun 2021 — Feb 2022</span>

              <p className="timeline-text">
              Led the integration of an Outlook Add-In using Microsoft Open API, enabling seamless embedding of surveys directly within email clients. This enhancement improved survey reach and visibility for 40% of active clients, significantly boosting engagement and response rates.
              Managed the Payments Module, integrating with Stripe, and optimized the process to reduce payment failures by 10%.
              </p>

            </li>

            <li className="timeline-item">

                <h4 className="h3 timeline-item-title">Software Developer Intern@<a href="https://www.surveysensum.com/" target="_blank" style={{display:"inline", color: "#0052CC"}}>NeuroSensum</a></h4>


              <span>Dec 2020 — Jun 2021</span>

              <p className="timeline-text">
              Integrated a third-party vendor and optimized the data processing engine to handle large datasets in real time, significantly reducing processing time and improving system throughput. 
Contributed to the text analytics module, enabling faster insights extraction and enhancing overall response time for high-volume workloads.
              </p>

            </li>

          </ol>

        </section>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
               <IonIcon icon={bookOutline}></IonIcon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Chitkara University</h4>

              <span>2017 — 2021</span>

              <p className="timeline-text">
                Bachelors in Engineering (CSE)
              </p>

            </li>

          </ol>

        </section>

      </article>
  );
}

export default Experience;
