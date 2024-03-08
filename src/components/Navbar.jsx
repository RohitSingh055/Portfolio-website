import React, { useState,useRef,useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import gif from "../assets/Images/GIF/push.gif";
import gif2 from "../assets/Images/GIF/warn.gif";

const Navbar = () => {
  const [showGif, setShowGif] = useState(false);
  const [gifIndex, setGifIndex] = useState(0); // Initial GIF index
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setShowGif(true);

    setGifIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));

    setTimeout(() => {
      setShowGif(false);
    }, 3000);
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu]);

  // Determine which GIF to display based on the gifIndex state
  const currentGif = gifIndex === 0 ? gif2 : gif;

  return (
    <nav
      className="flex justify-between items-center mt-0 p-5 lg:text-sm bg-[#0A0A0A] my-8 sticky top-0 z-50
    sm:bg-orange-400 md:bg-green-600 lg:bg-pink-500 xl:bg-purple-600
    "
    >
      <div
        onClick={handleClick}
        className="font-[Heading] lg:text-2xl lg:ml-14 cursor-pointer hover:text-[#D3E97A] hover:border-b-2 hover: border-[#D3E97A] max-lg:text-2xl"
      >
        Rohit SINGH
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden ms-auto">
        <button
          onClick={handleMenuClick}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className="hidden lg:block ms-auto ">
        <ul className="flex gap-5 lg:text-base font-[Heading1] items-center ml-16 lg:mr-11">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="cursor-pointer rounded-2xl hover:bg-[#D3E97A] hover:text-black p-1 px-3 hover:font-bold transition duration-200">
              Home
            </li>
          </Link>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="cursor-pointer rounded-2xl hover:bg-[#D3E97A] hover:text-black p-1 px-3 hover:font-bold transition duration-200">
              Work
            </li>
          </Link>
          <Link
            activeClass="active"
            to="capabilities"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="cursor-pointer rounded-2xl hover:bg-[#D3E97A] hover:text-black p-1 px-3 hover:font-bold transition duration-200">
              Capabilities
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="cursor-pointer rounded-2xl hover:bg-[#D3E97A] hover:text-black p-1 px-3 hover:font-bold transition duration-200">
              Contact
            </li>
          </Link>
          <a href="./src/assets/Resume/resume.pdf" download="Rohit-resume">
            <li className="cursor-pointer border border-[#D3E97A] transition duration-200 p-1 font-[Heading1] font-bold px-4 rounded-2xl text-black bg-[#D3E97A] hover:bg-[#191919] hover:text-white">
              Resume
            </li>
          </a>
        </ul>
      </div>
      {/* Hamburger Menu - Small Screen */}
      {showMenu && (
        <div
        ref={menuRef}
          className="absolute top-20 right-5 bg-[#d2dea1] w-2/4 text-center text-lg p-4 rounded-lg shadow-lg lg:hidden"
          style={{ width: "50vw", transition: "width 0.5s ease-in-out" }}
        >
          <ul className="text-black font-[Heading1] font-bold">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              <li className="mb-3 cursor-pointer">Home</li>
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              <li className="mb-3 cursor-pointer">Work</li>
            </Link>
            <Link
              activeClass="active"
              to="capabilities"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              <li className="mb-3 cursor-pointer">Capabilities</li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(false)}
            >
              <li className="mb-3 cursor-pointer">Contact</li>
            </Link>
            <a
              href="./src/assets/Resume/resume.pdf"
              download="Rohit-resume"
              onClick={() => setShowMenu(false)}
            >
              <li className="cursor-pointer">Resume</li>
            </a>
          </ul>
        </div>
      )}
      <div>
        {showGif && (
          <img
            className="absolute left-11 z-10 lg:h-36 rounded-3xl"
            src={currentGif}
            alt="GIF"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
