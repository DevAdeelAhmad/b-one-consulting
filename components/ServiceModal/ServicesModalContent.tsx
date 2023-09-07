"use client"

import React, { useState } from "react";
import Audit from "@/components/ServiceModal/AuditServicesInnerPage";
import Digital from '@/components/ServiceModal/DigitalServicesInnerPage'
import Data from '@/components/ServiceModal/DataServicesInnerPage'
import Marketing from '@/components/ServiceModal/MarketingServicesInnerPage'

interface ServicesModalContentProps {
  onClose: () => void;
}

const ServicesModalContent: React.FC<ServicesModalContentProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const getContentComponent = () => {
    switch (activeTab) {
      case "Audit":
        return <Audit />;
      case "Digital":
        return <Digital />;
      case "Data":
        return <Data />;
      case "Marketing":
        return <Marketing />;
      default:
        return null;
    }
  };
  return (
    <div className="absolute left-0 right-0 bottom-0 h-[90vh] z-50 rounded-xl border-2 border-textSecondary  overflow-y-hidden overflow-x-hidden flex justify-center items-center bg-black">
      <div className="flex justify-center items-center">
        <div className={`bg-black  ${activeTab != "" ? 'modalbg1' : 'modalbg'} rounded-xl w-[75vw] h-screen grid grid-cols-1 place-content-center overflow-y-auto`}>
          <div className="flex flex-col justify-center w-[60vw]">
            <ul className={`space-y-7 ml-14 lg:ml-10 xl:ml-[11.3rem] ${activeTab != "" ? 'hidden' : 'block'}`}>
              <hr className="text-textPrimary border-textPrimary" />
              <li className="text-left flex items-center justify-between" onClick={() => handleTabChange("Audit")}>
                <button className="text-white text-sm md:text-lg hover:text-gray-300 uppercase">Audit & consulting services</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
              </li>
              <hr />
              <li className="text-left flex items-center justify-between">
                <button className="text-white text-sm md:text-lg hover:text-gray-300 uppercase" onClick={() => handleTabChange("Digital")}>Digital Solution</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
              </li>
              <hr />
              <li className="text-left flex items-center justify-between">
                <button className="text-white text-sm md:text-lg hover:text-gray-300 uppercase" onClick={() => handleTabChange("Data")}>Data Solution</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
              </li>
              <hr />
              <li className="text-left flex items-center justify-between">
                <button className="text-white text-sm md:text-lg hover:text-gray-300 uppercase" onClick={() => handleTabChange("Marketing")}>Marketing and Branding</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                </svg>
              </li>
              <hr />

            </ul>
          </div>
          <div className="absolute top-0 overflow-y-auto">{getContentComponent()}</div>
          <div className="flex items-center justify-end absolute bottom-8 right-10">
            <span className="text-lg mr-4 font-light text-white">Our Services</span>
            <button className="text-white text-lg font-semibold" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesModalContent;
