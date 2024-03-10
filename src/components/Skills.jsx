import React from "react";

const Skills = (props) => {
  return (
    <div>
      <button className="flex rounded-2xl lg:h-12 w-32 2xl:w-36 hover:border hover:border-[#D3E97A] transition duration-300 hover:scale-105 hover:bg-[#333333] p-3 gap-2 bg-[#1A1A1A] overflow-hidden items-center justify-center">
        <img className="w-[22px] h-[22px]" src={props.url} alt={props.name} />
        <p className="text-xs 2xl:text-sm">{props.name}</p>
      </button>
    </div>
  );
};

export default Skills;
