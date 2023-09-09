import React from "react";
import Image from "next/image";
import About1Img from "@/assets/bg/about4.svg";

interface ISingleCardProps {
  text: string;
  desc: string;
}

const SingleCard = ({ text, desc }: ISingleCardProps) => {
  return (
    <div className="w-40 rounded-[1.75rem] text-center py-[1.75rem] font-prompt">
      <h1 className="text-xl md:text-3xl font-semibold font-textFamily">{text}</h1>
      <p className="text-sm font-textFamily">{desc}</p>
    </div>
  );
};

const About1 = () => {
  return (
    <section className="w-full h-[100vh] text-textPrimary text-sm py-32 px-2 md:px-12">
      <div className="grid grid-cols-4 md:grid-cols-12 grid-rows-1 gap-y-5 gap-x-2">
        <div className="col-span-4 md:col-start-1 row-start-1 col-start-1 md:col-span-6 h-3/6 md:h-full">
          <Image src={About1Img} alt="About 4 Image" width={1000} height={1000} />
        </div>
        <div className="col-span-2 col-start-1 row-start-1 md:col-start-8 md:col-span-3
        flex flex-col justify-center gap-y-10">
          <SingleCard text="+10" desc="YEARS" />
          <SingleCard text="+1000" desc="PROJECTS" />
        </div>
        <div className="col-span-2 col-start-3 row-start-1 md:col-start-10 md:col-span-3
        flex flex-col justify-center gap-y-10">
          <SingleCard text="4" desc="CONTENT" />
          <SingleCard text="100%" desc="OF OUR CUSTOMER SATISFY" />
        </div>
      </div>
    </section>
  );
};

export default About1;
