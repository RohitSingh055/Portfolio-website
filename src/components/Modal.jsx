// Modal.jsx
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white rounded-lg p-4">
        <img
          src={imageUrl}
          alt="Certificate"
          className="w-full h-96 object-contain"
        />
        <button
          onClick={onClose}
          className="bg-black py-2 px-4 rounded-md mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
