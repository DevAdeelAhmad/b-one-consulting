import React from "react";
import Modal from "@/components/ServiceModal/Modal";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full h-[100vh] bg-[#101010] text-textPrimary px-12"
    >
      <Modal />
      <div className="w-full grid grid-cols-4 grid-flow-row gap-y-16  2xl:gap-y-40 gap-x-20 md:grid-cols-12 pt-4 md:grid-flow-row pb-10">
        <div className="col-start-1 md:col-start-2 col-span-4 mt-4 2xl:mt-12">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-white font-Titillium font-light uppercase font-headingText">
            360º Services
          </h2>
        </div>
        <div className="col-start-1 md:col-start-3 h-64 2xl:h-96 col-span-2 flex flex-col justify-between border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-10 lg:pb-4 xl:pt-28">
              01
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl xl:pt-1 2xl:pt-16">
              Audit & consulting Services
            </p>
          </div>
        </div>

        <div className="col-start-3 md:col-start-5 h-64 2xl:h-96 col-span-2 flex flex-col justify-between border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-16 lg:pb-8 xl:pt-24 2xl:pb-24">
              02
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl xl:pt-0">
              Digital Solution
            </p>
          </div>
        </div>

        <div className="col-start-1 md:col-start-7 h-64 2xl:h-96 col-span-2 flex flex-col justify-between mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-10 lg:pb-8 xl:pb-12 2xl:pb-[90px]">
              03
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl">
              Data Solution
            </p>
          </div>
        </div>

        <div className="col-start-3 md:col-start-9 h-64 2xl:h-96 col-span-2 flex flex-col justify-between mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-4 lg:pb-2" >
              04
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl  font-Prompt uppercase xl:text-sm 2xl:text-xl xl:pt-3 xl:pb-24 2xl:pt-16">
              Marketing & Branding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
