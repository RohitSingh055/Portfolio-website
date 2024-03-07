import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Capabilities from "./components/Capabilities";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-4/5 mx-auto">
        <div id="home">
          <Home />
        </div>
        <div id="work">
          <Project />
        </div>
        <div id="capabilities">
          <Capabilities />
        </div>
        <Certifications />
        <div id="contact">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
