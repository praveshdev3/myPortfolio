import "../index.css";
import React from "react";

function Navbar({onPageChange}) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className="navbar-link  active" data-nav-link onClick={() => {onPageChange("about")}}>
            About
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link onClick={() => {onPageChange("experience")}}>
            Experience
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link onClick={() => {onPageChange("projects")}}>
            Projects
          </button>
        </li>

        <li className="navbar-item">
          <button className="navbar-link" data-nav-link onClick={() => {onPageChange("contact")}}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
