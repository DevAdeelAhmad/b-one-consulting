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
      const yOffset = 11;
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y - 10, behavior: "smooth" });
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
    <nav className="hidden md:flex fixed top-20 right-10 z-[20] p-4">
      <ul
        className={`flex flex-col items-end space-y-3 ${
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
                ? "text-textPrimary font-semibold"
                : "text-textPrimary opacity-70"
            } hover:text-gray-100 transition cursor-pointer`}
            onClick={() => handleSectionClick(section)}
          >
            <div className="flex items-center">
              <span
                className={`mr-4 tracking-wider text-[12px]  ${
                  isHovering ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                {section}
              </span>
              <div
                className={`${
                  activeSection === section
                    ? "h-[2.5px] bg-textPrimary"
                    : "h-[1.5px] bg-textPrimary bg-opacity-70"
                } flex-grow w-6 rounded-full`}
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
