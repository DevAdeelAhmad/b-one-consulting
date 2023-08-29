"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const sections = [
    "Introduction",
    "About Us",
    "Services",
    "Projects",
    "Clients & Partners",
    "Contact",
  ];

  const handleSectionClick = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      const yOffset = -50;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(section);
    }
  };

  const handleMouseEnter = (section: string) => {
    setHovered(section);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

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
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden md:flex fixed top-20 right-10 z-10 p-4">
      <ul className="flex flex-col items-end space-y-4">
        {sections.map((section) => (
          <li
            key={section}
            className={`${
              activeSection === section ? "text-[#474dff]" : "text-[#22278d]"
            } hover:text-[#5c61ff] text-sm transition cursor-pointer`}
            onMouseEnter={() => handleMouseEnter(section)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleSectionClick(section)}
          >
            <div className="flex items-center ">
              <span
                className={`mr-2 ${
                  hovered === section ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                {section}
              </span>
              <div className={`${activeSection === section ? "h-[2.5px]" : "h-[1px]"} flex-grow w-8 bg-blue-500`} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
