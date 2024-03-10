import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Prevent scrolling when the menu is open
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  const currentPage = location.pathname;

  return (
    <nav
      className="flex justify-between items-center mt-0 p-5 lg:text-sm bg-[#0A0A0A] my-8 sticky top-0 z-50
      "
      // sm:bg-orange-400 md:bg-green-600 lg:bg-pink-500 xl:bg-purple-600 2xl:bg-red-600
    >
      {location.pathname === "/" ? (
        <ScrollLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="font-[Heading] lg:text-3xl mt-1 2xl:text-4xl lg:ml-14 cursor-pointer hover:text-[#D3E97A] max-lg:text-2xl">
            Rohit SINGH
          </div>
        </ScrollLink>
      ) : (
        <RouterLink to={"/"}>
          <div className="font-[Heading] lg:text-2xl lg:ml-14 2xl:text-4xl cursor-pointer hover:text-[#D3E97A] max-lg:text-2xl">
            Rohit SINGH
          </div>
        </RouterLink>
      )}
      {/* Hamburger Icon */}
      <div className="lg:hidden ms-auto">
        <button
          onClick={() => setShowMenu(!showMenu)}
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
          {currentPage === "/" && (
            <>
              <ScrollLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer rounded-2xl border-2 border-[#0A0A0A] hover:border-[#D3E97A] p-1 px-3 2xl:text-[22px] hover:font-bold transition duration-200">
                  Home
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer rounded-2xl border-2 border-[#0A0A0A] hover:border-[#D3E97A] p-1 px-3 hover:font-bold 2xl:text-[22px] transition duration-200">
                  Work
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="capabilities"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer rounded-2xl border-2 border-[#0A0A0A] hover:border-[#D3E97A] p-1 px-3 hover:font-bold 2xl:text-[22px] transition duration-200">
                  Capabilities
                </li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <li className="cursor-pointer rounded-2xl border-2 border-[#0A0A0A] hover:border-[#D3E97A] p-1 px-3 hover:font-bold 2xl:text-[22px] transition duration-200">
                  Contact
                </li>
              </ScrollLink>
              <a href="./src/assets/Resume/resume.pdf" download="Rohit-resume">
                <li className="cursor-pointer border border-[#D3E97A] transition duration-200 p-1 font-[Heading1] font-bold px-4 rounded-2xl 2xl:text-[22px] text-black bg-[#D3E97A] hover:bg-[#191919] hover:text-white">
                  Resume
                </li>
              </a>
            </>
          )}
          {currentPage === "/projects" && (
            <RouterLink to={"/"}>
              <li className="cursor-pointer rounded-2xl border-2 border-[#0A0A0A] hover:border-[#D3E97A] p-1 px-3 hover:font-bold 2xl:text-[22px] transition duration-200">
                Home
              </li>
            </RouterLink>
          )}
        </ul>
      </div>
      {/* Hamburger Menu - Small Screen */}
      {showMenu && (
        <div className="absolute top-16 left-0 bg-[#0A0A0A] text-center w-screen h-screen text-lg p-4 rounded-lg shadow-lg lg:hidden">
          <ul className="text-white text-2xl font-[Heading1] font-bold">
            {currentPage === "/" && (
              <>
                <ScrollLink
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  <li className="mb-10 mt-10 cursor-pointer">Home</li>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  <li className="mb-10 cursor-pointer">Work</li>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="capabilities"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  <li className="mb-10 cursor-pointer">Capabilities</li>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  <li className="mb-10 cursor-pointer">Contact</li>
                </ScrollLink>
                <a
                  href="./src/assets/Resume/resume.pdf"
                  download="Rohit-resume"
                  onClick={() => setShowMenu(false)}
                >
                  <li className="cursor-pointer">Resume</li>
                </a>
                <li className="mt-56 italic text-lg font-light text-[#d3e97a]">
                  Easily navigate through the portfolio.
                </li>
                <li className="text-base mt-5 font-light ml-44">
                  <img src="./src/assets/Images/icon.svg" alt="Logo" />
                </li>
              </>
            )}
            {currentPage === "/projects" && (
              <RouterLink to={"/"} onClick={() => setShowMenu(false)}>
                <li className="mb-10 mt-10 cursor-pointer">Home</li>
              </RouterLink>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
