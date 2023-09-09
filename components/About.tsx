import React from "react";
import About1 from "./About/About1";
import About2 from "./About/About2";
import About3 from "./About/About3";
import About4 from "./About/About1";
import Banner from "@/components/Banner";

const About = () => {
  return (
    <>
      <section id="About Us">
        <div className="bg-[#101010]"><Banner/></div>
        <About1 />
        <About2 />
        <About3 />
      </section>
    </>
  );
};

export default About;
