import React from "react";

const Card_certificate = (props) => {
  return (
    <div
      className="flex items-center p-2 bg-[#1A1A1A] font-[Body] font-extrabold rounded-2xl lg:h-3/4 cursor-pointer transition duration-300 hover:scale-105 hover:bg-[#333333] max-lg:mb-10 "
      onClick={props.onClick}
    >
      <div className="flex items-center max-lg:p-2">
        <img
          className="w-14 h-14 ml-2 mr-3 "
          src={props.url}
          alt={props.name}
        />
        <div className="flex flex-col text-sm p-2 ">
          <span className="">{props.name}</span>
          <span className="">{props.by}</span>
        </div>
      </div>
    </div>
  );
};

export default Card_certificate;
