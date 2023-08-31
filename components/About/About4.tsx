import React, { ReactElement } from "react";

interface ISingleCardProps {
  text: string;
  desc : string; 
}
interface ISingleCol {
  title: string;
  children?: ReactElement<any, any>;
}

// SingleCol component
const SingleCol = ({ title, children }: ISingleCol) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2 uppercase text-center mb-8">{title}</h2>
      <div className="flex items-center justify-center gap-8 flex-col">
        {children}
      </div>
    </div>
  );
};

// SingleCard component
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
        <SingleCol title="dubaï" />
        <SingleCol title="Paris">
          <>
            <SingleCard text="+10" desc="YEARS" />
            <SingleCard text="+1000" desc="PROJECTS" />
            <SingleCard text="4" desc="CONTENT" />
            <SingleCard text="100%" desc="OF OUR CUSTOMER SATISFY" />
          </>
        </SingleCol>
        <SingleCol title="Bali" />
      </div>
    </section>
  );
};

export default About4;
