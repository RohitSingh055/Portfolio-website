import React from "react";
import Cards from "./Cards";

const Project = () => {
  return (
    <div id="work" className="border-t border-[#484848]">
      <div className="mt-10 font-[Heading] text-5xl">FEATURED PROJECTS</div>
      <div className="font-[Body] text-sm">
        <p>
          Here are some of the projects that showcase my passion for <br />
          software development and Machine Learning. <br />
          <span className="font-[Heading1] text-base border-b-2 border-[#d3e97a]">
            Good Projects will be added soon :)
          </span>
        </p>
        <Cards
          url="./src/assets/Images/portfolio.png"
          title="Portfolio Website"
          description="The aim of this system is to predict the likelihood of a student securing a campus placement based on various features.This study explores several machine learning algorithms, including Logistic Regression, Decision Tree, and kNN, with the goal of providing economical and accurate results for campus placement prediction. The system adopts a Supervised Machine Learning approach by utilizing labeled data to train the classification algorithm."
          tech={["ReactJS", "TailwindCSS"]}
          capsule="ReactJS"
          wantLive={true}
          github="https://github.com/RohitSingh055/Portfolio-website"
        />

        <Cards
          url="./src/assets/Images/campus_placement.jpg"
          title="Campus Placement Prediction"
          description="The aim of this system is to predict the likelihood of a student securing a campus placement based on various features.This study explores several machine learning algorithms, including Logistic Regression, Decision Tree, and kNN, with the goal of providing economical and accurate results for campus placement prediction. The system adopts a Supervised Machine Learning approach by utilizing labeled data to train the classification algorithm."
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
