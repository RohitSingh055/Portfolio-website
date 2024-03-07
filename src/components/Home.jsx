import React from "react";

const Home = () => {
  return (
    <div id="home" className="flex justify-between my-12 h-screen -mb-20 ">
      <div className="mt-20 w-[500px] h-[400px]">
        <p className="font-[Heading] text-7xl">
          HI, I AM <br />
          ROHIT SINGH.
        </p>
        <p className="font-[Body] text-sm">
          A Software developer passionate about creating user-friendly websites
          and sometimes Android applications, with a keen interest in machine
          learning.
        </p>
        <div className="flex mt-11">
          <a href="mailto:rohitrsn055@gmail.com">
            <button className="flex items-center justify-around w-32 font-body font-bold text-xs bg-[#D3E97A] hover:bg-[#191919] hover:text-white text-black rounded-3xl h-9  ps-2">
              CONTACT ME
              <img
                className="w-6 ml-1 rounded-3xl"
                src="./src/assets/Images/button_arrow.svg"
                alt="arrow"
              />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/rohitsingh05/" target="_blank">
            <button className="ml-6 rounded-full">
              <img
                className="w-9 h-9 rounded-full"
                src="./src/assets/Images/linkedin.svg"
                alt="LinkedIN"
              />
            </button>
          </a>
          <a href="https://github.com/RohitSingh055" target="_blank">
            <button className="ml-6">
              <img
                className="rounded-full w-9 h-9"
                src="./src/assets/Images/github.svg"
                alt="GitHub"
              />
            </button>
          </a>
        </div>
      </div>
      <div>
        <img
          className="bg-[#191919] pb-0 p-5 border hover:border-4 rounded-2xl mt-10 mr-24 "
          src="./src/assets/Images/profile.png"
          alt="Profile Image"
          width={300}
        />
      </div>
    </div>
  );
};

export default Home;
