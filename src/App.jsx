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
        <Home />
        <Project />
        <Capabilities />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}

export default App;
