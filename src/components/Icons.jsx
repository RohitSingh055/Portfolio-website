import React from "react";

const Icons = () => {
  return (
    <div>
      <div className="flex mt-14">
        <a href="https://www.linkedin.com/in/rohitsingh05/" target="_blank">
          <img
            className="mr-5 size-7 cursor-pointer"
            src="./src/assets/Images/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/RohitSingh055" target="_blank">
          <img
            className="mr-5 size-7 cursor-pointer"
            src="./src/assets/Images/github.svg"
            alt="Github"
          />
        </a>
        <a href="https://twitter.com/ImRoh05" target="_blank">
          <img
            className="mr-5 size-7 cursor-pointer"
            src="./src/assets/Images/x.svg"
            alt="X"
          />
        </a>
        <a href="https://www.instagram.com/rohit.rsn_/" target="_blank">
          <img
            className="mr-5 size-7 cursor-pointer"
            src="./src/assets/Images/insta.svg"
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Icons;
