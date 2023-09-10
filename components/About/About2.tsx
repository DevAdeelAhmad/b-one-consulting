import React from "react";

const About2 = () => {
  return (
    <section className="w-full h-[100vh] about-21 flex items-center justify-center bg-[#101010] text-textPrimary text-sm py-10 px-12">
      <div className="grid grid-cols-4 h-full grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 ">
        <div className="col-span-4 xl:text-lg 2xl:text-xl font-Prompt row-span-1 flex items-center
        uppercase justify-center text-textPrimary col-start-1 md:col-start-3">
          <p>
            We are a team made up of people from{" "}
            <i>different backgrounds and we are passionate</i>about what we do.
            Our strength lies in <i>the diversity of each person’s background.</i>
            We are constantly adapting to{" "}
            <i>new trends and the needs of our customers.</i>
          </p>
        </div>
        <div className="about21 hidden md:inline-grid md:h-full justify-center items-center col-span-6"></div>
      </div>
    </section>
  );
};

export default About2;
