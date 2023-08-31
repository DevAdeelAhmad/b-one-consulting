// import React from "react";

// const About1 = () => {
//   return (
//     <section className="w-full about-1 h-[100vh] flex items-center justify-center bg-black text-textPrimary text-sm py-10 px-12">
//       <div className="grid grid-cols-4 grid-flow-row text-sm md:gap-y-16 md:grid-cols-12 ">
//         <div className="about1 hidden md:inline-grid md:h-72 col-span-4 col-start-3"></div>
//         <p className="col-span-4 row-span-1 flex items-center justify-center">
//          B one marketing and branding
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About1;

import React from "react";
import Image from "next/image";
import about from "@/assets/bg/About1Png.png";
import Logo from "@/assets/logoTransparent.svg";
import marketing from "@/assets/about/marketing.svg";

const About1 = () => {
  return (
    <section className="w-full h-[60vh] about1bg md:h-[100vh] bg-[#101010] text-textPrimary flex items-center justify-center text-sm pb-10 pt-4 px-4 md:px-12">
      <div className="grid grid-cols-4 grid-rows-1 md:grid-cols-12 xl:gap-x-20">
        <div className="justify-center hidden md:flex col-start-1 col-span-4 md:col-start-3 pt-8">
          <Image src={about} alt="" width={400} height={400} />
        </div>
        <div className="col-start-1 col-span-4 md:col-span-5 md:col-start-8">
          <div className="md:pt-40 xl:pt-52">
            <Image src={Logo.src} alt="" width={500} height={40} />
          </div>

          <Image src={marketing.src} alt="" width={500} height={40} />
        </div>
      </div>
    </section>
  );
};

export default About1;
