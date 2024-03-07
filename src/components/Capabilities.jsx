import React from "react";
import Skills from "./Skills";

const Capabilities = () => {
  return (
    <div className="flex justify-start gap-32 mb-12 border-t border-[#484848]">
      <div className="left  w-[300px] h-[300px] mt-10 font-[Heading] text-5xl ">
        MY CAPABILITIES
        <p className="font-[Body] text-sm">Tech Stack I know</p>
      </div>
      <div className="right grid grid-cols-4 w-[600px] h-[300px] mt-10">
        <Skills name="HTML" url="./src/assets/Images/logo-html.svg" />
        <Skills name="CSS" url="./src/assets/Images/logo-css.svg" />
        <Skills
          name="JavaScript"
          url="./src/assets/Images/logo-javascript.svg"
        />
        <Skills name="ReactJS" url="./src/assets/Images/logo-reactjs.svg" />
        <Skills
          name="Tailwind CSS"
          url="./src/assets/Images/logo-tailwindcss.svg"
        />
        <Skills name="Python" url="./src/assets/Images/logo-python.svg" />
        <Skills name="Scikit-learn" url="./src/assets/Images/logo-scikit.svg" />
        <Skills name="Java" url="./src/assets/Images/logo-java.svg" />
        <Skills name="Android" url="./src/assets/Images/logo-android.svg" />
        <Skills name="GitHub" url="./src/assets/Images/logo-github.svg" />
        <Skills name="MySQL" url="./src/assets/Images/logo-mysql.svg" />
      </div>
    </div>
  );
};

export default Capabilities;
