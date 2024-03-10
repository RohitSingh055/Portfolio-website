import React from "react";
import Form from "./Form";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t w-4/5 mx-auto border-[#484848] lg:flex lg:justify-between"
    >
      <div className="lg:w-2/4 mb-10 lg:flex lg:flex-col lg:justify-between h-full">
        <div>
          <div className="mt-5 2xl:mt-20 lg:mb-0">
            <p className="font-[Heading] text-5xl 2xl:text-6xl">
              Let's Connect
            </p>

            <p className="font-[Body] text-sm mt-7 text-justify 2xl:text-base">
              I'm thrilled you scrolled till here and I'm eagerly looking
              forward to connecting with you. Let's explore potential
              opportunities for collaboration or simply engage in a friendly
              chat. Let's make something amazing together!
            </p>

            <p className="font-[Body] text-sm mt-3 2xl:text-base">
              For more info, here's my{" "}
              <a
                className="border-b-2 border-[#D3E97A]"
                href="./src/assets/Resume/resume.pdf"
                download="Rohit-resume"
              >
                resume
              </a>
            </p>
          </div>
          <Icons />
          <div className="text-sm font-[Body] mt-28 max-lg:hidden 2xl:mb-10 2xl:text-lg">
            &copy; 2024 Rohit Singh
          </div>
        </div>
      </div>

      <div className="lg:w-2/5 lg:mt-5 2xl:mt-20">
        <Form />
      </div>
      <div className="text-sm font-[Body] mb-10 lg:hidden mt-8">
        &copy; 2024 Rohit Singh
      </div>
    </footer>
  );
};

export default Footer;
