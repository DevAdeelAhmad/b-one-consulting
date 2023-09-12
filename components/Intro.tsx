"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logoB1.svg";
import hamIcon from "@/assets/hamburgerMenu.svg";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section
      id="Introduction"
      className="w-full h-[100vh] introbg px-5 py-5 md:px-7 lg:px-10 text-sm md:py-7 lg:py-10 bg-[#101010]"
    >
      <div className="grid grid-cols-4 md:grid-cols-12 grid-flow-row">
        <div className="fixed z-10 items-center w-[90%] lg:w-[97%] top-4 md:top-8 md:right-14 md:left-14 fixedNav col-span-4 md:col-span-12 flex justify-evenly md:inline-grid grid-cols-4 md:grid-cols-12 gap-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 col-start-1 fixed top-7 md:top-[28px] left-2 md:left-12">
            <Link href="/">
              <Image
                className="w-[140px] md:w-[210px]"
                src={logo}
                width={160}
                height={80}
                alt="B-one Consulting"
              />
            </Link>
          </div>

          <div className="col-start-3 md:col-start-10 xl:col-start-11 col-span-1 fixed top-4 md:top-[24px] right-12">
            <button
              className="border-[1.5px] items-center justify-center rounded-full w-32 md:w-40 h-9
            border-[#2C33D6] text-[#2C33D6] font-Prompt bg-[#2C33D6]/20 hover:bg-[#2C33D6]/50"
            >
              SAY HELLO
            </button>
          </div>
          <div className="md:hidden col-start-5 col-span-1 fixed top-[14px] right-1">
            <button onClick={handleMenuToggle}>
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#F1F1F1"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <Image
                  src={hamIcon}
                  width={40}
                  height={40}
                  alt="Hamburger Menu Icon"
                />
              )}
            </button>
          </div>
        </div>

        <div
          className={`${menuOpen ? "block" : "hidden"
            } md:hidden fixed inset-0 bg-[#101010]`}
        >
          <div className="flex flex-col justify-top h-full items-end py-10 pr-5 space-y-6 mt-10">
            <Link href="#Introduction" onClick={handleMenuToggle}>
              <p className="text-textPrimary">Introduction</p>
            </Link>
            <Link href="#About Us" onClick={handleMenuToggle}>
              <p className="text-textPrimary">About Us</p>
            </Link>
            <Link href="#Services" onClick={handleMenuToggle}>
              <p className="text-textPrimary">Services</p>
            </Link>
            <Link href="#Projects" onClick={handleMenuToggle}>
              <p className="text-textPrimary">Projects</p>
            </Link>
            <Link href="#Clients & Partners" onClick={handleMenuToggle}>
              <p className="text-textPrimary">Clients & Partners</p>
            </Link>
            <Link href="#Contact" onClick={handleMenuToggle}>
              <p className="text-textPrimary">Contact</p>
            </Link>
          </div>
        </div>

        <div className="col-span-10 row-span-3 md:col-span-12 w-full flex items-center justify-center h-[90vh]">
          <div className="inline-grid grid-flow-row grid-cols-4 lg:grid-cols-12 gap-1 w-full font-headingFamily">
            <div className="herotext1 col-span-4 col-start-1 lg:col-start-2 xl:col-start-2 row-span-1 row-start-1">
              <h1 className="text-5xl md:text-6xl xl:text-[75px] 3xl:text-[100px] uppercase font-Titillium text-textPrimary font-[300]">
                Together
              </h1>
            </div>
            <div className="herotext col-span-10 lg:col-span-9 lg:col-start-4 xl:col-start-[-12] row-span-1 row-start-2">
              <h1 className="text-5xl md:text-6xl xl:text-[75px] 3xl:text-[100px] uppercase font-Titillium text-textPrimary text-right font-[300]">
                {`Let's Reach your goals!`}
              </h1>
            </div>
            <div
              className="col-span-3 py-5 lg:py-1 lg:pt-4 xl:pt-5 lg:col-span-6 text-left
            lg:text-right lg:col-start-[7] xl:col-start-5 row-span-1 row-start-3"
            >
              <p className="text-xs xl:text-lg text-textPrimary text-right font-Prompt tracking-widest">
                Quanta autem vis amicitiae sit, ex hoc intellegi maxime
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4 inline-grid row-span-1 md:col-span-11 grid-cols-4 md:grid-cols-12 pl-4 cursor-pointer">
          <div className="col-span-3 col-start-1 ">
            <ScrollLink
              to="Services"
              spy={true}
              smooth={true}
              offset={1}
              duration={500}
            >
              <p className="text-textPrimary font-Prompt text-[16px]">
                Scroll for more&emsp;&nbsp;
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
            </ScrollLink>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;
