import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logoB1.svg";
import hamIcon from "@/assets/hamburgerMenu.svg";

const Intro = () => {
  return (
    <section className="w-full introbg h-[100vh] px-5 py-5 md:px-10 text-sm md:py-10 bg-[#101010]">
      <div className="grid grid-cols-4 md:grid-cols-12">

        <div className="col-span-4 md:col-span-11 inline-grid grid-cols-4 md:grid-cols-12 gap-5">
          <div className="col-span-2 col-start-1">
            <Image
              className="pt-2 md:pt-0"
              src={logo}
              width={150}
              height={60}
              alt="B-one Consulting"
            />
          </div>

          <div className="col-start-3 md:col-start-11 md:ml-10 lg:col-start-12 col-span-1">
            <button
              className="border-[1px] rounded-xl w-32 h-7 border-[#2C33D6] text-[#2C33D6]
              hover:border-textPrimary hover:bg-[#2C33D6] hover:text-white"
            >
              SAY- HELLO
            </button>
          </div>
          <div className="md:hidden col-start-5 col-span-1">
            <Image
              src={hamIcon}
              width={30}
              height={30}
              alt="Hamburger Menu Icon"
            />
          </div>
        </div>

        <div className="col-span-10 row-span-3 md:col-span-12 inline-grid grid-flow-row grid-cols-4
        md:grid-cols-12 gap-6 text-center py-40">
          <div className="col-span-4 md:col-start-3 row-span-1 row-start-1">
            <h1 className="text-4xl text-left md:text-5xl uppercase text-textPrimary">
              Together
            </h1>
          </div>
          <div className="col-span-10 md:col-span-7 md:col-start-5 row-span-1 row-start-2">
            <h1 className="text-4xl md:text-5xl text-left uppercase text-textPrimary">
              {`Let's Reach your goals!`}
            </h1>
          </div>
          <div className="col-span-5 text-left md:text-right md:col-start-5 row-span-1 row-start-3">
            <p className="text-xs uppercase text-textPrimary">
              Quanta autem vis amicitiae sit, ex hoc intellegi maxime
            </p>
          </div>
        </div>


        <div className="col-span-4 row-span-1 md:col-span-11 inline-grid grid-cols-4 md:grid-cols-12 gap-5">
          <div className="col-span-2 col-start-1">
            <Link href="#contact">
              <p className="text-textPrimary text-xs inline">
                Scroll for more&emsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
