import React from 'react'
import Image from 'next/image'
import Laptop from '@/assets/ServicesLaptopImg.svg'

const ProjectsInnerModal = () => {
  return (
    <div className="w-full text-left h-screen bg-black font-Prompt text-textPrimary text-sm pb-10 pt-5 md:pt-16">
      <div className="w-full grid grid-cols-4 grid-flow-row gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-36">
        <div className="col-start-1 col-span-4 row-start-1 md:col-start-2 md:col-span-5">
          <h3 className="uppercase text-xl font-Titillium md:text-2xl xl:text-3xl">
            luxury & premium website for imani
          </h3>
        </div>
        <div className="col-start-1 font-Prompt col-span-2 row-start-2 md:col-start-9 md:col-span-1">
          <div>
            <p className="text-textSecondary">Date</p>
            <p className="text-textPrimary">768859987</p>
          </div>
        </div>
        <div className="col-start-3 font-Prompt col-span-2 row-start-2 md:col-start-11 md:col-span-1">
          <p className="text-textSecondary">Work</p>
          <p className="text-textPrimary">branding</p>
          <p className="text-textPrimary">branding</p>
          <p className="text-textPrimary">branding</p>
        </div>

        <div className="col-span-4 md:col-span-10 col-start-1 md:col-start-2 inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row">
          <div className="col-span-4 md:col-span-6">
            <h1 className="text-2xl 2xl:text-3xl font-Titillium uppercase">
              klqndkn zkdozj <br />
              djizzp
            </h1>
            <br />
            <p className="pr-2 font-thin font-Prompt 2xl:text-base">
              A website has become a necessity for businesses in today&apos;s
              digital environment. It is an effective way to increase
              visibility, enhance credibility, promote products or services,
              engage with customers, facilitate online sales, and gather
              valuable insights to improve business performance.
            </p>
          </div>
          <br className='md:hidden' />
          <div className="col-span-4 md:col-span-6">
            <Image src={Laptop} width={480} height={200} alt="Laptop Image" />
          </div>
        </div>

        <div className="col-span-4 md:col-span-10 col-start-1 md:col-start-2 inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row">
          <div className="col-span-4 md:col-span-12">
            <h1 className="text-2xl 2xl:text-3xl font-Titillium uppercase">
              klqndkn zkdozj <br />
              djizzp
            </h1>
            <br />
            <p className="pr-2 font-thin xl:text-base font-Prompt ">
              A website has become a necessity for businesses in today&apos;s
              digital environment. It is an effective way to increase
              visibility, enhance credibility, promote products or services,
              engage with customers, facilitate online sales, and gather
              valuable insights to improve business performance.
            </p>
          </div>
        </div>

        <div className="col-span-4 md:col-span-10 col-start-1 md:col-start-2 flex flex-row">
          <div className="col-span-4 md:col-span-6 flex-1">
            <Image className="mt-4 md:mt-0" src={Laptop} width={445} height={300} alt="Laptop Image" />
          </div>
          <div className="col-span-4 md:col-span-6 flex-1">
            <Image className="ml-2 md:ml-2 lg:ml-6 mt-4 md:mt-0" src={Laptop} width={445} height={300} alt="Laptop Image"/>
          </div>
        </div>

        <div className="col-span-4 md:col-span-10 col-start-1 md:col-start-2 inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row">
          <div className="col-span-4 md:col-span-12">
            <Image src={Laptop} width={1000} height={400} alt="Laptop Image" />
          </div>
        </div>

        <div className="col-span-4 md:col-span-10 col-start-1 md:col-start-2 inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row">
          <div className="col-span-4 md:col-span-6">
            <h1 className="text-2xl xl:text-3xl font-Titillium uppercase">
              klqndkn zkdozj <br />
              djizzp
            </h1>
            <br />
            <p className="pr-2 font-thin xl:text-base font-Prompt ">
              A website has become a necessity for businesses in today&apos;s
              digital environment. It is an effective way to increase
              visibility, enhance credibility, promote products or services,
              engage with customers, facilitate online sales, and gather
              valuable insights to improve business performance.
            </p>
          </div>
          <div className="col-span-4 md:col-span-6 mt-5 md:mt-0">
            <Image src={Laptop} width={480} height={300} alt="Laptop Image" />
          </div>
        </div>
      </div>
      <div className="fixed hidden md:flex bottom-8 uppercase left-16">
        <span className="text-lg mr-4 font-light text-white">Projects</span>
      </div>
    </div>
  );
}

export default ProjectsInnerModal