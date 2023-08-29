"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    "Intro",
    "AboutUs",
    "Services",
    "Projects",
    "Clients",
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
  return (
    <nav className="fixed top-20 right-0 z-10 p-4">
      <ul className="flex flex-col items-end space-y-4">
        {sections.map((section) => (
          <li
            key={section}
            className={`${
              activeSection === section ? "text-[#474dff]" : "text-[#22278d]"
            } hover:text-textPrimary text-sm transition cursor-pointer`}
            onClick={() => handleSectionClick(section)}
          >
            <div
              className={`w-6 h-[1px] absolute bg-blue-500 transition-all`}
            />
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
