import React from "react";

const Card_certificate = (props) => {
  return (
    // <div
    //   className="flex items-center p-2 bg-[#1A1A1A] font-[Body] font-extrabold rounded-2xl h-3/4 cursor-pointer"
    //   onClick={props.onClick}
    // >
    <div
      className="flex items-center p-2 bg-[#1A1A1A] font-[Body] font-extrabold rounded-2xl h-3/4 cursor-pointer transition duration-300 hover:shadow-lg hover:scale-105 hover:bg-gray-700 hover:text-white hover:border-gray-400"
      onClick={props.onClick}
    >
      <div className="flex items-center ">
        <img
          className="w-[50px] h-[50px] ml-2 mr-3 "
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
