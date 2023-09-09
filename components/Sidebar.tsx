"use client";

import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const sections = [
    "Introduction",
    "Services",
    "Projects",
    "About Us",
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

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
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
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="hidden md:flex fixed top-20 right-10 z-10 p-4">
      <ul
        className={`flex flex-col items-end space-y-4 ${
          isHovering ? "hovered" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {sections.map((section) => (
          <li
            key={section}
            className={`${
              activeSection === section
                ? "text-white font-semibold"
                : "text-textSecondary"
            } hover:text-gray-100 transition cursor-pointer`}
            onClick={() => handleSectionClick(section)}
          >
            <div className="flex items-center">
              <span
                className={`mr-2 ${
                  isHovering ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                {section}
              </span>
              <div
                className={`${
                  activeSection === section ? "h-[3px] bg-[#2C33D6]" : "h-[2px] bg-blue-600"
                } flex-grow w-8 rounded-full`}
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
