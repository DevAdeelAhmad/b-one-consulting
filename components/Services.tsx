import React from "react";
import Modal from "@/components/ServiceModal/Modal";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full h-[100vh] bg-[#101010] text-textPrimary text-sm px-12"
    >
      <div className="w-full grid grid-cols-4 grid-rows-1 md:gap-y-16 md:grid-cols-12 pt-4 md:grid-flow-row pb-10">
        <div className="col-start-1 md:col-start-2 col-span-4 mt-10">
          <h2 className="text-5xl text-white font-Titillium font-light uppercase font-headingText">
            360º Services
          </h2>
        </div>

        <div className="col-start-1 md:col-start-3 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-gray-200">
          <div className="row-start-1 h-[29vh]"></div>
          <div className="row-start-2">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-Titillium font-headingText text-white pl-3">01</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl text-white pl-3 pt-10 md:pt-20 lg:pt-20 xl:pt-24">
              Audit &<br /> consulting Services
            </p>
          </div>
        </div>
        <div className="col-start-3 md:col-start-5 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-gray-200">
                    <div className="row-start-1 h-[29vh]"></div>
          <div className="row-start-2">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-Titillium font-headingText text-white pl-3">02</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl text-white pl-3 pt-16 md:pt-28 lg:pt-28 xl:pt-32">Digital Solution</p>
          </div>
        </div>

        <div className="col-start-1 md:col-start-7 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-gray-200 ">
                    <div className="row-start-1 h-[29vh]"></div>
          <div className="row-start-2">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-Titillium font-headingText text-white pl-3">03</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl text-white pl-3 pt-16 md:pt-28 lg:pt-36 xl:pt-32">Data Solution</p>
          </div>
        </div>

        <div className="col-start-3 md:col-start-9 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-gray-200 ">
                    <div className="row-start-1 h-[29vh]"></div>
          <div className="row-start-2">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-Titillium font-headingText text-white pl-3">04</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl text-white pl-3 pt-10 md:pt-28 lg:pt-28 xl:pt-32">
              Marketing & Branding
            </p>
          </div>
        </div>
        <Modal />
      </div>
    </section>
  );
};



export default Services;
