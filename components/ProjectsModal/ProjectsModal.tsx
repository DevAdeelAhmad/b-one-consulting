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
      className={`${
        activeSection === "Projects"
          ? "fixed w-screen bottom-10 h-16 md:h-24 inline-grid grid-cols-4 md:grid-cols-12 grid-rows-1 ml-2 sm:ml-12 md:ml-0"
          : "hidden"
      }`}
    >
      <div className="section-with-modal w-[87%] sm:w-[72%] relative h-full col-start-1 md:w-10/12 col-span-4 md:col-span-9 md:col-start-3 ">
        {!isModalOpen && (
          <div
            className="w-full bg-black/80 flex items-center h-full justify-end pr-10 rounded-3xl border text-right border-textSecondary"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <>
              <span className="text-sm md:text-base 2xl:text-[14px] tracking-wider text-right text-textPrimary">
                {activeSection === "Services" ? "OUR SERVICES" : "OUR PROJECTS"}
              </span>
              <button
                className="font-semibold text-sm md:text-base tracking-wider 2xl:text-[14px] ml-5"
                onClick={openModal}
              >
                OPEN
              </button>
            </>
          </div>
        )}
        {isModalOpen && <ProjectsModalContent onClose={closeModal} />}
      </div>
    </section>
  );
};

export default ProjectsModal;
