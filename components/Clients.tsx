import Image from "next/image";
import React from "react";
import Airfrance from "../assets/clients/Airfrance.svg";
import AS24 from "../assets/clients/AS24.svg";
import kesato from "../assets/clients/kesato.svg";
import LCL from "../assets/clients/LCL.svg";
import Mastercard from "../assets/clients/Mastercard.svg";
import TotalEne from "../assets/clients/TotalEne.svg";

import Gsuit from "../assets/partners/G-suite.svg";
import fb from "../assets/partners/fb.svg";
import figma from "../assets/partners/figma.svg";
import google from "../assets/partners/Google.svg";
import miro from "../assets/partners/miro.svg";
import roadmunk from "../assets/partners/roadmunk.svg";

const Clients = () => {
  return (
    <section className="clientbg font-extralight text-textPrimary">
      <div className="px-8 py-4 grid-cols-4 grid-rows-10">
        <div>
          <h1 className="text-4xl uppercase col-span-3">Clients & Partners</h1>
          <p className="text-justify text-xs py-4">
            The customer remains at the center of our concerns, becoming an
            actor of his success is our goal.
          </p>
        </div>
        <div>
          <h1 className="text-[13px]">&#9679;&emsp;Clients</h1>
          <Image
            src={Airfrance.svg}
            alt="Client Image"
            width={10}
            height={10}
          />
          <Image src={Airfrance} alt="Client Image" width={200} height={200} />
          <Image src={AS24} alt="Client Image" width={200} height={200} />
          <Image src={kesato} alt="Client Image" width={200} height={200} />
          <Image src={LCL} alt="Client Image" width={200} height={200} />
          <Image src={Mastercard} alt="Client Image" width={200} height={200} />
          <Image src={TotalEne} alt="Client Image" width={200} height={200} />

        </div>
        <div>
          <h1 className="text-[13px]">&#9679;&emsp;Partners</h1>
          <Image src={fb} alt="Client Image" width={200} height={200} />
          <Image src={figma} alt="Client Image" width={200} height={200} />
          <Image src={Gsuit} alt="Client Image" width={200} height={200} />
          <Image src={google} alt="Client Image" width={200} height={200} />
          <Image src={miro} alt="Client Image" width={200} height={200} />
          <Image src={roadmunk} alt="Client Image" width={200} height={200} />

        </div>
      </div>
    </section>
  );
};

export default Clients;
