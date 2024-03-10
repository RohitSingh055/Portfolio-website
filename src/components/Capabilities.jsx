import React from "react";
import Skills from "./Skills";

const Capabilities = () => {
  return (
    <div
      id="capabilities"
      className="flex max-lg:flex-col justify-start 2xl:mb-32 max-lg:gap-10 lg:gap-32 mb-12 border-t border-[#484848]"
    >
      <div className="left max-lg:text-5xl 2xl:text-6xl lg:w-1/3 mt-10 2xl:mt-20 font-[Heading] lg:text-5xl ">
        MY CAPABILITIES
        <p className="font-[Body] 2xl:text-lg max-lg:text-lg lg:text-sm">
          Tech Stack I know
        </p>
      </div>

      <div className="right grid max-lg:grid-cols-2 place-items-center md:max-lg:grid-cols-3 max-lg:gap-y-9 lg:grid-cols-4 lg:w-2/3 lg:gap-x-9 lg:gap-y-14 mt-10 2xl:mt-20">
        <Skills name="HTML" url="/assets/Images/logo-html.svg" />
        <Skills name="CSS" url="/assets/Images/logo-css.svg" />
        <Skills name="JavaScript" url="/assets/Images/logo-javascript.svg" />
        <Skills name="ReactJS" url="/assets/Images/logo-reactjs.svg" />
        <Skills name="Tailwind CSS" url="/assets/Images/logo-tailwindcss.svg" />
        <Skills name="Python" url="/assets/Images/logo-python.svg" />
        <Skills name="Scikit-learn" url="/assets/Images/logo-scikit.svg" />
        <Skills name="Java" url="/assets/Images/logo-java.svg" />
        <Skills name="Android" url="/assets/Images/logo-android.svg" />
        <Skills name="GitHub" url="/assets/Images/logo-github.svg" />
        <Skills name="MySQL" url="/assets/Images/logo-mysql.svg" />
      </div>
    </div>
  );
};

export default Capabilities;
