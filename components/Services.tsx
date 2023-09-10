import React from "react";
import Modal from "@/components/ServiceModal/Modal";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full h-[100vh] bg-[#101010] text-textPrimary px-12"
    >
      <Modal />
      <div className="w-full grid grid-cols-4 grid-flow-row gap-y-16 2xl:gap-y-40 gap-x-20 xl:gap-x-10 2xl:gap-x-5 md:grid-cols-12 pt-4 md:grid-flow-row pb-10">
        <div className="col-start-1 md:col-start-2 col-span-4 mt-4 2xl:mt-2">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl text-white font-Titillium font-light uppercase font-headingText">
            360º Services
          </h2>
        </div>
        <div className="col-start-1 md:col-start-3 h-64 2xl:h-96 col-span-2 flex flex-col justify-between border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary flex flex-col gap-y-0 md:gap-y-4">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-10 lg:pb-2 xl:pb-0">
              01
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl">
              Audit & consulting Services
            </p>
          </div>
        </div>

        <div className="col-start-3 md:col-start-5 h-64 2xl:h-96 col-span-2 flex flex-col justify-between border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary flex flex-col gap-y-5">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-10 lg:pb-8 xl:pb-0">
              02
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl">
              Digital <br /> Solution
            </p>
          </div>
        </div>

        <div className="col-start-1 md:col-start-7 h-64 2xl:h-96 col-span-2 flex flex-col justify-between mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary flex flex-col gap-y-5">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-10 lg:pb-8 xl:pb-0">
              03
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl">
              Data <br />
              Solution
            </p>
          </div>
        </div>

        <div className="col-start-3 md:col-start-9 h-64 2xl:h-96 col-span-2 flex flex-col justify-between mt-10 md:mt-0 border-l border-solid border-textPrimary">
          <div className="h-[8rem]"></div>
          <div className="pl-3 text-textPrimary flex flex-col gap-y-5">
            <h1 className="text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium pb-4 lg:pb-1 xl:pb-0">
              04
            </h1>
            <p className="font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl">
              Marketing & <br /> Branding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
