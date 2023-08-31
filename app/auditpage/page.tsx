import React from "react";

const auditpage = () => {
  return (
    <section className="w-full bg-[#101010] text-textPrimary text-sm pb-10 pt-4 px-12">
      {/* main div */}
      <div className="w-full grid grid-cols-4 grid-rows-12 gap-y-5 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-20">
        {/* hadding div */}
        <div className="col-start-1 col-span-3 row-start-1 md:col-start-1 md:col-span-6 pt-10">
          <h1 className="md:text-4xl text-xl uppercase">Why conduct an audit?</h1>
        </div>
        {/* paragraph div */}
        <div className=" col-start-1 col-span-4 row-start-2 md:row-start-2 md:col-start-1 md:col-span-7">
          <p className="">
            An audit allows for an assessment of your company's current
            situation. It helps identify areas that require improvements or
            adjustments, whether it's internal processes, resource management,
            or business strategy.
          </p>
        </div>

        <div className="row-start-3 col-start-1 col-span-3 md:row-start-3 md:col-start-1 md:col-span-4 pt-10">
          <h1 className="md:text-4xl text-xl uppercase">The audit process</h1>
        </div>

        {/* next three similar divs */}

        <div className="row-start-4 col-start-1 col-span-1 md:row-start-4 md:col-start-1 md:col-span-1 rounded-full bg-[#F1F1F1]">
          <p className="text-black flex text-center justify-center md:text-2xl text-xl font-bold">
            1
          </p>
        </div>
        <div className="row-start-5 col-start-1 col-span-3 md:row-start-4 md:col-start-3 md:col-span-3">
          <p className="md:text-2xl text-lg uppercase">
            Conducting a diagnosis of current processes & information systems.
          </p>
        </div>
        <div className="row-start-6 col-start-1 col-span-4 md:row-start-4 md:col-start-7 md:col-span-5 pb-10 md:pb-20">
          <p>
            The diagnosis of current processes and information systems involves
            evaluating an enterprise's operational processes and technological
            infrastructure to identify gaps and improvement opportunities.
          </p>
        </div>

        {/* next three similar divs */}

        <div className="row-start-7 col-start-1 col-span-1 md:row-start-5 md:col-start-1 md:col-span-1 rounded-full bg-[#F1F1F1]">
          <p className="text-black flex text-center justify-center md:text-2xl text-xl font-bold">
            2
          </p>
        </div>
        <div className="row-start-8 col-start-1 col-span-2 md:row-start-5 md:col-start-3 md:col-span-2">
          <p
           className="md:text-2xl text-lg uppercase">
            synthesis and developement of recommendations
          </p>
        </div>
        <div className="row-start-9 col-start-1 col-span-4 md:row-start-5 md:col-start-7 md:col-span-5 pb-10 md:pb-20">
          <p>
            Based on the identification of problems and opportunities,
            recommendations are formulated to address the issues and leverage
            the opportunities. These recommendations are specific, realistic,
            and aligned with the diagnostic objectives. They may cover various
            aspects such as strategy, processes, resources, organizational
            structure, etc.
          </p>
        </div>

        {/* next three similar divs */}

        <div className="row-start-10 col-start-1 col-span-1 md:row-start-6 md:col-start-1 md:col-span-1 rounded-full bg-[#F1F1F1]">
          <p className="text-black flex text-center justify-center md:text-2xl text-xl font-bold">
            3
          </p>
        </div>
        <div className="row-start-11 col-start-1 col-span-3 md:row-start-6 md:col-start-3 md:col-span-2">
          <p className="md:text-2xl text-lg uppercase">implementation and execution </p>
        </div>
        <div className="row-start-12 col-start-1 col-span-4 md:row-start-6 md:col-start-7 md:col-span-5">
          <p>
            Once the recommendations have been communicated, the next step is to
            implement them. This involves planning actions, allocating
            resources, monitoring progress, and making adjustments if necessary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default auditpage;