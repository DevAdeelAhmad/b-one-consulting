import React from "react";
import Image from "next/image";
import About1Img from "@/assets/bg/About4.png";

interface ISingleCardProps {
  text: string;
  desc: string;
}

const SingleCard = ({ text, desc }: ISingleCardProps) => {
  return (
    <div className="w-40 rounded-[1.75rem] text-center py-[1.75rem] font-prompt">
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium pl-10 md:pl-0">{text}</h1>
      <p className="text-sm md:text-base font-light pl-10 md:pl-0">{desc}</p>
    </div>
  );
};

const About1 = () => {
  return (
    <section className="w-full h-[100vh] text-textPrimary flex flex-col justify-center text-sm py-14 px-2 md:px-12">
      <div className="grid grid-cols-4 md:grid-cols-12 grid-flow-row gap-y-5">
        <div className="col-span-4 md:col-span-6 row-start-1 col-start-1 flex items-center justify-center">
          <Image className="xl:h-[60vh] xl:w-[60vh]" src={About1Img} alt="About 4 Image" width={400} height={400} />
        </div>
        <div className="col-span-1 col-start-1 row-start-1 row-span-1 md:col-start-8 md:col-span-3
        flex flex-col justify-around md:justify-between">
          <div><SingleCard text="+10" desc="YEARS" /></div>
          <div><SingleCard text="+1000" desc="PROJECTS" /></div>
        </div>
        <div className="col-span-1 col-start-3 row-start-1 row-span-1 md:col-start-10 md:col-span-3
        flex flex-col justify-around md:justify-between items-center">
          <div><SingleCard text="4" desc="CONTENT" /></div>
          <div><SingleCard text="100%" desc="OF OUR CUSTOMER SATISFY" /></div>
        </div>
      </div>
    </section>
  );
};

export default About1;
