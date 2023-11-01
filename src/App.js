import "./index.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import About from "./components/about";

function App() {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <About />
        </div>
      </main>
    </>
  );
}

export default App;
