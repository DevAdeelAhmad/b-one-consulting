"use client";
import React, { useEffect, useState } from "react";
import ProjectsModalContent from "@/components/ProjectsModal/ProjectsModalContent";

const ProjectsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    "Introduction",
    "Services",
    "Projects",
    "About Us",
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
    if (activeSection === "Projects" || activeSection?.startsWith("Services")) {
      closeModal();
    } else {
      null;
    }
  }, [activeSection]);

  return (
    <section
      className={`${activeSection === "Projects"
          ? "fixed w-screen bottom-10 h-16 md:h-20 inline-grid ml-10 md:ml-0 md:pl-12 grid-cols-4 md:grid-cols-12 grid-rows-1"
          : "hidden"
        }`}
    >
      <div
        className="section-with-modal col-start-1 bg-black md:col-start-3 flex items-center justify-end pr-10
        col-span-4 md:col-span-9 rounded-3xl border text-right border-textSecondary w-10/12"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <span className="text-sm 2xl:text-base text-right text-textPrimary">
          {activeSection === "Projects" ? "OUR PROJECTS" : "OUR SERVICES"}
        </span>
        <button
          className="font-semibold text-textPrimary text-sm 2xl:text-base ml-5"
          onClick={openModal}
        >
          OPEN
        </button>
        {isModalOpen && <ProjectsModalContent onClose={closeModal} />}
      </div>
    </section>
  );
};

export default ProjectsModal;
