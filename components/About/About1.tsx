import Image from "next/image";
import React from "react";
import brandandmark from "@/assets/bg/markandbrand.svg";

const About1 = () => {
  return (
    <section className="w-full about-1 h-[100vh] flex items-center justify-center bg-black text-textPrimary text-sm py-10 px-12">
      <div className="grid grid-cols-4 grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 ">
        <div className="col-start-1 col-span-4">
          <Image
            className=" justify-center items-center pb-10"
            src={brandandmark}
            alt=""
            width={280}
            height={280}
          />
        </div>
      </div>
    </section>
  );
};

export default About1;
