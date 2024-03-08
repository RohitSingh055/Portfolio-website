import React, { useRef } from "react";

const Modal = ({ imageUrl, onClose }) => {
  const modalRef = useRef(null);

  const handleCloseOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleCloseOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleCloseOutsideClick);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className=" rounded-lg flex flex-col p-4 lg:w-1/2 max-lg:w-full bg-gray-600"
      >
        <img
          src={imageUrl}
          alt="Certificate"
          className="mx-auto border-2 border-gray-500 h-96 "
        />
        <button
          onClick={onClose}
          className="bg-[#d5ff2f] text-black font-[Heading1] font-extrabold py-2 px-4 mx-auto rounded-md mt-4"
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
