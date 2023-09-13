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
      <h1 className="text-2xl lg:text-[45px] font-medium">{text}</h1>
      <p className="text-sm lg:text-[25px] font-light mt-5 leading-7">{desc}</p>
    </div>
  );
};

const About1 = () => {
  return (
    <section className="w-full h-[100vh] text-textPrimary flex flex-col justify-center text-sm py-14 px-0 sm:px-2 md:px-12">
      <div className="grid grid-cols-4 md:grid-cols-12 grid-rows-2 md:grid-flow-row md:gap-y-2">
        <div className="col-span-4 md:col-span-6 row-start-1 row-span-2 col-start-1 flex md:items-center md:justify-center">
          <Image className="w-full xl:h-[60vh] xl:w-[60vh]" src={About1Img} alt="About 4 Image" width={400} height={400} />
        </div>
        <div className="col-span-4 col-start-1 row-start-1 row-span-1 md:col-start-7 
        flex flex-row gap-x-0 sm:gap-x-24 md:gap-x-5 3xl:gap-x-10 justify-between items-center">
          <div><SingleCard text="+10" desc="YEARS" /></div>
          <div><SingleCard text="+1000" desc="PROJECTS" /></div>
        </div>
        <div className="col-span-4 col-start-1 row-start-2 row-span-1 md:col-start-7
        flex flex-row gap-x-0 sm:gap-x-24 md:gap-x-5 3xl:gap-x-10 items-center justify-between">
          <div><SingleCard text="4" desc="CONTENT" /></div>
          <div><SingleCard text="100%" desc="SATISFIED COSTUMERS" /></div>
        </div>
      </div>
    </section>
  );
};

export default About1;
