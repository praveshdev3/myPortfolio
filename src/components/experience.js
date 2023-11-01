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

              <h4 className="h3 timeline-item-title">Full Stack Developer@<a href="https://tykeinvest.com/" target="_blank" style={{display:"inline", color: "#1fd9ed"}}>Tyke</a></h4>

              <span>Mar 2022 — Present</span>

              <p className="timeline-text">
                Worked on authorization and authentication module, used http cookies, JWT tokens and auth middlewares. Got a chance to work with Redis and AWS Cognito service. Solely handled KYC flow, integrated third party vendors, stored data in mongoDb and postgresQL, wrote unit test cases, used GORM for migrations, worked on microservice architecture. Worked with escrow and in-app wallets and integrations of many payment gateways such as juspay, stripe, tazapay etc. Solely handled Signing flow, integrated third party vendors, stored data in mongoDb and postgresQL, handled webhooks, used AWS Lambdas and Crons for callbacks, and stored documents on AWS S3. Created an editor to customize HTML according to needs and PDF previewer using open source libraries and react. Created a project to convert HTML to pdf using GoLang Created an internal dashboard for admins using react and nodejs assisting them in their daily customer queries.
              </p>

            </li>

            <li className="timeline-item">

                <h4 className="h3 timeline-item-title">Full Stack Developer@<a href="https://www.surveysensum.com/" target="_blank" style={{display:"inline", color: "#0052CC"}}>NeuroSensum</a></h4>


              <span>Jun 2021 — Feb 2022</span>

              <p className="timeline-text">
                Worked on Outlook Add-In to integrate survey in emails using Microsoft open API’s and javascript Handled Payments module and integrations with Stripe using C# and Angular on frontend Created many Dashboards for clients showing various insights from survey data using Angular Worked on responsive survey collection software, having simple to complex dashboards
              </p>

            </li>

            <li className="timeline-item">

                <h4 className="h3 timeline-item-title">Full Stack Developer Intern@<a href="https://www.surveysensum.com/" target="_blank" style={{display:"inline", color: "#0052CC"}}>NeuroSensum</a></h4>


              <span>Dec 2020 — Jun 2021</span>

              <p className="timeline-text">
                Solely did integration with third party vendors and migrated entire data. Got a chance to work on data processing engine and text analytics module capable of processing huge amount of data in matter of seconds
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
