import "./index.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import About from "./components/about";
import React from "react";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Resume from "./components/resume";

function App() {
  const [page, setPage] = React.useState("about");
  const handlePageChange = (page) => { 
    setPage(page);
  };
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar onPageChange = {handlePageChange}/>
          <About isActive = {page === "about"}/>
          <Experience isActive = {page === "experience"}/>
          <Projects isActive = {page === "projects"}/>
          <Resume isActive = {page === "resume"}/>
        </div>
      </main>
    </>
  );
}

export default App;
