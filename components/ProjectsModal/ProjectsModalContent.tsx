import React, { useState } from "react";
import ProjectsInner from "@/components/ProjectsModal/ProjectsInnerModal";

interface ProjectsModalContent {
  onClose: () => void;
}

const ProjectsModalContent: React.FC<ProjectsModalContent> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const getContentComponent = () => {
    switch (activeTab) {
      case "Project1":
        return <ProjectsInner />;
      case "Project2":
        return <ProjectsInner />;
      case "Project3":
        return <ProjectsInner />;
      case "Project4":
        return <ProjectsInner />;
      default:
        return null;
    }
  };
  return (
    <div
      className="absolute left-0 right-0 bottom-[-1px] h-[90vh] z-50 rounded-3xl border border-textSecondary
    overflow-y-hidden overflow-x-hidden flex justify-center items-center bg-black"
    >
      <div className="flex justify-center items-center">
        <div
          className={`bg-black  ${
            activeTab != "" ? "modalbg1" : "modalbg"
          } rounded-xl
        h-screen grid grid-cols-1 place-content-center overflow-y-auto`}
        >
          <div className="flex flex-col justify-center w-[55vw]">
            <ul
              className={`space-y-7 ml-4 mr-4 lg:ml-32 lg:mr-32  ${
                activeTab != "" ? "hidden" : "block"
              }`}
            >
              <hr className="text-textPrimary border-textPrimary" />
              <li
                className="text-left text-white flex items-center justify-between"
                onClick={() => handleTabChange("Project1")}
              >
                <button className="text-white text-sm md:text-lg hover:text-gray-300 uppercase">
                  Project #1
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </li>
              <hr />
              <li className="text-left text-white flex items-center justify-between">
                <button
                  className="text-white text-sm md:text-lg hover:text-gray-300 uppercase"
                  onClick={() => handleTabChange("Project2")}
                >
                  Project #2
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </li>
              <hr />
              <li className="text-left text-white flex items-center justify-between">
                <button
                  className="text-white text-sm md:text-lg hover:text-gray-300 uppercase"
                  onClick={() => handleTabChange("Project3")}
                >
                  Project #3
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </li>
              <hr />
              <li className="text-left text-white flex items-center justify-between">
                <button
                  className="text-white text-sm md:text-lg hover:text-gray-300 uppercase"
                  onClick={() => handleTabChange("Project4")}
                >
                  Project #4
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </li>
              <hr />
            </ul>
          </div>
          <div className="absolute top-0 overflow-y-auto">
            {getContentComponent()}
          </div>
          <div className="flex items-center justify-end absolute bottom-[34.5px] right-10">
            <span className="text-sm md:text-base 2xl:text-[14px] tracking-wider mr-4 text-textPrimary uppercase">
              Our Projects
            </span>
            <button
              className="text-textPrimary text-sm md:text-base 2xl:text-[14px] tracking-wider font-semibold uppercase"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModalContent;
