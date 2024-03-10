import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-4/5 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
