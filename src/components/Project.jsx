import React from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div id="work" className="border-t border-[#484848] 2xl:mb-44">
      <div className="flex mt-10 justify-between">
        <div className="font-[Heading] text-4xl 2xl:text-6xl lg:text-5xl">
          FEATURED PROJECTS
        </div>
        <div>
          <Link to="/projects">
            <p className="max-lg:text-sm lg:mr-5 mt-1 2xl:text-xl cursor-pointer font-[Heading1] text-[#d3e97a] border-b-2 border-[#d3e97a]">
              View All -{">"}
            </p>
          </Link>
        </div>
      </div>
      <div className="font-[Body] lg:text-sm">
        <p className="lg:w-1/2 max-lg:w-2/3 2xl:text-lg">
          Here are some of the projects that showcase my passion for software
          development and Machine Learning. <br />
        </p>
        <Cards
          url="/assets/Images/portfolio.png"
          title="Portfolio Website"
          point1="Built with React and styled with Tailwind CSS."
          point2="Implemented React Modal for intuitive pop-up interactions."
          point3="Used React Router for seamless page transitions."
          tech={["ReactJS", "TailwindCSS"]}
          capsule="ReactJS"
          wantLive={true}
          github="https://github.com/RohitSingh055/Portfolio-website"
        />

        <Cards
          url="/assets/Images/campus_placement.jpg"
          title="Campus Placement Prediction"
          point1="Used machine learning algorithms like Logistic Regression, Decision Tree, and kNN."
          point2="Used labeled data to train robust classification models."
          point3="Offers insights for institutions to enhance placement strategies."
          tech={["Python", "Data Mining", "Machine Learning"]}
          capsule="Machine Learning"
          wantLive={false}
          github="https://github.com/RohitSingh055/Campus_Placement-Prediction"
        />
      </div>
    </div>
  );
};

export default Project;
