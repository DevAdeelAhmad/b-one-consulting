import Image from "next/image";
import React from "react";
import Airfrance from "../assets/clients/Airfrance.svg";
import AS24 from "../assets/clients/AS24.svg";
import kesato from "../assets/clients/kesato.svg";
<<<<<<< HEAD
import LCL from "../assets/clients/LCL.svg";
import Mastercard from "../assets/clients/Mastercard.svg";
import TotalEne from "../assets/clients/TotalEne.svg";
=======
import lcl1 from "../assets/clients/lcl1.svg";
import master from "../assets/clients/master.svg";
import totalene from "../assets/clients/totalene.svg";
>>>>>>> 2bbcf580ab4b0a956e8340d8942933cc820530cf

import Gsuit from "../assets/partners/G-suite.svg";
import fb from "../assets/partners/fb.svg";
import figma from "../assets/partners/figma.svg";
import google from "../assets/partners/Google.svg";
import miro from "../assets/partners/miro.svg";
import roadmunk from "../assets/partners/roadmunk.svg";

const Clients = () => {
  return (
    <section className="clientbg text-textPrimary text-sm py-6 px-12">
      <div className="grid grid-cols-4 grid-rows-10 gap-y-5 gap-x-2 md:grid-cols-12 md:grid-rows-5">
        <div
          className="col-span-4 row-span-1 col-start-1 md:col-start-2 md:col-span-12 md:row-span-7
        md:inline-grid md:grid-cols-12 md:grid-rows-1"
        >
          <h1 className="md:col-span-7 text-2xl font-normal uppercase">
            Clients & Partners
          </h1>
          <p className="md:col-span-5 text-justify text-xs py-4 font-extralight">
            The customer remains at the center of our concerns, becoming an
            actor of his success is our goal.
          </p>
        </div>

        <div className="col-span-2 row-span-1 col-start-1">
          <h1 className="text-sm">&#9679;&emsp;Clients</h1>
        </div>

        <div className="col-start-1 col-span-4">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Image
                className="mt-6"
                src={Airfrance}
                alt="Client Image"
                width={180}
                height={180}
              />
            </div>
            <div>
              <Image
                className="ml-3"
                src={totalene}
                alt="Client Image"
                width={90}
                height={90}
              />
            </div>
            <div>
              <Image src={AS24} alt="Client Image" width={100} height={100} />
            </div>
            <div>
              <Image
                className="ml-4"
                src={lcl1}
                alt="Client Image"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image src={master} alt="Client Image" width={90} height={90} />
            </div>
            <div>
              <Image
                className="ml-3 mt-2"
                src={kesato}
                alt="Client Image"
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 col-start-1">
          <h1 className="text-sm">&#9679;&emsp;Partners</h1>
        </div>

        <div className="col-start-1 col-span-4">
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Image
                className="row-start-1 mt-3"
                src={fb}
                alt="Client Image"
                width={175}
                height={175}
              />
            </div>
            <div>
              <Image
                className="ml-2"
                src={figma}
                alt="Client Image"
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image src={Gsuit} alt="Client Image" width={80} height={80} />
            </div>
            <div>
              <Image
                className="ml-2"
                src={google}
                alt="Client Image"
                width={175}
                height={175}
              />
            </div>
            <div>
              <Image src={miro} alt="Client Image" width={90} height={90} />
            </div>
            <div>
              <Image
                className="ml-2 mt-2  "
                src={roadmunk}
                alt="Client Image"
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
