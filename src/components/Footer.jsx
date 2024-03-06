import React from "react";
import Form from "./Form";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="border-t border-[#484848] flex ">
      <div className="h-[400px] flex flex-col justify-between w-[50vw] mt-5 ml-11">
        <div>
            <p className="font-[Heading] text-4xl">Let's Connect</p>
            
            <p className="font-[Body] text-sm mt-7">Say hello at rohitrsn055@gmail.com</p>
            
            <p className="font-[Body] text-sm mt-3">For more info, here's my resume</p>

            <Icons/>
            
        </div>
        <div className="mt-auto mb-4 text-sm font-[Body]">
            &copy; 2024 Rohit Singh
        </div>
      </div>
      <div className="mt-5 mb-14 ml-10">
        <Form/>
      </div>
    </footer>
  );
};

export default Footer;
