import Image from "next/image";
import React from "react";
import project from "@/assets/bg/project1.svg";

const Project3 = () => {
  return (
    <section className="w-full bg-[#101010] text-textPrimary text-sm px-12">
      <div className="w-full grid grid-cols-4 grid-rows-1 md:gap-y-16 md:grid-cols-12 md:grid-flow-row pb-20">
        <div className="justify-center col-start-1 col-span-4 md:col-start-8 pt-8">
          <Image src={project} alt="Mobile Screen Project Image" width={400} height={400} />
        </div>
        <div className="col-start-1 col-span-4 md:col-span-5 md:col-start-2 md:row-start-1 font-textFamily">
          <h1 className="font-light uppercase font-Titillium text-4xl pt-10 md:pt-40 xl:pt-52">
            Projects
          </h1>
          <p className="text-sm font-thin lg:text-base font-Prompt pt-7">
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

export default Project3;
