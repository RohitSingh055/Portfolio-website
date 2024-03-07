import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import gif from "../assets/Images/GIF/push.gif";
import gif2 from "../assets/Images/GIF/warn.gif";

const Navbar = () => {
  const [showGif, setShowGif] = useState(false);
  const [gifIndex, setGifIndex] = useState(0); // Initial GIF index

  const handleClick = () => {
    setShowGif(true);

    // Toggle between GIFs on each click
    setGifIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));

    setTimeout(() => {
      setShowGif(false);
    }, 3000); // Hide the GIF after 3 seconds
  };

  // Determine which GIF to display based on the gifIndex state
  const currentGif = gifIndex === 0 ? gif2 : gif;

  return (
    <nav className="flex justify-between items-center mt-0 p-5 text-sm bg-[#0A0A0A] my-8 sticky top-0 z-50">
      <div
        onClick={handleClick}
        className="font-[Heading] text-2xl ml-14 cursor-pointer hover:text-[#D3E97A] hover:border-b-2 hover: border-[#D3E97A]"
      >
        Rohit SINGH
      </div>
      <div>
        <ul className="flex gap-5  text-base font-[Heading1] items-center mr-11">
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
        {showGif && (
          <img
            className="absolute left-11 z-10 h-36 rounded-3xl"
            src={currentGif}
            alt="GIF"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
