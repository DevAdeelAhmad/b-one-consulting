import React from "react";
import About1 from "./About/About1";
import About2 from "./About/About2";
import About3 from "./About/About3";
import About4 from "./About/About4";
import Banner from "@/components/Banner";

const About = () => {
  return (
    <>
      <main id="About Us">
        <About1 />
        <About2 />
        <About3 />
        <div className="bg-[#101010]"><Banner/></div>
        <About4 />
      </main>
    </>
  );
};

export default About;
