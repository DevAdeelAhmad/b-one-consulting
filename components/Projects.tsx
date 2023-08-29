import React from "react";
import Project1 from "@/components/Projects/Project1";
import Project2 from "@/components/Projects/Project2";
import Project3 from "@/components/Projects/Project3";
import Modal from "@/components/Modal";

const Projects = () => {
  return (
    <>
      <main id="Projects">
        <Project1 />
        <Project2 />
        <Project3 />
        {/* <Modal
          sectionName="Our Projects"
          modalContent={<p>Content for Our Projects</p>}
        /> */}
      </main>
    </>
  );
};

export default Projects;
