import React from "react";

const EmailForm = () => {
  return (
    <section className="w-full px-7 md:px-12 text-textPrimary text-sm py-20 bg-[#101010]">
      <div className="grid grid-cols-4 grid-rows-10 md:grid-cols-12 gap-10">
        <div className="col-start-1 col-span-4 row-span-1 md:col-span-12 md:row-span-1 inline-grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 text-left md:col-span-6">
            <h1 className="uppercase text-5xl md:text-7xl font-light">
              Get in touch
            </h1>
          </div>
          <div className="col-span-0 md:col-start-7 md:col-span-5 mt-9 hidden lg:grid">
            <p className="uppercase text-2xl">
              <span className="text-sm">tell us more &emsp;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="inline w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="col-span-4 md:col-span-11 row-span-1 inline-grid grid-cols-4 md:grid-cols-12 gap-16">
          <div className="col-span-4 col-start-1 md:col-start-2 md:col-span-3">
            <p className="uppercase text-md">
              for any enquiries, or just say hello, contact us through this form
            </p>
          </div>

          <div className="col-span-4 md:col-span-8 inline-grid grid-cols-4 md:grid-cols-12 grid-flow-row gap-10">
            <div className="col-span-4 md:col-span-6 col-start-1 flex flex-col gap-10">
              <div className="fullNameField flex flex-col">
                <label
                  className="uppercase text-textPrimary text-xs font-light"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="border-b-textSecondary h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="fullName"
                  id="fullName"
                />
              </div>

              <div className="emailField flex flex-col">
                <label
                  className="uppercase text-textPrimary text-xs font-light"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="border-b-textSecondary h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="email"
                  id="email"
                />
              </div>
            </div>

            <div className="col-span-4 md:col-span-6 col-start-1 flex flex-col gap-10">
              <div className="companyField flex flex-col">
                <label
                  className="uppercase text-textPrimary text-xs font-light"
                  htmlFor="company"
                >
                  Company name
                </label>
                <input
                  type="text"
                  className="border-b-textSecondary h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="company"
                  id="company"
                />
              </div>
              <div className="phoneNumberField flex flex-col">
                <label
                  className="uppercase text-textPrimary text-xs font-light"
                  htmlFor="phoneNumber"
                >
                  phone number
                </label>
                <input
                  type="text"
                  className="border-b-textSecondary h-10 border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </div>
            </div>
            <div className="inline-grid md:col-span-12 grid-cols-4 grid-flow-row md:grid-cols-12 md:grid-flow-row">
              <div className="col-span-4 md:col-start-1 md:col-span-6 flex flex-col gap-8">
                <label
                  className="uppercase text-textPrimary text-md font-light"
                  htmlFor="message"
                >
                  message
                </label>
                <input
                  type="text"
                  className="w-[82vw] md:w-[56vw] h-56 rounded-lg bg-black"
                />
              </div>
            </div>
            <div>
              <button className="border-[1px] hidden md:flex items-center justify-center rounded-xl w-36 h-8 border-[#2C33D6] text-[#2C33D6] hover:bg-[#2C33D6] hover:text-white">
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
