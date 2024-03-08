import React from "react";

const Skills = (props) => {
  return (
    <div>
      <button className="flex rounded-2xl h-[40px] w-fit hover:border hover:border-[#D3E97A] hover:shadow-sm hover:shadow-[#D3E97A] transition duration-300 hover:scale-105 p-3 gap-2 bg-[#1A1A1A] overflow-hidden items-center">
        <img
          className="w-[22px] h-[22px] bg-[#1A1A1A]"
          src={props.url}
          alt={props.name}
        />
        <p className="bg-[#1A1A1A] text-xs">{props.name}</p>
      </button>
    </div>
  );
};

export default Skills;
