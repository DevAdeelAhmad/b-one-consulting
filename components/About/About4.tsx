import React, { ReactElement } from "react";

interface ISingleCardProps {
  text: string;
  desc : string; 
}

const SingleCard = ({ text, desc } :ISingleCardProps) => {
  return (
    <div className="w-40 border border-[#818489] rounded-[1.75rem] bg-black text-center py-[1.75rem] font-textFamily">
      <h1 className="text-2xl font-semibold font-textFamily">{text}</h1>
      <p className="text-[10px] font-textFamily">{desc}</p>
    </div>
  );
};

const About4 = () => {
  return (
    <section className="w-full about4 text-textPrimary text-sm py-32 px-2 md:px-12">
      <div className="grid grid-cols-3 gap-y-5 md:gap-y-16 gap-x-2 md:grid-flow-row">
            <SingleCard text="+10" desc="YEARS" />
            <SingleCard text="+" desc="PROJECTS" />
            <SingleCard text="+1000" desc="CONTENT" />
            <SingleCard text="100%" desc="OF OUR CUSTOMER SATISFY" />
      </div>
    </section>
  );
};

export default About4;
