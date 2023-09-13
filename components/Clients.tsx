import Image from "next/image";
import React from "react";


import Airfrance from "@/assets/clients/Airfrance.svg";
import AS24 from "@/assets/clients/AS24.svg";
import kesato from "@/assets/clients/kesato.svg";
import lcl1 from "@/assets/clients/lcl1.svg";
import master from "@/assets/clients/master.svg";
import totalene from "@/assets/clients/TotalEne.svg";
import imani from "@/assets/clients/IMANI.svg";
import alDiwan from "@/assets/clients/aldiwan.svg";
import cafe from "@/assets/clients/Cafe-Organic.svg";

import Gsuit from "@/assets/partners/G-suite.svg";
import fb from "@/assets/partners/FB.svg";
import figma from "@/assets/partners/Figma.svg";
import google from "@/assets/partners/Google.svg";
import miro from "@/assets/partners/miro.svg";
import roadmunk from "@/assets/partners/roadmunk.svg";

const Clients = () => {
  return (
    <section
      id="Clients & Partners"
      className="w-full relative h-[110vh] md:h-[100vh] text-textPrimary text-sm pt-12 px-12 flex flex-col justify-evenly"
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src={
            "https://res.cloudinary.com/dgkgmwoc5/video/upload/v1694503286/ClientVideoBg_wfvrvi.mp4"
          }
          type="video/mp4"
        />
      </video>

      <div className="w-full relative z-10 grid grid-cols-4 grid-rows-10 gap-y-5 lg:gap-y-16 gap-x-2 md:grid-cols-12 md:grid-flow-row">
        <div
          className="w-full col-span-4 row-span-1 col-start-1 md:col-start-2 md:col-span-10 md:row-span-1
        inline-grid md:grid-cols-12 md:grid-rows-1"
        >
          <h1 className="col-span-4 md:col-span-5 font-normal leading-[40px] text-[45px] uppercase font-Titillium">
            Clients & Partners
          </h1>
          <p className="col-span-4 md:col-span-5 lg:col-span-5 md:row-span-1 lg:text-justify text-[18px] font-light font-Prompt mt-6 md:mt-0">
            The customer remains at the center of our concerns, becoming an
            actor of his success is our goal.
          </p>
        </div>

        <div className="col-span-2 row-span-1 col-start-1 md:col-start-2">
          <h1 className="text-base font-Prompt">&#9679;&emsp;Clients</h1>
        </div>

        <div className="col-start-1 col-span-4 row-span-3 inline-grid grid-rows-3 md:row-span-1 md:col-start-2 md:col-span-12 md:grid-cols-12 md:grid-rows-1">
          <div
            className="col-span-4 row-span-3 md:row-span-1 grid-cols-3 inline-grid md:col-start-2
          md:col-span-10 md:grid-cols-9 grid-rows-3 md:grid-rows-1 gap-y-10 gap-x-5 xl:gap-x-8 2xl:gap-x-10">
            <div className="mt-9">
              <Image
                src={Airfrance}
                alt="Client Image"
                width={100}
                height={100}
              />
            </div>
            <div className="mt-5">
              <Image src={totalene} alt="Client Image" width={50} height={50} />
            </div>
            <div className="mt-6">
              <Image src={AS24} alt="Client Image" width={55} height={55} />
            </div>
            <div className="mt-5">
              <Image src={lcl1} alt="Client Image" width={55} height={55} />
            </div>
            <div className="mt-6">
              <Image src={master} alt="Client Image" width={50} height={50} />
            </div>
            <div className="mt-6">
              <Image src={kesato} alt="Client Image" width={105} height={105} />
            </div>
            <div className="mt-7">
              <Image src={imani} alt="Client Image" width={65} height={65} />
            </div>

            <div>
              <Image src={alDiwan} alt="Client Image" width={65} height={65} />
            </div>
            <div className="mt-5">
              <Image src={cafe} alt="Client Image" width={65} height={65} />
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 col-start-1 md:col-start-2 py-7 md:py-1">
          <h1 className="text-base font-Prompt">&#9679;&emsp;Partners</h1>
        </div>

        <div className="col-start-1 col-span-4 row-span-3 inline-grid md:row-span-1 md:col-start-2 md:col-span-12 md:grid-cols-12 md:grid-rows-1">
          <div
            className="col-span-4 row-span-3 md:row-span-1 grid-cols-3 inline-grid md:col-start-2 md:col-span-12 md:grid-cols-7
          md:grid-rows-1 gap-y-10 gap-x-1 xl:gap-x-2 2xl:gap-x-4"
          >
            <div className="mt-1">
              <Image src={fb} alt="Client Image" width={165} height={165} />
            </div>
            <div className="ml-5 md:ml-16">
              <Image src={figma} alt="Client Image" width={80} height={80} />
            </div>
            <div className="mt-2 ml-0 md:ml-12">
              <Image src={Gsuit} alt="Client Image" width={80} height={80} />
            </div>
            <div className="mt-1">
              <Image
                className="ml-2"
                src={google}
                alt="Client Image"
                width={155}
                height={155}
              />
            </div>
            <div className="mt-1 ml-0 md:ml-10">
              <Image src={miro} alt="Client Image" width={70} height={70} />
            </div>
            <div>
              <Image
                className="ml-2 mt-2  "
                src={roadmunk}
                alt="Client Image"
                width={140}
                height={140}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
