import React from "react";

const EmailForm = () => {
  return (
    <section className="w-full px-7 md:px-12 text-textPrimary text-sm py-20 sm:mt-20 md:mt-0 bg-[#101010]">
      <div className="grid grid-cols-4 grid-rows-10 md:grid-cols-12 gap-10">
        <div className="col-start-1 col-span-4 row-span-1 row-start-1 md:col-span-12 md:row-span-1
        inline-grid grid-rows-1 grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 text-left md:col-span-10 row-start-1 col-start-1 md:col-start-1">
            <h1 className="uppercase text-[90px] xl:text-[140px] lg:font-medium font-Titillium font-light leading-[1]">
              Get in <br className="block xl:hidden"/>touch
            </h1>
          </div>
          <div className="col-span-0 xl:col-start-9 2xl:col-start-8 md:col-span-4 row-start-1 mt-9 2xl:mt-20 hidden 2xl:grid">
            <p className="uppercase text-[25px]">
              <span className="text-md font-Prompt font-textFamily">
                tell us more &emsp;
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="inline w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="col-span-4 md:col-span-11 row-span-1 inline-grid grid-cols-4 md:grid-cols-12 gap-16">
          <div className="col-span-4 col-start-1 md:col-start-2 md:col-span-3">
            <p className="uppercase text-base xl:text-lg font-Prompt font-light">
              for any enquiries, or just say hello, contact us through this form
            </p>
          </div>

          <div className="col-span-4 md:col-span-8 font-Prompt inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row gap-10">
            <div className="col-span-4 md:col-span-6 col-start-1 flex flex-col gap-10 font-Titillium row-start-1">
              <div className="fullNameField flex flex-col">
                <label
                  className="uppercase text-textSecondary text-sm font-light"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="border-b-textPrimary focus:outline-none  h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="fullName"
                  id="fullName"
                />
              </div>

              <div className="emailField flex flex-col">
                <label
                  className="uppercase text-textSecondary text-sm font-light"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="border-b-textPrimary focus:outline-none h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="email"
                  id="email"
                />
              </div>
            </div>

            <div className="col-span-4 md:col-span-6 col-start-1 flex flex-col gap-10">
              <div className="companyField flex flex-col">
                <label
                  className="uppercase text-textSecondary text-sm font-light"
                  htmlFor="company"
                >
                  Company name
                </label>
                <input
                  type="text"
                  className="border-b-textPrimary focus:outline-none h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="company"
                  id="company"
                />
              </div>
              <div className="phoneNumberField flex flex-col">
                <label
                  className="uppercase text-textSecondary text-sm font-light"
                  htmlFor="phoneNumber"
                >
                  phone number
                </label>
                <input
                  type="text"
                  className="border-b-textPrimary focus:outline-none h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </div>
            </div>
            <div className="inline-grid md:col-span-12 grid-cols-4 grid-flow-row md:grid-cols-12 md:grid-flow-row">
              <div className="col-span-4 md:col-start-1 md:col-span-6 flex flex-col gap-8">
                <label
                  className="uppercase text-textSecondary text-md font-light"
                  htmlFor="message"
                >
                  message
                </label>
                <input
                  id="message"
                  type="text"
                  className="w-[82vw] focus:outline-none md:w-[56vw] h-56 rounded-lg bg-black"
                />
              </div>
            </div>
            <div className="row-start-4 md:row-start-3 col-start-2 md:col-start-1">
              <button
                className="border-[1.5px] items-center justify-center rounded-2xl w-36 h-8
            border-[#2C33D6] text-[#2C33D6] font-Prompt bg-[#2C33D6]/20 hover:bg-[#2C33D6]/50"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
