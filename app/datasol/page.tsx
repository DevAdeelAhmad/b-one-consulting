import React from "react";
import innerser1 from "@/assets/bg/innerservice1.svg";
import innerser2 from "@/assets/bg/innerservice2.svg";
import Image from "next/image";

const page = () => {
  return (
    <section className="w-full bg-[#101010] text-textPrimary text-sm pb-10 pt-4 px-12">
      <div className="w-full grid grid-cols-4 grid-rows-14 gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-20">
        <div className="col-start-2 col-span-2 row-start-1">
          <h3 className="uppercase ">Managing Your Data for Success</h3>
        </div>
        <div className="col-start-1 col-span-4 row-start-2">
          <p>
            Data management encompasses the processes, policies, and tools
            necessary for effective data management within an organization. In
            the current data-driven landscape, it is crucial for businesses to
            properly manage their data in order to make informed decisions and
            gain a competitive advantage.
          </p>
        </div>
        <div className="col-start-1 col-span-4 row-start-3">
          <p className="uppercase font-thin">The Benefits of Data Management</p>
        </div>
        <div className="col-start-1 col-span-2 row-start-4">
          <p className="font-bold"> Informed Decision Making</p>
          <p>
            Well-managed data provides decision-makers with accurate and
            reliable information to make informed decisions.
          </p>
        </div>
        <div className="col-start-3 col-span-2 row-start-4">
          <p className="font-bold"> Competitiveness</p>
          <p>
            Companies that fully leverage their data and use it for innovation
            can gain a competitive edge in the market.
          </p>
        </div>
        <div className="col-start-1 col-span-4 row-start-5">
          <Image src={innerser1} alt="" width={350} height={100} />
        </div>

        <div className="col-start-1 col-span-2 row-start-6">
          <p className="font-bold">Cost Efficiency</p>
          <p>
            Efficient data management reduces costs associated with poor data
            quality, processing errors, and non-compliance.
          </p>
        </div>
        <div className="col-start-3 col-span-2 row-start-6">
          <p className="font-bold">Regulatory Compliance</p>
          <p>
            Data management helps comply with legal and regulatory requirements
            regarding data protection and privacy.
          </p>
        </div>
        <div className="col-start-1 col-span-4 row-start-7">
          <h3 className="uppercase">
            The power of reporting and data visualization
          </h3>
        </div>
        <div className="col-start-1 col-span-4 row-start-8">
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

        <div className="col-start-1 col-span-4 row-start-11">
          <p className="uppercase font-thin">The Benefits of Data Management</p>
        </div>
        <div className="col-start-1 col-span-2 row-start-12">
          <p className="font-bold"> Informed Decision Making</p>
          <p>
            Well-managed data provides decision-makers with accurate and
            reliable information to make informed decisions.
          </p>
        </div>
        <div className="col-start-3 col-span-2 row-start-12">
          <p className="font-bold"> Competitiveness</p>
          <p>
            Companies that fully leverage their data and use it for innovation
            can gain a competitive edge in the market.
          </p>
        </div>
        <div className="col-start-1 col-span-4 row-start-13">
          <Image src={innerser2} alt="" width={350} height={100} />
        </div>

        <div className="col-start-1 col-span-2 row-start-14">
          <p className="font-bold">Cost Efficiency</p>
          <p>
            Efficient data management reduces costs associated with poor data
            quality, processing errors, and non-compliance.
          </p>
        </div>
        <div className="col-start-3 col-span-2 row-start-14">
          <p className="font-bold">Regulatory Compliance</p>
          <p>
            Data management helps comply with legal and regulatory requirements
            regarding data protection and privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
