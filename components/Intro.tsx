import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logoB1.svg";
import hamIcon from "@/assets/hamburgerMenu.svg";

const Intro = () => {
  return (
    <section className="w-full introbg px-5 py-5 md:px-10 text-sm md:py-10 bg-[#101010]">
      <div className="grid grid-cols-4 md:grid-rows-1 md:grid-cols-12">
        <div className="col-span-4 row-span-1 md:col-span-11 inline-grid grid-cols-4 md:grid-cols-12 gap-5">
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

        <div className="col-span-4 row-span-1 md:col-span-11 inline-grid grid-cols-4 md:grid-cols-12 gap-5">
          <div className="col-span-2 col-start-1">
            <Link href='#contact'>
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
