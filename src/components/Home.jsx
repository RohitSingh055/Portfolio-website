import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row my-12 lg:h-screen lg:-mb-10 "
    >
      <div className="lg:mt-20 lg:w-6/12 lg:mr-16 ">
        <p className="font-[Heading] text-4xl lg:text-7xl">
          HI, I AM <br />
          ROHIT SINGH.
        </p>
        <p className="font-[Body] text-sm">
          A Software developer passionate about creating user-friendly websites
          and sometimes Android applications, with a keen interest in machine
          learning.
        </p>
        <div className="flex mt-14 w-full lg:mt-11 ">
          <a href="mailto:rohitrsn055@gmail.com">
            <button className="flex items-center transition duration-300 hover:scale-110 justify-around lg:w-32 font-body font-bold lg:text-xs bg-[#d3e97a] hover:bg-[#191919] hover:text-white text-black rounded-3xl h-9 ps-2">
              REACH OUT
              <img
                className="lg:h-3/4 max-lg:p-1 max-lg:h-3/4 ml-1 rounded-3xl"
                src="./src/assets/Images/button_arrow.svg"
                alt="arrow"
              />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/rohitsingh05/" target="_blank">
            <button className="ml-6 rounded-full">
              <img
                className="w-9 h-9 rounded-full transition duration-300 hover:scale-125"
                src="./src/assets/Images/linkedin.svg"
                alt="LinkedIN"
              />
            </button>
          </a>
          <a href="https://github.com/RohitSingh055" target="_blank">
            <button className="ml-6">
              <img
                className="rounded-full w-9 h-9 transition duration-300 hover:scale-125"
                src="./src/assets/Images/github.svg"
                alt="GitHub"
              />
            </button>
          </a>
        </div>
      </div>
      <div className="max-lg:flex max-lg:justify-center lg:text-center lg:mx-auto lg:ml-16">
        <img
          className="bg-[#191919] pb-0 p-5 border hover:border-4 rounded-2xl mt-10 lg:mr-24 "
          src="./src/assets/Images/profile.png"
          alt="Profile Image"
          width={300}
        />
      </div>
    </div>
  );
};

export default Home;
