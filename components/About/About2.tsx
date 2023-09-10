import React from "react";

const About2 = () => {
  return (
    <section className="w-full h-[100vh] font-Prompt
    font-light about-2 flex items-center bg-[#101010] text-textPrimary text-sm py-10 px-12">
      <div className="grid grid-cols-4 grid-rows-1 h-[50vh] items-center md:grid-cols-12 about2">
        <p className="col-start-1 xl:text-lg 2xl:text-xl md:col-start-2 col-span-3 md:col-span-4 uppercase text-textPrimary">
          We are a team made up of people from{" "}
          <i>different backgrounds and we are passionate</i>about what we do.
          Our strength lies in <i>the diversity of each person’s background.</i>
          We are constantly adapting to{" "}
          <i>new trends and the needs of our customers.</i>
        </p>
      </div>
    </section>
  );
};

export default About2;
