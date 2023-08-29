import React from "react";

const About4 = () => {
  return (
    <section className="w-full about4 text-textPrimary text-sm py-32 px-12">
      <div className="grid grid-cols-4 grid-rows-8 md:grid-rows-4 gap-y-5 md:gap-y-16 gap-x-2 md:grid-cols-12 md:grid-flow-row ">
        <div className="col-start-2 w-40 md:col-start-6 about4xl col-span-2 row-span-2 border border-[#818489] rounded-lg bg-black text-center p-[1rem]">
          <h1 className="text-xl font-bold">+10</h1>
          <p className="text-[10px]">YEARS</p>
        </div>
        <div className="col-start-2 w-40  md:col-start-6 about4xl col-span-2 row-span-2 border border-[#818489] rounded-lg bg-black text-center p-[1rem]">
          <h1 className="text-xl font-bold">+1000</h1>
          <p className="text-[10px]">PROJECTS</p>
        </div>
        <div className="col-start-2 w-40  md:col-start-6 about4xl col-span-2 row-span-2 border border-[#818489] rounded-lg bg-black text-center p-[1rem]">
          <h1 className="text-xl font-bold">4</h1>
          <p className="text-[10px]">CONTENT</p>
        </div>
        <div className="col-start-2 w-40  md:col-start-6 about4xl col-span-2 row-span-2 border border-[#818489] rounded-lg bg-black  px-2 py-4">
          <h1 className="text-xl font-bold text-center">100%</h1>
          <p className="text-[10px] ">OF OUR CUSTOMER SATISFY</p>
        </div>
      </div>
    </section>
  );
};

export default About4;
