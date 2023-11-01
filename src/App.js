import "./index.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import About from "./components/about";
import React from "react";

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
         { page === "about" ? <About /> : null}
        </div>
      </main>
    </>
  );
}

export default App;
