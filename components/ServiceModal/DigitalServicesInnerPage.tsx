import React from 'react'
import Image from 'next/image'
import Laptop from '@/assets/ServicesLaptopImg.svg'
import Website from '@/assets/ServicesWebsiteImg.svg'

const DigitalServicesInnerPage = () => {
  return (
    <div className="w-full text-left h-screen bg-black text-textPrimary text-sm pb-10 pt-10 px-12">
      <div className="w-full grid grid-cols-4 gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-20">
        <div className="col-start-1 col-span-4 row-start-1 md:col-start-2 md:col-span-6">
          <h3 className="uppercase text-base md:text-2xl">
            A 360-degree customer view with CRM integration
          </h3>
        </div>
        <div className="col-start-1 col-span-4 row-start-2 md:col-start-2 md:col-span-10">
          <p>
            Integrating a CRM enables a company to improve customer
            satisfaction, optimize internal processes, boost sales and revenue,
            all while making strategic decisions based on accurate information.
            This solution streamlines processes, automates repetitive tasks, and
            provides self-service solutions. It reduces operational costs and
            effort required, while enhancing overall efficiency and
            productivity.
          </p>
        </div>

        <div className="inline-grid col-start-1 md:col-start-1 col-span-4 md:col-span-12 grid-cols-4 grid-rows-2 md:grid-cols-12 gap-y-10 px-[4.2rem]">
          <div className="col-start-1 pl-12 col-span-4 md:col-span-6 row-start-1">
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
              <p className="uppercase text-textPrimary ">Our Expertise</p>
            </div>
            <p className="pt-4 text-sm pr-4">
              We are your partner throughout your project, offering scalable,
              flexible, and cost-effective solutions. We stay constantly updated
              on the latest industry trends and technologies. By working with
              us, you can be assured that your IT systems are in expert hands,
              allowing you to focus on growing your business.
            </p>
          </div>

          <div className="col-start-1 pl-12 col-span-4 md:col-span-6 row-start-2">
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
              <p className="uppercase text-textPrimary ">
                Stages of our support
              </p>
            </div>
            <ol className="list-decimal list-inside pt-4 text-sm">
              <li>Audit & personalized advice</li>
              <li>CRM selection</li>
              <li>Implementation & deployment</li>
            </ol>
          </div>

          <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-6 row-span-2">
            <Image
              className="w-[30rem] h-96"
              src={Laptop}
              alt="Digital Solution 1"
              width={300}
              height={200}
            />
          </div>
        </div>

        <div className="col-start-1 col-span-4  md:col-start-2 md:col-span-6">
          <h3 className="uppercase text-base md:text-2xl">
            website and mobile app design
          </h3>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-10">
          <p>
            A website has become a necessity for businesses in today&apos;s
            digital environment. It is an effective way to increase visibility,
            enhance credibility, promote products or services, engage with
            customers, facilitate online sales, and gather valuable insights to
            improve business performance.
          </p>
        </div>
        <div className="inline-grid col-span-4 md:col-span-12 grid-cols-4 grid-rows-2 md:grid-cols-12 gap-y-10 px-[4.2rem]">
          <div className="col-start-1 col-span-4 md:col-span-6 pt-10 row-start-1 row-span-2 pl-12">
            <div className="flex">
              <p className="uppercase text-textPrimary "></p>
            </div>
            <p className="pt-4 text-sm pr-4 uppercase text-textSecondary tracking-widest leading-loose">
              Your website needs to address several key considerations,
              including:
            </p>
            <ul className="list-decimal list-inside pt-4 text-base tracking-widest leading-loose">
              <li>Responsive Design</li>
              <li>Loading Speed</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Security</li>
            </ul>
          </div>

          <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-6 row-start-1 row-span-2">
            <Image
              className="w-[30rem] h-96"
              src={Website}
              alt="Digital Solution 1"
              width={300}
              height={200}
            />
          </div>
        </div>

        <div className="col-span-4 md:col-span-12 pb-20">
          <p className="text-center uppercase text-textSecondary px-20">
            At B one Consulting, we understand the importance of an effective
            online presence.We create professional and customized websites that
            captivate your audience, strengthen your credibility, and foster
            your growth. Trust our experienced team to design a website that
            reflects the essence of your business and provides an exceptional
            user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DigitalServicesInnerPage