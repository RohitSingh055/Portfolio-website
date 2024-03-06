import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between mt-0 p-5 text-sm my-8 sticky top-0">
      <div className="font-[Heading] text-2xl ml-14 cursor-pointer">Rohit SINGH</div>
      <div>
        <ul className="flex gap-10  text-base font-[Heading1] mr-14">
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
