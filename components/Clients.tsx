import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <section className="clientbg font-extralight text-textPrimary">
      <div className="p-grid-cols-4 grid-rows-10">
        <div>
          <h1 className="text-4xl uppercase">Clients & Partners</h1>
          <p>
            The customer remains at the center of our concerns, becoming an
            actor of his success is our goal.
          </p>
        </div>
        <div>
          <h1>Clients</h1>
          {/* <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} /> */}
        </div>
        <div>
          <h1>Partners</h1>
          {/* <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} />
          <Image src={} alt="Client Image" width={} height={} /> */}
        </div>
      </div>
    </section>
  );
};

export default Clients;
