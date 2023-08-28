import React from "react";

const Services = () => {
  return (
    <section className="w-full bg-black text-textPrimary text-sm pb-10 pt-4 px-12">
      <div className="w-full grid grid-cols-4 grid-rows-1 md:gap-y-16 md:grid-cols-12 md:grid-flow-row pb-20">
        <div className="col-start-1 md:col-start-2 col-span-3 ">
          <h2 className=" text-4xl text-white font-light uppercase">360º Services</h2>
        </div>
        {/* card */}
        {/* card1 */}

        <div className="col-start-1 md:col-start-3 col-span-2  inline-grid grid-rows-2 border-l border-solid border-gray-200 mt-10">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-5 ">01</h1>
            <p className="text-lg text-white pl-3 pt-9 ">
              Audit &<br /> consulting Services
            </p>
          </div>
        </div>
        {/* card2 */}
        <div className="col-start-3 md:col-start-5 col-span-2 inline-grid grid-rows-2 border-l border-solid border-gray-200 mt-10">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-4">02</h1>
            <p className="text-lg text-white pl-3 pt-16">Digital Solution</p>
          </div>
        </div>
        {/* card3 */}

        <div className="col-start-1 md:col-start-7 col-span-2 inline-grid grid-rows-2  border-l border-solid border-gray-200 mt-10 ">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-4">03</h1>
            <p className="text-lg text-white pl-3 pt-16">Data Solution</p>
          </div>
        </div>
        {/* card4 */}

        <div className="col-start-3 md:col-start-9 col-span-2 inline-grid grid-rows-2  border-l border-solid border-gray-200  mt-10">
          <div className="row-start-2">
            <h1 className="text-7xl text-white pl-3 pt-4">04</h1>
            <p className="text-lg text-white pl-3 pt-9 xl:pt-16">Marketing & Branding</p>
          </div>
        </div>
        {/* <div className="flex flex-row mt-20">
          <div className="bg-black w-full h-[50px] border border-solid border-gray-500 rounded-xl">
            <p className="text-xl text-right mt-3 mr-4 text-white leading-6 capitalize">
              our services
              <span className="ml-7 mr-3 underline cursor-pointer">Open</span>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
