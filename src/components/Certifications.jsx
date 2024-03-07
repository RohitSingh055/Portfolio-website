import React from "react";
import Card_certificate from "./Card_certificate";
import Modal from "./Modal";

const Certifications = () => {
  const [selectedImageUrl, setSelectedImageUrl] = React.useState(null);

  const handleCardClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImageUrl(null);
  };

  return (
    <div className="flex justify-between border-t border-[#484848] mb-14">
      <div className="left w-[300px] h-[300px] mt-14 font-[Heading] text-5xl">
        MY CERTIFICATIONS
        <p className="font-[Body] text-sm">Click to view </p>
      </div>
      <div className="right grid grid-cols-2 gap-10 w-[650px] mt-14">
        <Card_certificate
          name="Machine Learning"
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
