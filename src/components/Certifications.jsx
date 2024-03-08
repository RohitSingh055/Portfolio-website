import React from "react";
import Card_certificate from "./Card_certificate";
import Modal from "./Modal";

const Certifications = () => {
  const [selectedImageUrl, setSelectedImageUrl] = React.useState(null);

  const handleCardClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedImageUrl(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex max-lg:flex-col justify-between border-t border-[#484848] mb-14">
      <div className="left lg:h-72 mt-14 font-[Heading] text-5xl">
        MY CERTIFICATIONS
        <p className="font-[Body] text-sm max-lg:text-base mt-2">
          Click on the certificates to view them.{" "}
        </p>
      </div>
      <div className="right grid lg:grid-cols-2 lg:gap-10 lg:w-2/3 mt-14">
        <Card_certificate
          name="Machine Learning With Python"
          url="./src/assets/Images/IBM_logo.svg"
          by="IBM"
          onClick={() =>
            handleCardClick("./src/assets/Images/Certificates/coursera.jpg")
          }
        />
        <Card_certificate
          name="Fundamentals of Deep Learning"
          url="./src/assets/Images/Nvidia_logo.svg"
          by="NVIDIA"
          onClick={() =>
            handleCardClick("./src/assets/Images/Certificates/nvidia.jpg")
          }
        />
        <Card_certificate
          name="SQL (Intermediate)"
          url="./src/assets/Images/hackerRank.svg"
          by="HackerRank"
          onClick={() =>
            handleCardClick("./src/assets/Images/Certificates/hackerrank.jpg")
          }
        />
        <Card_certificate
          name="Networking Cardinals"
          url="./src/assets/Images/vit-logo.svg"
          by="VIT"
          onClick={() =>
            handleCardClick("./src/assets/Images/Certificates/networking.jpg")
          }
        />
      </div>
      {selectedImageUrl && (
        <Modal imageUrl={selectedImageUrl} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Certifications;
