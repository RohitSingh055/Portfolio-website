import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Cards from "./components/Cards";
function App() {
  return (
    <>
      <Navbar />
      <main className="w-4/5 mx-auto">
        <Home />
        <Project />
        <Footer />
      </main>
    </>
  );
}

export default App;
