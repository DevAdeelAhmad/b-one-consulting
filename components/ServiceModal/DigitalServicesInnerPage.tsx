import React from 'react'
import Image from 'next/image'
import Video from '@/assets/DigitalVideo.png'
import Laptop from '@/assets/ServicesLaptopImg.svg'
import Website from '@/assets/ServicesWebsiteImg.svg'
import Hand from '@/assets/Digital3.png'

const DigitalServicesInnerPage = () => {
  return (
    <>
      <div className="w-full text-left font-Prompt h-screen bg-black text-textPrimary text-sm pb-10 pt-10 md:pt-10 px-0 md:pr-10">
        <div className="w-full grid grid-cols-4 gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 grid-flow-row pb-20">
          <div className='md:w-full md:h-2/5 pr-10 md:pr-0 col-span-10 md:col-span-12 row-start-1'>
            <Image src={Video} alt='Video Image' width={2000} height={2000} />
          </div>
          <div className="col-start-1 col-span-9 row-start-2 md:col-start-2 md:col-span-6">
            <h3 className="uppercase font-Titillium font-medium text-lg md:text-3xl 2xl:text-4xl">
              A 360-degree customer view with CRM integration
            </h3>
          </div>
          <div className="col-start-1 col-span-9 row-start-3 md:col-start-2 md:col-span-10">
            <p className='font-thin 2xl:text-base'>
              Integrating a CRM enables a company to improve customer
              satisfaction, optimize internal processes, boost sales and revenue,
              all while making strategic decisions based on accurate information.
              This solution streamlines processes, automates repetitive tasks, and
              provides self-service solutions. It reduces operational costs and
              effort required, while enhancing overall efficiency and
              productivity.
            </p>
          </div>

          <div className="inline-grid col-start-1 row-start-4 md:col-start-2 col-span-9 md:col-span-12 grid-cols-4 grid-flow-row md:grid-rows-2
          md:grid-cols-12 gap-y-10">
            <div className="col-start-1 col-span-4 md:col-span-6 row-start-1">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="5 0 22 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
                <p className="uppercase text-lg text-textPrimary ">Our Expertise</p>
              </div>
              <p className="pt-4 text-sm pr-4 font-extralight 2xl:text-base">
                We are your partner throughout your project, offering scalable,
                flexible, and cost-effective solutions. We stay constantly updated
                on the latest industry trends and technologies. By working with
                us, you can be assured that your IT systems are in expert hands,
                allowing you to focus on growing your business.
              </p>
            </div>

            <div className="col-start-1 col-span-4 md:col-span-6 row-start-2">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="5 0 22 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
                <p className="uppercase text-lg text-textPrimary ">
                  Stages of our support
                </p>
              </div>
              <ol className="list-decimal font-extralight list-inside pt-4 text-sm 2xl:text-base">
                <li>Audit & personalized advice</li>
                <li>CRM selection</li>
                <li>Implementation & deployment</li>
              </ol>
            </div>

            <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-6 row-span-1 md:row-span-2">
              <Image
                className="w-[30rem] h-56 md:h-96"
                src={Laptop}
                alt="Digital Solution 1"
                width={300}
                height={200}
              />
            </div>
          </div>

          <div className="col-start-1 col-span-8 md:col-span-6 md:col-start-2">
            <h3 className="uppercase font-Titillium font-medium text-lg md:text-3xl 2xl:text-4xl">
              website and mobile app design
            </h3>
          </div>

          <div className="col-start-1 col-span-8 md:col-start-2 font-extralight md:col-span-10 2xl:text-base">
            <p>
              A website has become a necessity for businesses in today&apos;s
              digital environment. It is an effective way to increase visibility,
              enhance credibility, promote products or services, engage with
              customers, facilitate online sales, and gather valuable insights to
              improve business performance.
            </p>
          </div>

          <div className="inline-grid col-span-8 md:col-span-12 grid-cols-4 grid-flow-row md:grid-rows-2 md:grid-cols-12 gap-y-10 px-0 md:px-[4.2rem]">
            <div className="col-start-1 col-span-4 md:col-span-6 row-start-1 row-span-1 md:row-span-2 2xl:pl-5">
              <p className="text-sm xl:text-base uppercase text-textSecondary tracking-widest leading-loose">
                Your website needs to address several key considerations,
                including:
              </p>
              <ul className="list-decimal list-inside pt-4 text-base 2xl:text-lg tracking-widest leading-loose">
                <li>Responsive Design</li>
                <li>Loading Speed</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Security</li>
              </ul>
            </div>

            <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-6 row-start-2 md:row-start-1 row-span-2">
              <Image
                className="w-[30rem] h-56 md:h-96"
                src={Website}
                alt="Digital Solution 1"
                width={300}
                height={200}
              />
            </div>
          </div>

          <div className="hidden md:flex col-span-8 col-start-1 md:col-span-12">
            <p className="uppercase text-xs md:text-base text-textSecondary md:px-14 xl:px-20 2xl:px-24">
              At B one Consulting, we understand the importance of an effective
              online presence.We create professional and customized websites that
              captivate your audience, strengthen your credibility, and foster
              your growth. Trust our experienced team to design a website that
              reflects the essence of your business and provides an exceptional
              user experience.
            </p>
          </div>
          <div className="col-start-1 col-span-7 md:col-start-2 md:col-span-8">
            <h3 className="uppercase font-Titillium font-medium text-lg md:text-3xl 2xl:text-4xl">
              Integration of AI <br className='hidden xl:flex' />
              to optimize your business
            </h3>
          </div>
          <div className="col-start-1 col-span-7 md:col-start-2 font-extralight md:col-span-10">
            <p>
              Integrating AI is a crucial step to stay competitive in an ever-changing world. By harnessing the power of AI, you can optimize your operations and deliver exceptional customer experiences.
            </p>
          </div>
          <div className="col-start-1 col-span-7 md:col-start-2 md:col-span-8">
            <h3 className="uppercase font-light text-lg text-textSecondary">
              What is AI integration?
            </h3>
          </div>
          <div className="col-start-1 col-span-7 md:col-start-2 font-extralight md:col-span-10">
            <p>
              AI integration involves incorporating AI technologies and capabilities into your existing systems and processes. It enables data analysis, informed decision-making, task automation, and intelligent insights.
            </p>
          </div>
          <div className="col-start-1 col-span-7 md:col-start-2 md:col-span-8">
            <h3 className="uppercase font-light text-lg text-textSecondary">
              The benefits of AI integration:
            </h3>
          </div>
          <div className="col-start-1 col-span-8 md:col-start-2 md:col-span-12 gap-x-10 flex flex-col lg:flex-row pb-20">
            <div className='flex-1'>
              <ul className='text-textPrimary text-sm lg:text-[14.8px] 2xl:text-base flex flex-col gap-y-5 uppercase'>
                <li>Improved operational efficiency through the automation of repetitive tasks.</li>
                <li>Anticipation of trends and behaviors through predictive analysis</li>
                <li>Informed decision-making based on analysis of massive data sets.</li>
              </ul>
            </div>
            <div className='flex-1'>
              <Image className='h-[20vh] md:h-[32vh] w-[40vh] mt-10 lg:mt-0' src={Hand} alt='Digital Solution 3' width={300} height={300} />
            </div>
            <div className='flex-1 mt-10 lg:mt-0'>
              <ul className='text-textPrimary text-sm lg:text-[14.8px] 2xl:text-base flex flex-col gap-y-5 uppercase'>
                <li>Improved operational efficiency through the automation of repetitive tasks.</li>
                <li>Anticipation of trends and behaviors through predictive analysis</li>
                <li>Informed decision-making based on analysis of massive data sets.</li>
              </ul>
            </div>
          </div>
        </div>



        <div className="fixed hidden md:flex bottom-8 uppercase left-16">
          <span className="text-lg mr-4 font-light text-white">Digital Solution</span>
        </div>
      </div>
    </>
  );
}

export default DigitalServicesInnerPage