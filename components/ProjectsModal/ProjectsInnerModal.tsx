import React from 'react'
import Image from 'next/image'
import Laptop from '@/assets/ServicesLaptopImg.svg'

const ProjectsInnerModal = () => {
  return (
    <div className="w-full text-left h-screen bg-black text-textPrimary text-sm pt-20 px-12">
      <div className="w-full grid grid-cols-4 gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-[25vh]">
        <div className="col-start-1 col-span-4 row-start-1 md:col-start-2 md:col-span-6">
          <h3 className="uppercase text-base font-Titillium md:text-2xl xl:text-3xl 2xl:text-4xl">
            luxury & premium website for imani
          </h3>
        </div>
        <div className="col-start-1 font-Prompt col-span-4 row-start-2 md:col-start-9 md:col-span-1">
          <div>
            <p className="text-textSecondary">Date</p>
            <p className="text-textPrimary">768859987</p>
          </div>
        </div>
        <div className="col-start-1 font-Prompt  col-span-4 row-start-2 md:col-start-11 md:col-span-1">
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

        <div className="col-span-4 md:col-span-10 col-start-1 md:col-start-2 inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row">
          <div className="col-span-4 md:col-span-6">
            <Image src={Laptop} width={480} height={300} alt="Laptop Image" />
          </div>
          <div className="col-span-4 md:col-span-6">
            <Image
              className="md:ml-6 mt-4 md:mt-0"
              src={Laptop}
              width={480}
              height={300}
              alt="Laptop Image"
            />
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
          <div className="col-span-4 md:col-span-6">
            <Image src={Laptop} width={480} height={300} alt="Laptop Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsInnerModal