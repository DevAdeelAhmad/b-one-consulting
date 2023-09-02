import Image from "next/image";
import React from "react";
import brandstrategy from "@/assets/bg/brandstrategy.svg";
import brandidentity from "@/assets/bg/brandidentity.svg";
import brandcom from "@/assets/bg/brandcom.svg";
import contentcre from "@/assets/bg/contentcreation.svg";

const page = () => {
  return (
    <section className="w-full bg-[#101010] text-textPrimary text-sm pb-10 pt-4 px-12">
      <div className="w-full grid grid-cols-4 grid-rows-14 gap-y-8 gap-x-3 md:gap-y-10 md:grid-cols-12 md:grid-rows-16 pb-20">
        <div className="col-start-1 col-span-2 md:row-start-1 md:col-start-4 md:col-span-4">
          <h3 className="uppercase md:text-2xl ">Strategic Marketing</h3>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-2 md:col-start-4 md:col-span-6">
          <p>
            Strategic marketing plays an essential role in aligning resources,
            goals, and marketing actions to create a unique value proposition,
            captivate customers, and propel company growth. This leads to
            stronger customer relationships, increased satisfaction, and
            long-term brand loyalty.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-3 md:col-start-4 md:col-span-6">
          <p className="uppercase font-thin">
            We support you in the key elements of strategic marketing, which
            include
          </p>
        </div>

        <div className="col-start-1 col-span-2 md:row-start-4 md:col-start-4 md:col-span-3">
          <p className="font-bold"> Market & trend analysis</p>
          <p>
            A thorough analysis of the market, including studying trends,
            competitors, customers, and opportunities, in order to understand
            the landscape in which the company operates.
          </p>

          <div className="col-start-1 col-span-2 md:col-start-4 md:col-span-3 md:row-start-4 md:pt-10">
            <p className="font-bold">Product & service positioning</p>
            <p>
              Determining the unique position the company wants to occupy in the
              market, differentiating itself from the competition and creating a
              distinct value proposition for customers.
            </p>
          </div>
        </div>
        <div className="col-start-3 col-span-2  md:col-start-7 md:col-span-3 md:row-start-4">
          <p className="font-bold"> Segmentation & Targeting</p>
          <p>
            Identifying the most relevant market segments for the company and
            selecting specific target audiences to reach through marketing
            efforts.
          </p>
          <div className="col-start-3 col-span-2 md:col-start-7 md:col-span-3 md:row-start-4 md:pt-16">
            <p className="font-bold">Business Plan</p>
            <p>
              A tool that translates the marketing strategy into concrete
              actions and enables the planning of resources and investments
              needed to achieve set business objectives. It ensures consistency
              between the marketing strategy and the financial aspects of the
              company, while providing a framework for monitoring and evaluating
              marketing performance.
            </p>
          </div>
        </div>

        <div className="col-start-1 col-span-2 md:row-start-5 md:col-start-4 md:col-span-4">
          <h3 className="uppercase md:text-2xl ">Digital arketing</h3>
        </div>

        <div className="col-start-1 col-span-4 md:row-start-6 md:col-start-4 md:col-span-6">
          <p>
            Digital marketing refers to the set of strategies and techniques
            used to promote products, services, or brands through digital
            channels. With the growth of the Internet and the widespread use of
            electronic devices, digital marketing has become increasingly
            important for businesses.
          </p>
        </div>
        <div className="col-start-1 col-span-4 md:row-start-7 md:col-start-4 md:col-span-6">
          <p className="uppercase font-thin">
            Our team of experts specializes in several key areas of digital
            marketing, including:
          </p>
        </div>
        <div className="col-start-1 col-span-2 md:row-start-8 md:col-start-4 md:col-span-3">
          <p className="font-bold"> Online Growth Strategy</p>
          <p>
            - Gain a competitive advantage by leveraging data-driven insights,
            optimize your online presence, attract and retain customers, and
            maximize return on investment.
          </p>

          <div className="col-start-1 col-span-2 md:col-start-4 md:col-span-3 md:row-start-8 md:pt-10">
            <p className="font-bold">Social Media and Advertising Management</p>
            <p>
              Build a strong online presence, reach a wider audience, enhance
              brand awareness, drive traffic to your website, generate leads,
              and improve conversion rates.
            </p>
          </div>
        </div>
        <div className="col-start-3 col-span-2  md:col-start-7 md:col-span-3 md:row-start-8">
          <p className="font-bold">Lobbying and Influence</p>
          <p>
            Enhance the credibility and reputation of your brand, access new
            business opportunities, strengthen partnerships, and influence
            conversations in your industry in your favor.
          </p>
          <div className="col-start-3 col-span-2 md:col-start-6 md:col-span-3 md:row-start-8 md:pt-5">
            <p className="font-bold">Digital Campaign and Reporting</p>
            <p>
              Increase brand visibility, foster customer engagement, measure
              campaign effectiveness, optimize your marketing efforts, and make
              data-driven informed decisions for future campaigns.
            </p>
          </div>
        </div>

        <div className="col-start-1 col-span-2 md:row-start-9 md:col-start-4 md:col-span-4">
          <h3 className="uppercase md:text-2xl ">branding</h3>
        </div>

        <div className="col-start-1 col-span-4 md:row-start-10 md:col-start-4 md:col-span-6">
          <p>
            Digital marketing refers to the set of strategies and techniques
            used to promote products, services, or brands through digital
            channels. With the growth of the Internet and the widespread use of
            electronic devices, digital marketing has become increasingly
            important for businesses.
          </p>
        </div>

        <div className="col-start-1 col-span-4 md:row-start-11 md:col-start-4 md:col-span-3">
          <Image src={brandstrategy} alt="" width={300} height={300} />
        </div>
        <div className="col-start-1 col-span-4 md:row-start-11 md:col-start-7 md:col-span-3">
          <Image src={brandidentity} alt="" width={300} height={300} />
        </div>
        <div className="col-start-1 col-span-4 md:row-start-12 md:col-start-4 md:col-span-3">
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
        <div className="col-start-1 col-span-4 md:row-start-12 md:col-start-7 md:col-span-3">
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
        <div className="col-start-1 col-span-4 md:row-start-13 md:col-start-4 md:col-span-3">
          <Image src={brandcom} alt="" width={300} height={300} />
        </div>
        <div className="col-start-1 col-span-4 md:row-start-13 md:col-start-7 md:col-span-3">
          <Image src={contentcre} alt="" width={300} height={300} />
        </div>

        <div className="col-start-1 col-span-4 md:row-start-14 md:col-start-4 md:col-span-3">
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
        <div className="col-start-1 col-span-4 md:row-start-14 md:col-start-7 md:col-span-3">
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

export default page;
