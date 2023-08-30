import React from "react";


const About1 = () => {
  return (
    <section className="w-full about-1 h-[100vh] flex items-center justify-center bg-black text-textPrimary text-sm py-10 px-12">
      <div className="grid grid-cols-4 grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 ">
        <div className="about1 hidden md:inline-grid md:h-72 col-span-4 col-start-3"></div>
        <p className="col-span-4 row-span-1 flex items-center justify-center">
         B one marketing and brandin
        </p>
      </div>
    </section>
  );
};

export default About1;
