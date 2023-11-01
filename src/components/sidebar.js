import React from "react";
import { IonIcon } from "@ionic/react";
import imageContent from "../assets/dp.jpeg"
import {
  chevronDown,
  mailOutline,
  phonePortraitOutline,
  calendarOutline,
  locateOutline,
  logoGithub,
  logoLinkedin,
} from "ionicons/icons";

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={imageContent}
            alt="Pravesh Goyal"
             width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Pravesh Goyal">
            Pravesh Goyal
          </h1>

          <p className="title">Full Stack Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={()=>{
            const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
            const sidebar = document.querySelector("[data-sidebar]");
            elementToggleFunc(sidebar);
        }}>
          <span>Show Contacts</span>

          <IonIcon icon={chevronDown}></IonIcon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={mailOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:g.pravesh4135@gmail.com" className="contact-link">
                g.pravesh4135@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={phonePortraitOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+917009566315" className="contact-link">
                +91-7009566315
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={calendarOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">December 3, 1999</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IonIcon icon={locateOutline}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Gurgaon, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://github.com/praveshdev3"
              target="_blank"
              className="social-link"
            >
              <IonIcon className="socials-icons" icon={logoGithub}></IonIcon>
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/pravesh-goyal/"
              target="_blank"
              className="social-link"
            >
              <IonIcon className="socials-icons" icon={logoLinkedin}></IonIcon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
