import React from "react";
import Project1 from "@/components/Projects/Project1";
import Project2 from "@/components/Projects/Project2";
import Project3 from "@/components/Projects/Project3";
import ProjectsModal from "./ProjectsModal/ProjectsModal";

const Projects = () => {
  return (
    <>
      <main id="Projects">
        <ProjectsModal/>
        {/* <Project1 />
        <Project2 /> */}
        <Project3 />
      </main>
    </>
  );
};

export default Projects;