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
      className="w-full introbg px-5 py-5 md:px-10 text-sm md:py-10 bg-[#101010]"
    >
      <div className="grid grid-cols-4 md:grid-cols-12 grid-flow-row">
        <div className="fixed top-5 md:right-14 md:left-14 fixedNav col-span-4 md:col-span-12 inline-grid grid-cols-4 md:grid-cols-12 gap-5">
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

          <div className="col-start-3 sayhello md:col-start-11 xl:col-start-11 col-span-1 lg:ml-10">
            <button
              className="border-[1px] items-center justify-center rounded-xl w-36 h-8
            border-[#2C33D6] text-[#2C33D6] hover:bg-[#2C33D6] hover:text-white"
            >
              SAY- HELLO
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

        <div
          className="col-span-10 row-span-3 py-64 md:col-span-12 inline-grid grid-flow-row grid-cols-4
        md:grid-cols-12 gap-1 md:gap-6 md:py-40 px-6 md:px-0"
        >
          <div className="herotext col-span-4 md:col-start-2 lg:col-start-3 xl:col-start-3 row-span-1 row-start-1">
            <h1 className="text-4xl text-left md:text-5xl uppercase text-textPrimary">
              Together
            </h1>
          </div>
          <div className="herotext col-span-10 md:col-span-7 md:col-start-5 xl:col-start-5 row-span-1 row-start-2">
            <h1 className="text-4xl md:text-5xl text-left uppercase text-textPrimary">
              {`Let's Reach your goals!`}
            </h1>
          </div>
          <div className="col-span-3 py-5 md:py-0 md:col-span-5 text-left md:text-right md:col-start-5 row-span-1 row-start-3">
            <p className="text-xs text-textPrimary">
              Quanta autem vis amicitiae sit, ex hoc intellegi maxime
            </p>
          </div>
        </div>

        <div className="col-span-4 hidden lg:inline-grid row-span-1 md:col-span-11 grid-cols-4 md:grid-cols-12 gap-5">
          <div className="col-span-2 col-start-1">
            <Link href="#About Us">
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
