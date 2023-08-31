import Link from "next/link";
import React from "react";

interface ProjectsModalContent {
  onClose: () => void;
}

const ProjectsModalContent: React.FC<ProjectsModalContent> = ({ onClose }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center bg-transparent" onClick={onClose}>
      <div className="bg-black modalbg rounded-xl w-[75vw] h-[85vh] border border-textSecondary grid grid-cols-1 place-content-center">
        <div className="flex flex-col justify-center h-full w-[65vw]">
          <ul className="space-y-7 ml-14 lg:ml-10 xl:ml-[11.3rem]">
            <hr className="text-textPrimary border-textPrimary" />
            <li className="text-left flex items-center justify-between">
              <Link href="#" className="text-white text-sm md:text-lg hover:text-gray-300 uppercase">Project #1</Link><Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
              </Link>
            </li>
            <hr />
            <li className="text-left flex items-center justify-between">
              <Link href="#" className="text-white text-sm md:text-lg hover:text-gray-300 uppercase">Project #2</Link><Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
              </Link>
            </li>
            <hr />
            <li className="text-left flex items-center justify-between">
              <Link href="#" className="text-white text-sm md:text-lg hover:text-gray-300 uppercase">Project #3</Link><Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
              </Link>
            </li>
            <hr />
            <li className="text-left flex items-center justify-between">
              <Link href="#" className="text-white text-sm md:text-lg hover:text-gray-300 uppercase">Project #4</Link><Link href='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
              </svg>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end absolute bottom-8 right-10 mt-20">
          <span className="text-lg mr-4 font-light text-white">Our Services</span>
          <button className="text-white text-lg font-semibold" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModalContent;
