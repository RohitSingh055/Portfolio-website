import React from "react";

const Icons = () => {
  return (
    <div>
      <div className="flex lg:mt-14 max-lg:mt-7 max-lg:mb-10 max-lg:justify-center max-lg:gap-5">
        <a href="https://www.linkedin.com/in/rohitsingh05/" target="_blank">
          <img
            className="mr-5 size-7 2xl:size-9 cursor-pointer hover:scale-125"
            src="./src/assets/Images/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/RohitSingh055" target="_blank">
          <img
            className="mr-5 size-7 2xl:size-9 cursor-pointer hover:scale-125"
            src="./src/assets/Images/github.svg"
            alt="Github"
          />
        </a>
        <a href="https://twitter.com/ImRoh05" target="_blank">
          <img
            className="mr-5 size-7 2xl:size-9 cursor-pointer hover:scale-125"
            src="./src/assets/Images/x.svg"
            alt="X"
          />
        </a>
        <a href="https://www.instagram.com/rohit.rsn_/" target="_blank">
          <img
            className="mr-5 size-7 2xl:size-9 cursor-pointer hover:scale-125"
            src="./src/assets/Images/insta.svg"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Icons;
