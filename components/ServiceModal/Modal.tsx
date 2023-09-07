"use client";
import React, { useEffect, useState } from "react";
import ServicesModalContent from "@/components/ServiceModal/ServicesModalContent";

const ServicesModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    "Introduction",
    "About Us",
    "Services",
    "Projects",
    "Clients & Partners",
    "Contact",
  ];

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const middleOfViewport = scrollY + windowHeight / 2;

  const sectionInView = sections.find((section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      const sectionTop = targetElement.offsetTop;
      const sectionBottom = sectionTop + targetElement.clientHeight;
      return (
        middleOfViewport >= sectionTop && middleOfViewport <= sectionBottom
      );
    }
    return false;
  });

  setActiveSection(sectionInView || null);
};

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (activeSection === "Services" || activeSection?.startsWith("Projects")) {
      closeModal();
    } else {
      null;
    }
  }, [activeSection]);

  return (
    <section
      className={`${
        activeSection === "Services"
          ? "pr-2 md:pr-12 fixed w-screen bottom-10 h-16 md:h-24 inline-grid grid-cols-4 md:grid-cols-12 grid-rows-1"
          : "hidden"
      }`}
    >
      <div
        className="section-with-modal md:col-start-2 flex items-center justify-end pr-10 col-span-4 md:col-span-12 rounded-3xl border text-right border-textSecondary w-10/12"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <span className="text-base text-right">
          {activeSection === "Services" ? "OUR SERVICES" : "OUR PROJECTS"}
        </span>
        <button className="font-semibold text-base ml-5" onClick={openModal}>
          OPEN
        </button>
        {isModalOpen && <ServicesModalContent onClose={closeModal} />}
      </div>
    </section>
  );
};

export default ServicesModal;
