import React from "react";
import Project1 from "@/components/Projects/Project1";
import ProjectsModal from "./ProjectsModal/ProjectsModal";

const Projects = () => {
  return (
    <>
      <main id="Projects">
        <ProjectsModal/>
        <Project1 />
      </main>
    </>
  );
};

export default Projects;
