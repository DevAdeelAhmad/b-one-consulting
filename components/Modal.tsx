import React, { useState } from "react";

interface ModalProps {
  sectionName: string;
  modalContent: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  sectionName,
  modalContent,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="section-with-modal">
      <button onClick={openModal}>Open</button>
      <span>{sectionName}</span>

      {isModalOpen && (
        <div className="modal">
          <button onClick={closeModal}>Close Modal</button>
          {modalContent}
        </div>
      )}
    </div>
  );
};

export default Modal;
