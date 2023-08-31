"use client";
import React, { useEffect, useState } from "react";
import ProjectsModalContent from "@/components/ProjectsModal/ProjectsModalContent";

const ProjectsModal = () => {
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
    const sectionInView = sections.find((section) => {
      const targetElement = document.getElementById(section);
      if (targetElement) {
        const sectionTop = targetElement.offsetTop;
        const sectionBottom = sectionTop + targetElement.clientHeight;
        return scrollY >= sectionTop && scrollY < sectionBottom;
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
    if (activeSection === "Projects" || activeSection?.startsWith("Services")) {
      openModal();
    } else {
      closeModal();
    }
  }, [activeSection]);

  return (
    <section
      className={`${
        activeSection === "Projects"
          ? "fixed w-screen bottom-10 h-16 inline-grid ml-10 md:ml-0 md:pl-12 grid-cols-4 md:grid-cols-12 grid-rows-1"
          : "hidden"
      }`}
    >
      <div
        className="section-with-modal col-start-1 md:col-start-2 flex items-center justify-end pr-10 col-span-4 md:col-span-12 rounded-3xl border text-right border-textSecondary w-10/12"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <span className="text-md lg:text-lg text-right text-textPrimary">
          {activeSection === "Projects" ? "Our Projects" : "Our Services"}
        </span>
        <button
          className="font-semibold text-textPrimary text-lg ml-5"
          onClick={closeModal}
        >
          Open
        </button>
        {isModalOpen && <ProjectsModalContent onClose={closeModal} />}
      </div>
    </section>
  );
};

export default ProjectsModal;
