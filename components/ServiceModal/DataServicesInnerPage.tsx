import React from "react";
import innerser1 from "@/assets/bg/innerservice1.svg";
import innerser2 from "@/assets/bg/innerservice2.svg";
import Image from "next/image";

const DataServicesInnerPage = () => {
  return (
    <div className="w-full text-left h-screen bg-black text-textPrimary text-sm pb-10 pt-16 px-12">
      <div className="w-full grid grid-cols-4 grid-rows-14 gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-20">
        <div className="col-start-1 col-span-4 row-start-1 md:col-start-2 md:col-span-4">
          <h3 className="uppercase text-base md:text-2xl">
            Managing Your Data for Success
          </h3>
        </div>
        <div className="col-start-1 col-span-4 row-start-2 md:col-start-2 md:col-span-10">
          <p>
            Data management encompasses the processes, policies, and tools
            necessary for effective data management within an organization. In
            the current data-driven landscape, it is crucial for businesses to
            properly manage their data in order to make informed decisions and
            gain a competitive advantage.
          </p>
        </div>
        <div className="col-start-1 col-span-4 row-start-3 md:col-start-2 md:col-span-6">
          <p className="uppercase font-thin">The Benefits of Data Management</p>
        </div>
        <div className="col-start-1 uppercase col-span-4 row-start-4 md:row-start-4 md:col-start-2 md:col-span-3">
          <div className="col-start-1 col-span-2 row-start-4 md:col-start-2 md:col-span-2 md:row-start-4">
            <p className="font-bold"> Informed Decision Making</p>
            <p>
              Well-managed data provides decision-makers with accurate and
              reliable information to make informed decisions.
            </p>
          </div>

          <div className="col-start-1 col-span-2 row-start-4 md:col-start-2 md:col-span-2 md:row-start-4 pt-10">
            <p className="font-bold">Cost Efficiency</p>
            <p>
              Efficient data management reduces costs associated with poor data
              quality, processing errors, and non-compliance.
            </p>
          </div>
        </div>


        <div className="col-start-1 uppercase col-span-4 row-start-5 md:col-start-5 md:col-span-3 md:row-start-4">
          <p className="font-bold">Competitiveness</p>
          <p>
            Companies that fully leverage their data and use it for innovation
            can gain a competitive edge in the market.
          </p>
        </div>

        <div className="col-start-1 regulatory uppercase col-span-4 row-start-6 md:col-start-5 md:col-span-3 md:row-start-4 md:mt-[12.5rem] lg:mt-[10rem]">
          <p className="font-bold">Regulatory Compliance</p>
          <p>
            Data management helps comply with legal and regulatory requirements
            regarding data protection and privacy.
          </p>
        </div>

        <div className="col-start-1 col-span-4 row-start-7 md:col-start-8 md:row-start-4">
          <Image src={innerser1} alt="Service Image 1" width={300} height={230} />
        </div>


        <div className="col-start-1 col-span-4 row-start-9 md:col-start-2 md:col-span-6 md:row-start-5 ">
          <h3 className="uppercase md:text-2xl lg:text-3xl">
            The power of reporting and data visualization
          </h3>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-10 md:row-start-6">
          <div className="col-start-1 col-span-4 row-start-10 md:col-start-2 md:col-span-8 md:row-start-6">
            <p>
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

        <div className="col-start-1 col-span-4 row-start-11 md:col-start-2 md:col-span-4 row-start-7 pt-5 pb-5">
          <p className="uppercase font-thin">The Benefits of Data Management</p>
        </div>

        <div className="col-start-1 uppercase col-span-4 row-start-8 md:row-start-8 row-span-2 md:col-start-2 md:col-span-3">
          <div className="col-start-1 col-span-2 row-start-4 md:col-start-2 md:col-span-2 md:row-start-4">
            <p className="font-bold"> Informed Decision Making</p>
            <p>
              Well-managed data provides decision-makers with accurate and
              reliable information to make informed decisions.
            </p>
          </div>

          <div className="col-start-1 col-span-2 row-start-4 md:col-start-2 md:col-span-2 md:row-start-4 pt-10">
            <p className="font-bold">Cost Efficiency</p>
            <p>
              Efficient data management reduces costs associated with poor data
              quality, processing errors, and non-compliance.
            </p>
          </div>
        </div>


        <div className="col-start-1 uppercase col-span-4 row-start-8 md:col-start-5 md:col-span-3 md:row-start-8">
          <p className="font-bold">Competitiveness</p>
          <p>
            Companies that fully leverage their data and use it for innovation
            can gain a competitive edge in the market.
          </p>
        </div>

        <div className="col-start-1 regulatory uppercase col-span-4 row-start-9 md:col-start-5 md:col-span-3 md:row-start-8 pt-10">
          <p className="font-bold">Regulatory Compliance</p>
          <p>
            Data management helps comply with legal and regulatory requirements
            regarding data protection and privacy.
          </p>
        </div>

        <div className="col-start-1 col-span-4 md:col-start-8 row-start-8 mb-20">
          <Image src={innerser2} alt="Service Image 2" width={300} height={230} />
        </div>
      </div>
    </div>
  );
};

export default DataServicesInnerPage