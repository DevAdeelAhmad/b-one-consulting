import Image from "next/image";
import React from "react";
import About2Img from '@/assets/bg/About2.png'

const About2 = () => {
  return (
    <section className="w-full h-[100vh] flex items-center justify-center bg-[#101010] text-textPrimary text-sm py-10 px-2 sm:px-12 ">
      <div className="grid grid-cols-4 h-full grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 ">
        <div className="col-span-4 text-md md:text-lg xl:text-2xl font-Prompt  row-span-1 row-start-1 flex items-center
        uppercase mt-10 md:mt-0 px-6 sm:px-16 md:px-0 justify-center text-textPrimary col-start-1 md:col-start-2 text-center md:text-left pt-24 ">
          <p>
            We are a team made up of people from{" "}
            <i>different backgrounds and we are passionate</i>about what we do.
            Our strength lies in <i>the diversity of each person’s background.</i>
            We are constantly adapting to{" "}
            <i>new trends and the needs of our customers.</i>
          </p>
        </div>
        <div className="col-span-4 md:col-span-6 row-start-1 md:col-start-7 col-start-1 xl:col-start-[-6] flex items-center justify-center">
          <Image className="w-[400px] h-[500px]  sm:w-[60vw] sm:h-[55vh] md:w-[40vh] md:h-[50vh] lg:h-[60vh] lg:w-[45vh]" src={About2Img} alt="About 2 Image" width={1000} height={1000}/>
        </div>
      </div>
    </section>
  );
};

export default About2;
