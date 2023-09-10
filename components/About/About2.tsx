import Image from "next/image";
import React from "react";
import About2Img from '@/assets/bg/About2.png'

const About2 = () => {
  return (
    <section className="w-full h-[100vh] flex items-center justify-center bg-[#101010] text-textPrimary text-sm py-10 px-12">
      <div className="grid grid-cols-4 h-full grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 ">
        <div className="col-span-4 text-base xl:text-lg 2xl:text-xl font-Prompt row-span-1 row-start-1 flex items-center
        uppercase justify-center text-textPrimary col-start-1 md:col-start-3">
          <p>
            We are a team made up of people from{" "}
            <i>different backgrounds and we are passionate</i>about what we do.
            Our strength lies in <i>the diversity of each person’s background.</i>
            We are constantly adapting to{" "}
            <i>new trends and the needs of our customers.</i>
          </p>
        </div>
        <div className="col-span-4 md:col-span-6 row-start-1 col-start-1 flex items-center justify-center">
          <Image className="lg:h-[60vh] lg:w-[45vh]" src={About2Img} alt="About 2 Image" width={300} height={300}/>
        </div>
      </div>
    </section>
  );
};

export default About2;
