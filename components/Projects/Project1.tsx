import Image from "next/image";
import React from "react";
import project from "@/assets/bg/project1.svg";

const Project1 = () => {
  return (
    <section className="w-full h-[100vh] bg-[#101010] text-textPrimary text-sm py-20 px-12">
      <div className="w-full grid grid-cols-4 grid-rows-1 md:gap-y-16 md:grid-cols-12 md:grid-flow-row pb-20">
        <div className="justify-center col-start-1 col-span-4 md:col-start-8 pt-8">
          <Image
            className="bg-fixed"
            src={project}
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className=" col-start-1 col-span-4 md:col-span-5 md:col-start-2 md:row-start-1 font-textFamily">
          <h1 className="font-light font-Titillium text-5xl pt-10 md:pt-40 xl:pt-52">
            PROJECTS
          </h1>
          <p className="lg:text-[1rem] leading-10 text-textPrimary tracking-wide font-Prompt pt-7">
            Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non
            probes eius, a quo dissentias. quid enim me prohiberet aojaoca^
            Epicureumon probes eius, a quo dissentias. quid enim me prohiberet
            aojaoca^ Epicureumon probes eius, a quo dissentias. quid enim me
            prohiberet aojaoca^ Epicureum
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project1;
