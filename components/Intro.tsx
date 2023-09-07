"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logoB1.svg";
import hamIcon from "@/assets/hamburgerMenu.svg";

const Intro = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section
      id="Introduction"
      className="w-full h-[100vh] introbg px-5 py-5 md:px-10 text-sm md:py-10 bg-[#101010]"
    >
      <div className="grid grid-cols-4 md:grid-cols-12 grid-flow-row">
        <div className="fixed top-1 md:top-8 md:right-14 md:left-14 fixedNav col-span-4 md:col-span-12 inline-grid grid-cols-4 md:grid-cols-12 gap-5">
          <div className="col-span-2 col-start-1">
            <Link href="/">
              <Image
                className="pt-2 md:pt-0 w-52"
                src={logo}
                width={150}
                height={60}
                alt="B-one Consulting"
              />
            </Link>
          </div>

          <div className="col-start-3 md:col-start-11 xl:col-start-11 col-span-1 lg:ml-10">
            <button
              className="border-[1.5px] sayhello items-center justify-center rounded-2xl w-36 h-8
            border-[#2C33D6] text-[#2C33D6] font-Prompt bg-[#2C33D6]/20 hover:bg-[#2C33D6] hover:text-white"
            >
              SAY HELLO
            </button>
          </div>
          <div className="md:hidden col-start-5 col-span-1">
            <button onClick={handleMenuToggle}>
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  width={30}
                  height={30}
                  alt="Hamburger Menu Icon"
                />
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden fixed inset-0 bg-[#101010]`}
        >
          <div className="flex flex-col justify-top h-full items-end py-10 pr-5 space-y-6">
            <Link href="/" onClick={handleMenuToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="blue"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
            <Link href="#Introduction" onClick={handleMenuToggle}>
              <p className="text-blue-500">Introduction</p>
            </Link>
            <Link href="#About Us" onClick={handleMenuToggle}>
              <p className="text-blue-500">About Us</p>
            </Link>
            <Link href="#Services" onClick={handleMenuToggle}>
              <p className="text-blue-500">Services</p>
            </Link>
            <Link href="#Projects" onClick={handleMenuToggle}>
              <p className="text-blue-500">Projects</p>
            </Link>
            <Link href="#Clients & Partners" onClick={handleMenuToggle}>
              <p className="text-blue-500">Clients & Partners</p>
            </Link>
            <Link href="#Contact" onClick={handleMenuToggle}>
              <p className="text-blue-500">Contact</p>
            </Link>
          </div>
        </div>

        <div className="col-span-10 row-span-3 md:col-span-12 w-full flex items-center justify-center h-[90vh]">
          <div className="inline-grid grid-flow-row grid-cols-4 md:grid-cols-12 gap-1 w-full font-headingFamily">
            <div className="herotext1 col-span-4 md:col-start-2 xl:col-start-2 row-span-1 row-start-1">
              <h1 className="text-5xl md:text-6xl xl:text-[75px] uppercase font-Titillium text-textPrimary font-[300]">
                Together
              </h1>
            </div>
            <div className="herotext col-span-10 md:col-span-9 md:col-start-4 xl:col-start-[-12] row-span-1 row-start-2">
              <h1 className="text-5xl md:text-6xl xl:text-[75px] text-right font-Titillium uppercase text-textPrimary font-[300]">
                {`Let's Reach your goals!`}
              </h1>
            </div>
            <div className="col-span-3 py-5 md:py-1 md:col-span-5 text-left md:text-right md:col-start-[-8] row-span-1 row-start-3">
              <p className="text-xs lg:text-lg text-textPrimary font-Prompt tracking-widest">
                Quanta autem vis amicitiae sit, ex hoc intellegi maxime
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4 hidden lg:inline-grid row-span-1 md:col-span-11 grid-cols-4 md:grid-cols-12 gap-5">
          <div className="col-span-2 col-start-1">
            <Link href="#About Us">
              <p className="text-textPrimary font-Prompt text-[16px] inline">
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
