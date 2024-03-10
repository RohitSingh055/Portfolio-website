import React from "react";
import Cards from "../components/Cards";
import { animateScroll } from "react-scroll";

const ProjectPage = () => {
  animateScroll.scrollToTop();
  return (
    <div>
      <p>Working on new projects to enhance this section :)</p>
      <Cards
        url="./src/assets/Images/portfolio.png"
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
        url="./src/assets/Images/campus_placement.jpg"
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
  );
};

export default ProjectPage;
