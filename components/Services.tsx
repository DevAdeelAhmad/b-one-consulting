"use client";
import React, { useState, useEffect } from "react";
import Modal from "@/components/ServiceModal/Modal";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full h-[100vh] text-textPrimary px-12"
    >
      <Modal />
      <div className="w-full grid grid-cols-4 grid-flow-row justify-center gap-y-[5vh] md:gap-y-[24vh]
      xl:gap-y-[22vh] gap-x-4 md:gap-x-0 lg:gap-x-20 xl:gap-x-10 2xl:gap-x-5 md:grid-cols-12 pt-4 lg:grid-flow-row"
      >
        <div className="col-start-1 lg:col-start-2 col-span-4 mt-12 md:mt-16 2xl:mt-20">
          <h2 className="text-4xl text-white font-Titillium font-light uppercase font-headingText">
            360º Services
          </h2>
        </div>
        <SingleService
          colStart={1}
          colStartMd={1}
          colStartXl={3}
          paddingTop={8}
          title="01"
          subtitle={
            <>
              Audit &<br />
              Consulting Services
            </>
          }
        />
        <SingleService
          colStart={3}
          colStartMd={4}
          colStartXl={5}
          paddingTop={8}
          title="02"
          subtitle={
            <>
              Digital
              <br />
              Solution
            </>
          }
        />
        <SingleService
          colStart={1}
          colStartMd={7}
          colStartXl={7}
          paddingTop={8}
          title="03"
          subtitle={
            <>
              Data <br />
              Solution
            </>
          }
        />
        <SingleService
        colSpan={3}
          colStart={3}
          colStartMd={10}
          colStartXl={9}
          paddingTop={8}
          title="04"
          subtitle={
            <>
              Marketing &<br />
              Branding
            </>
          }
        />
      </div>
    </section>
  );
};

const SingleService = ({
  colStart = 1,
  colStartMd = 1,
  colStartXl = 3,
  colSpan = 2,
  height = 64,
  paddingTop = 8,
  title = "01",
  subtitle = <></>,
}) => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleResize);
    setWindowSize([window.innerWidth, window.innerHeight]);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const containerStyles = `col-span-${colSpan} md:col-span-2 xl:col-span-2 col-start-${colStart} md:col-start-${colStartMd} xl:col-start-${colStartXl} h-${height} flex flex-col justify-between border-l border-solid border-textPrimary`;
  const titleStyles = `text-5xl lg:text-6xl xl:text-[70px] 2xl:text-[100px] font-Titillium ${title === "01" && windowSize[0] < 500 ? "pb-4" : "pb-10"
    } lg:pb-2 xl:pb-0`;
  const subtitleStyles =
    "font-textFamily text-base md:text-lg lg:text-xl font-Prompt uppercase xl:text-sm 2xl:text-xl";

  return (
    <div
      style={{
        gridColumnStart:
          title === "01" && windowSize[0] > 1279 ? "3" : undefined,
      }}
      className={containerStyles}
    >
      <div style={{ paddingTop: paddingTop + "rem" }}></div>
      <div className="pl-3 text-textPrimary flex flex-col gap-y-0 lg:gap-y-5">
        <h1 className={titleStyles}>{title}</h1>
        <p className={subtitleStyles}>{subtitle}</p>
      </div>
    </div>
  );
};
export default Services;
