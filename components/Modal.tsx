"use client";
import React, { useState } from "react";

interface ModalProps {
  sectionName: string;
  modalContent: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ sectionName, modalContent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="fixed w-screen bottom-10 h-12 inline-grid grid-cols-4 md:grid-cols-12 grid-rows-1">
      <div className="section-with-modal md:col-start-2 flex items-center justify-end pr-10 col-span-4 md:col-span-12 rounded-3xl border text-right
      border-textSecondary bg-transparent w-10/12">
        <span className="text-md lg:text-lg text-right">
          {sectionName}
        </span>
        <button className="font-semibold text-lg ml-5" onClick={openModal}>
          Open
        </button>

        {isModalOpen && (
          <div className="modal">
            <button onClick={closeModal}>Close Modal</button>
            {modalContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default Modal;
