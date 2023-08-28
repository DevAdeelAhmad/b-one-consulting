import Image from "next/image";
import React from "react";
import brandandmark from "@/assets/bg/markandbrand.svg";

const About1 = () => {
  return (
    <section className="w-full about-1 about1 h-[100vh] text-textPrimary text-sm py-10 px-12">
      <div className="grid  grid-cols-4 grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 md:grid-rows-1">
        <div className="col-start-1 col-span-4 md:inline-grid md:h-72 row-span-1 flex items-center justify-center">
          <Image
            className="justify-center items-center bg-transparent pb-10"
            src={brandandmark}
            alt=""
            width={280}
            height={280}
          />
        </div>
        <div className="hidden md:col-span-6 col-start-1 md:grid"></div>
      </div>
    </section>
  );
};

export default About1;
