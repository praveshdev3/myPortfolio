import "../index.css";
import React from "react";

function Navbar({onPageChange}) {
  const [page, setPage] = React.useState("about");
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button className={page === "about"? "navbar-link  active" : "navbar-link"} data-nav-link onClick={() => {
            setPage("about")
            onPageChange("about")}}>
            About
          </button>
        </li>

        <li className="navbar-item">
          <button className={page === "experience"? "navbar-link  active" : "navbar-link"} data-nav-link onClick={() => {
            setPage("experience")
            onPageChange("experience")}}>
            Experience
          </button>
        </li>

        <li className="navbar-item">
          <button className={page === "projects"? "navbar-link  active" : "navbar-link"} data-nav-link onClick={() => {
            setPage("projects")
            onPageChange("projects")}}>
            Projects
          </button>
        </li>

        <li className="navbar-item">
          <button className={page === "resume"? "navbar-link  active" : "navbar-link"} data-nav-link onClick={() => {
            setPage("resume")
            onPageChange("resume")}}>
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
