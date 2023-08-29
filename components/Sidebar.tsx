"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
  return (
    <nav className="fixed top-20 right-10 z-10 p-4">
      <ul className="flex flex-col items-end space-y-4">
        {sections.map((section) => (
          <li
            key={section}
            className={`${
              activeSection === section ? "text-[#474dff]" : "text-[#22278d]"
            } hover:text-[#474dff] text-sm transition cursor-pointer`}
            onClick={() => handleSectionClick(section)}
          >
            <div className="flex items-center ">
              <span className="mr-2">{section}</span>
              <div className={`${activeSection === section ? "h-[2.5px]" : "h-[1px]"} flex-grow w-6 bg-blue-500`} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
