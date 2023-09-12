import Image from "next/image";
import React from "react";
import project from "@/assets/bg/project1.svg";
import ProjectsModal from "@/components/ProjectsModal/ProjectsModal";

const Project3 = () => {
  return (
    <section className="w-full h-[100vh]  text-textPrimary text-sm px-12">
      <div className="w-full h-[100vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-around gap-x-20 gap-y-0">
        <div className="md:flex-1 flex flex-col justify-center font-Prompt md:ml-10 xl:ml-16 2xl:ml-40">
          <h1 className="font-light uppercase font-Titillium text-4xl">
            Projects
          </h1>
          <p className="text-md font-thin lg:text-xl font-Prompt pt-7">
            Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non
            probes eius, a quo dissentias. quid enim me prohiberet aojaoca^
            Epicureumon probes eius, a quo dissentias. quid enim me prohiberet
            aojaoca^ Epicureumon probes eius, a quo dissentias. quid enim me
            prohiberet aojaoca^ Epicureum
          </p>
        </div>
        <div className="md:flex-1 flex md:justify-center md:items-center">
          <Image className="w-[70vw] h-[70vh] md:w-[30vw] md:h-[60vh]" src={project} alt="Mobile Screen Project Image" width={1000} height={1000} />
        </div>
      </div>
      <ProjectsModal />
    </section>
  );
};

export default Project3;
