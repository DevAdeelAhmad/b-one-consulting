import React from "react";

const About3 = () => {
  return (
    <section className="w-full h-[100vh] about-3 flex items-center justify-center bg-[#101010] text-textPrimary text-sm py-10 px-12">
      <div className="grid grid-cols-4 grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 ">
        <div className="about3  md:inline-grid md:h-[50vh] col-span-4 col-start-3"></div>
        <div className="col-span-4 text-md md:text-lg xl:text-2xl font-Prompt row-span-1 flex items-center justify-center uppercase text-textPrimary">
          <p>
            Fieri, inquam, <i>Triari, nullo pacto potest</i>, ut non dicas, quid non
            <i>probes eius, a quo</i> dissentias. <i>quid enim</i> me prohiberet aojaoca^
            Epicureum
          </p>
        </div>
      </div>
    </section>
  );
};

export default About3;
