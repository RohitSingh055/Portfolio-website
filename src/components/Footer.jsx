import React from "react";
import Form from "./Form";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-[#484848] flex ">
      <div className="h-[400px] flex flex-col justify-between w-[45vw] mt-5">
        <div>
          <p className="font-[Heading] text-4xl">Let's Connect</p>

          <p className="font-[Body] text-sm mt-7">
            Say hello at{" "}
            <a
              className="border-b-2 border-[#D3E97A]"
              href="mailto:rohitrsn055@gmail.com"
              // onclick="window.location.href = 'mailto:rohitrsn055@gmail.com'; return false;"
            >
              rohitrsn055@gmail.com
            </a>
          </p>

          <p className="font-[Body] text-sm mt-3">
            For more info, here's my{" "}
            <a
              className="border-b-2 border-[#D3E97A]"
              href="./src/assets/Resume/resume.pdf"
              download="Rohit-resume"
            >
              resume
            </a>
          </p>

          <Icons />
        </div>
        <div className="mt-auto mb-4 text-sm font-[Body]">
          &copy; 2024 Rohit Singh
        </div>
      </div>
      <div className="mt-5 mb-14 ml-8">
        <Form />
      </div>
    </footer>
  );
};

export default Footer;
