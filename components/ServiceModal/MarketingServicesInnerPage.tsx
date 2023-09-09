import Image from "next/image";
import React from "react";
import brandstrategy from "@/assets/bg/brandstrategy.svg";
import brandidentity from "@/assets/bg/brandidentity.svg";
import brandcom from "@/assets/bg/brandcom.svg";
import contentcre from "@/assets/bg/contentcreation.svg";

const MarketingServicesInnerPage = () => {
  return (
    <section className="w-full h-screen text-left bg-black text-textPrimary text-sm pb-10 pt-5 md:pt-16 md:px-12 px-5">
      <div className="w-full grid grid-cols-4 gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-flow-row pb-28">
        <div className="col-start-1 col-span-4 md:row-start-1 md:col-start-2 md:col-span-2">
          <h3 className="uppercase font-Titillium text-2xl xl:text-3xl">Strategic Marketing</h3>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-2 md:col-start-2 md:col-span-10">
          <p className="font-thin font-Prompt text-textPrimary text-sm">
            Strategic marketing plays an essential role in aligning resources,
            goals, and marketing actions to create a unique value proposition,
            captivate customers, and propel company growth. This leads to
            stronger customer relationships, increased satisfaction, and
            long-term brand loyalty.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-3 md:col-start-2 md:col-span-6">
          <p className="uppercase text-textPrimary text-base font-Prompt font-thin">
            We support you in the key elements of strategic marketing, which
            include
          </p>
        </div>

        <div className="col-start-1 font-Prompt col-span-4 md:row-start-4 md:col-start-2 md:col-span-5 grid gap-y-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase"> Market <br /> & trend analysis</p>
          </div>
          <p className="font-extralight">
            A thorough analysis of the market, including studying trends,
            competitors, customers, and opportunities, in order to understand
            the landscape in which the company operates.
          </p>
        </div>

        <div className="col-start-1 font-Prompt col-span-4 md:row-start-5 md:col-start-2 md:col-span-5">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase">Product<br /> & service positioning</p>
          </div>
          <p className="font-extralight mt-4">
            Determining the unique position the company wants to occupy in the
            market, differentiating itself from the competition and creating a
            distinct value proposition for customers.
          </p>
        </div>

        <div className="col-start-1 font-Prompt col-span-4  md:col-start-7 md:col-span-5 md:row-start-4 grid gap-y-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase"> Segmentation <br /> & Targeting</p>
          </div>
          <p className="font-extralight">
            Identifying the most relevant market segments for the company and
            selecting specific target audiences to reach through marketing
            efforts.
          </p>
        </div>

        <div className="col-start-1 font-Prompt col-span-4 md:col-start-7 md:col-span-5 md:row-start-5 grid gap-y-4">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase">Business <br /> Plan</p>
          </div>
          <p className="font-extralight">
            A tool that translates the marketing strategy into concrete
            actions and enables the planning of resources and investments
            needed to achieve set business objectives. It ensures consistency
            between the marketing strategy and the financial aspects of the
            company, while providing a framework for monitoring and evaluating
            marketing performance.
          </p>
        </div>

        <div className="col-start-1 col-span-4 md:row-start-6 md:col-start-2 md:col-span-10 inline-grid grid-cols-4 grid-flow-row
        md:grid-cols-12 gap-y-5">
          <div className="col-span-2 md:col-span-4 row-start-1">
            <h3 className="uppercase font-Titillium text-2xl xl:text-3xl">Digital Marketing</h3>
          </div>
          <p className="row-start-2 col-span-4 md:col-span-12 font-Prompt font-thin">
            Digital marketing refers to the set of strategies and techniques
            used to promote products, services, or brands through digital
            channels. With the growth of the Internet and the widespread use of
            electronic devices, digital marketing has become increasingly
            important for businesses.
          </p>
        </div>


        <div className="col-start-1 col-span-4 md:row-start-7 md:col-start-2 md:col-span-10 font-Prompt">
          <p className="uppercase font-thin">
            Our team of experts specializes in several key areas of digital
            marketing, <br /> including:
          </p>
        </div>

        <div className="col-start-1 col-span-4 md:row-start-8 md:col-start-2 md:col-span-5 grid gap-y-5">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase"> Online <br /> Growth Strategy</p>
          </div>
          <p className="font-extralight">
            - Gain a competitive advantage by leveraging data-driven insights,
            optimize your online presence, attract and retain customers, and
            maximize return on investment.
          </p>
        </div>

        <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-5 md:row-start-8 grid gap-y-5">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase">Social Media <br /> and Advertising Management</p>
          </div>
          <p className="font-extralight">
            Build a strong online presence, reach a wider audience, enhance
            brand awareness, drive traffic to your website, generate leads,
            and improve conversion rates.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-2 md:col-span-5 md:row-start-8 grid gap-y-5">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase">Lobbying <br /> and Influence</p>
          </div>
          <p className="font-extralight">
            Enhance the credibility and reputation of your brand, access new
            business opportunities, strengthen partnerships, and influence
            conversations in your industry in your favor.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:col-start-7 md:col-span-5 md:row-start-8 grid gap-y-5">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="5 0 22 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
            <p className="font-medium text-base uppercase">Digital Campaign and  <br />Reporting</p>
          </div>
          <p className="font-extralight">
            Increase brand visibility, foster customer engagement, measure
            campaign effectiveness, optimize your marketing efforts, and make
            data-driven informed decisions for future campaigns.
          </p>
        </div>

        <div className="col-start-1 col-span-2 md:row-start-9 md:col-start-2 md:col-span-5">
          <h3 className="uppercase font-Titillium text-2xl xl:text-3xl">branding</h3>
        </div>

        <div className="col-start-1 col-span-4 md:row-start-10 md:col-start-2 md:col-span-10">
          <p className="font-thin">
            Digital marketing refers to the set of strategies and techniques
            used to promote products, services, or brands through digital
            channels. With the growth of the Internet and the widespread use of
            electronic devices, digital marketing has become increasingly
            important for businesses.
          </p>
        </div>

        <div className="col-start-1 col-span-4 md:row-start-11 md:col-start-2 md:col-span-5">
          <Image src={brandstrategy} alt="" width={500} height={300} />
        </div>
        <div className="col-start-1 col-span-4 md:row-start-11 md:col-start-7 md:col-span-5">
          <Image src={brandidentity} alt="" width={500} height={300} />
        </div>
        <div className="col-start-1 col-span-4 md:row-start-12 md:col-start-2 font-Prompt font-extralight md:col-span-5">
          <p>
            Brand strategy involves defining the vision, objectives, and values
            of your brand, as well as the means to achieve them. It includes a
            thorough analysis of your target market, competitors, and unique
            positioning.
          </p>
          <p className="pt-4">
            By developing a strong brand strategy, we help you establish a clear
            direction for your business. This enables you to better understand
            your target audience, create effective marketing messages, and make
            informed decisions to strengthen your market positioning.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-12 md:col-start-7 font-Prompt font-extralight md:col-span-5">
          <p>
            We will work on the visual and verbal elements of your brand to
            create a consistent and memorable identity. This will include
            designing your logo, selecting colors and typography, and
            establishing a distinctive brand voice.
          </p>
          <p className="pt-4">
            By developing a distinctive and appealing brand identity, we help
            you enhance brand recognition and create an emotional connection
            with your audience. This fosters trust, loyalty, and differentiation
            from your competitors.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-13 md:col-start-2 md:col-span-5">
          <Image src={brandcom} alt="" width={500} height={300} />
        </div>
        <div className="col-start-1 col-span-4 md:row-start-13 md:col-start-7 md:col-span-5">
          <Image src={contentcre} alt="" width={500} height={300} />
        </div>

        <div className="col-start-1 col-span-4 md:row-start-14 md:col-start-2 font-Prompt font-extralight md:col-span-5">
          <p>
            Our team will develop an effective brand communication strategy
            using various channels, such as social media, content marketing, and
            public relations. We will create relevant and impactful messages to
            reach your target audience.
          </p>
          <p className="pt-4">
            Through consistent and strategic brand communication, we help you
            increase visibility and generate engagement. Your brand will be
            perceived positively, capturing attention and sparking interest from
            your audience.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-14 md:col-start-7 font-Prompt font-extralight md:col-span-5 pb-20">
          <p>
            Our team of designers and content creators will produce visually
            appealing assets and quality content to represent your brand. This
            includes website design, marketing materials, videos, and blogs.
          </p>
          <p className="pt-4">
            By providing professional design and high-quality content, we help
            you present your brand in a captivating and compelling manner. Your
            audience will be enticed, engagement will increase, and your
            conversion chances will be optimized.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketingServicesInnerPage;