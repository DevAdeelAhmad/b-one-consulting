import React from "react";
import innerser1 from "@/assets/bg/innerservice1.svg";
import innerser2 from "@/assets/bg/innerservice2.svg";
import Image from "next/image";

const DataServicesInnerPage = () => {
  return (
    <div className="w-full text-left h-screen bg-black font-Prompt text-textPrimary text-sm pb-10 pt-5 md:pt-16 px-0 md:px-12">
      <div className="w-full grid grid-cols-4 grid-flow-row gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-36">
        <div className="col-start-1 col-span-4 row-start-1 md:col-start-2 md:col-span-4">
          <h3 className="uppercase text-xl font-Titillium md:text-2xl xl:text-3xl">
            Managing Your Data for Success
          </h3>
        </div>
        <div className="col-start-1 col-span-4 font-thin row-start-2 md:col-start-2 md:col-span-10">
          <p>
            Data management encompasses the processes, policies, and tools
            necessary for effective data management within an organization. In
            the current data-driven landscape, it is crucial for businesses to
            properly manage their data in order to make informed decisions and
            gain a competitive advantage.
          </p>
        </div>
        <div className="col-start-1 col-span-4 row-start-3 md:col-start-2 md:col-span-6">
          <p className="uppercase text-textSecondary font-thin">The Benefits of Data Management</p>
        </div>


        <div className="col-start-1 md:col-start-2 row-start-4 col-span-4 md:col-span-10 inline-grid grid-cols-4
        md:grid-cols-12 grid-flow-row">

          <div className="col-start-1 row-start-1 uppercase col-span-12 md:col-span-8 grid-rows-4 md:grid-rows-2
          inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row gap-y-4">

            <div className="col-start-1 md:col-start-1 col-span-4 md:col-span-6 text-xs 2xl:text-sm row-start-1">
              <p className="font-bold uppercase"> Informed Decision Making</p>
              <p className="font-extralight pt-3 uppercase pr-3">
                Well-managed data provides decision-makers with accurate and
                reliable information to make informed decisions.
              </p>
            </div>

            <div className="col-start-1 md:col-start-1 col-span-4 md:col-span-5 text-xs 2xl:text-sm row-start-2">
              <p className="font-bold uppercase">Cost Efficiency</p>
              <p className="font-extralight pt-3 uppercase">
                Efficient data management reduces costs associated with poor data
                quality, processing errors, and non-compliance.
              </p>
            </div>


            <div className="col-start-1 md:col-start-7 col-span-4 md:col-span-6 row-start-3 md:row-start-1 text-xs 2xl:text-sm">
              <p className="font-bold">Competitiveness</p>
              <p className="font-extralight pt-3">
                Companies that fully leverage their data and use it for innovation
                can gain a competitive edge in the market.
              </p>
            </div>

            <div className="col-start-1 md:col-start-7 col-span-4 md:col-span-6 row-start-4 md:row-start-2 text-xs 2xl:text-sm">
              <p className="font-bold">Regulatory Compliance</p>
              <p className="font-extralight pt-3">
                Data management helps comply with legal and regulatory requirements
                regarding data protection and privacy.
              </p>
            </div>

          </div>
          <div className="col-start-8 md:row-start-1 row-start-2 col-span-4 md:col-span-4">
            <Image src={innerser1} alt="Service Image 1" width={400} height={400} />
          </div>
        </div>




        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-6 md:row-start-5">
          <h3 className="uppercase md:text-2xl font-Titillium lg:text-3xl">
            The power of reporting and data visualization
          </h3>
        </div>

        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-10 md:row-start-6">
          <div className="col-start-1 col-span-4 row-start-10 md:col-start-2 md:col-span-8 md:row-start-6">
            <p className="font-thin leading-normal">
              In the world of data, it is essential to know how to effectively
              present and communicate key information. Data visualization plays a
              central role in the reporting process by making information more
              accessible, understandable, and visually appealing. It facilitates
              the communication of key insights, informed decision-making, and
              allows users to interact with data for deeper exploration. The
              combination of well-structured reporting and effective data
              visualizations helps create relevant and informative reports.
            </p>
          </div>
        </div>

        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-4 row-start-7 pt-5 pb-5">
          <p className="uppercase text-textSecondary font-thin">The Benefits of Data Management</p>
        </div>


        <div className="col-start-1 md:col-start-2 row-start-8 col-span-4 md:col-span-10 inline-grid grid-cols-4
        md:grid-cols-12 grid-flow-row">

          <div className="col-start-1 row-start-1 uppercase col-span-12 md:col-span-8 grid-rows-4 md:grid-rows-2
          inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row gap-y-4">

            <div className="col-start-1 md:col-start-1 col-span-4 md:col-span-6 text-xs 2xl:text-sm row-start-1">
              <p className="font-bold uppercase">Improved understanding</p>
              <p className="font-extralight pt-3 uppercase pr-3">

                Visualizations help grasp information and insights quickly.
              </p>
            </div>

            <div className="col-start-1 md:col-start-1 col-span-4 md:col-span-5 text-xs 2xl:text-sm row-start-2">
              <p className="font-bold uppercase">Pattern discovery</p>
              <p className="font-extralight pt-3 uppercase">

                Charts enable the identification of trends and relationships among data.
              </p>
            </div>


            <div className="col-start-1 md:col-start-7 col-span-4 md:col-span-6 row-start-3 md:row-start-1 text-xs 2xl:text-sm">
              <p className="font-bold">Effective communication</p>
              <p className="font-extralight pt-3">

                Visualizations make presentations more engaging and memorable.
              </p>
            </div>

            <div className="col-start-1 md:col-start-7 col-span-4 md:col-span-6 row-start-4 md:row-start-2 text-xs 2xl:text-sm">
              <p className="font-bold">Informed decision-making</p>
              <p className="font-extralight pt-3">
                Informed decision-making
                Visual data facilitates fact-based decision-making.
              </p>
            </div>

          </div>
          <div className="col-start-8 md:row-start-1 row-start-2 col-span-4 md:col-span-4">
            <Image className="pt-12 md:pt-0" src={innerser2} alt="Service Image 1" width={400} height={400} />
          </div>
        </div>
      </div>
      <div className="fixed hidden md:flex bottom-8 uppercase left-16">
          <span className="text-lg mr-4 font-light text-white">Data Solution</span>
        </div>
    </div>
  );
};

export default DataServicesInnerPage