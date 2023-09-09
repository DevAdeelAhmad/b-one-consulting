import React from "react";
import Modal from "@/components/ServiceModal/Modal";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full h-[100vh] bg-[#101010] text-textPrimary px-12"
    >
      <Modal />
      <div className="w-full grid grid-cols-4 grid-flow-row gap-y-16 gap-x-20 md:grid-cols-12 pt-4 md:grid-flow-row pb-10">
        <div className="col-start-1 md:col-start-2 col-span-4 mt-10">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-white font-Titillium font-light uppercase font-headingText">
            360º Services
          </h2>
        </div>

        <div className="col-start-1 md:col-start-3 h-96 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="row-start-1 h-[8rem]"></div>
          <div className="row-start-2 pl-3 text-textPrimary">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-light font-Titillium">01</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl">
              Audit &<br /> consulting Services
            </p>
          </div>
        </div>
        <div className="col-start-3 md:col-start-5 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="row-start-1 h-[8rem]"></div>
          <div className="row-start-2">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-Titillium font-headingText text-white pl-3">02</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl text-white pl-3 pt-16 md:pt-28 lg:pt-28 xl:pt-32">Digital Solution</p>
          </div>
        </div>

        <div className="col-start-1 md:col-start-7 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="row-start-1 h-[8rem]"></div>
          <div className="row-start-2">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-Titillium font-headingText text-white pl-3">03</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl text-white pl-3 pt-16 md:pt-28 lg:pt-36 xl:pt-32">Data Solution</p>
          </div>
        </div>

        <div className="col-start-3 md:col-start-9 col-span-2 inline-grid grid-flow-row mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="row-start-1 h-[8rem]"></div>
          <div className="row-start-2">
            <h1 className="text-5xl md:text-6xl xl:text-[100px] font-Titillium font-headingText text-white pl-3">04</h1>
            <p className="font-textFamily text-lg lg:text-xl font-Prompt uppercase xl:text-2xl text-white pl-3 pt-10 md:pt-28 lg:pt-28 xl:pt-32">
              Marketing & Branding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Services;
