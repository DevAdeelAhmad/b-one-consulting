import React from "react";
import Project3 from "@/components/Projects/Project3";
import ProjectsModal from "./ProjectsModal/ProjectsModal";

const Projects = () => {
  return (
    <>
      <main className="w-full h-screen" id="Projects">
        <ProjectsModal />
        <Project3 />
      </main>
    </>
  );
};

export default Projects;