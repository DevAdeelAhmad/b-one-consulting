import React from "react";
import Modal from "./Modal";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full bg-black text-textPrimary text-sm pb-10 pt-4 px-12"
    >
      <div className="w-full grid grid-cols-4 grid-rows-1 md:gap-y-16 md:grid-cols-12 md:grid-flow-row pb-20">
        <div className="col-start-1 md:col-start-2 col-span-3 ">
          <h2 className=" text-3xl text-white font-light uppercase">
            360º Services
          </h2>
        </div>

        <div className="col-start-1 md:col-start-3 col-span-2  inline-grid gap-0 grid-rows-2 border-l border-solid border-gray-200 mt-10">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-5">01</h1>
            <p className="text-lg text-white pl-3 pt-9 ">
              Audit &<br /> consulting Services
            </p>
          </div>
        </div>
        <div className="col-start-3 md:col-start-5 col-span-2 inline-grid gap-0 grid-rows-2 border-l border-solid border-gray-200 mt-10">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-4">02</h1>
            <p className="text-lg text-white pl-3 pt-16">Digital Solution</p>
          </div>
        </div>

        <div className="col-start-1 md:col-start-7 col-span-2 inline-grid gap-0 grid-rows-2  border-l border-solid border-gray-200 mt-10 ">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-4">03</h1>
            <p className="text-lg text-white pl-3 pt-16">Data Solution</p>
          </div>
        </div>

        <div className="col-start-3 md:col-start-9 col-span-2 inline-grid gap-0 grid-rows-2  border-l border-solid border-gray-200  mt-10">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-4">04</h1>
            <p className="text-lg text-white pl-3 pt-9 xl:pt-16">
              Marketing & Branding
            </p>
          </div>
        </div>
        <Modal
          sectionName="Our Services"
          modalContent={<p>Content for Services Modal</p>}
        />
      </div>
    </section>
  );
};

export default Services;
