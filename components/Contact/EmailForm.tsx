import React from "react";

const EmailForm = () => {
  return (
    <section className="w-full px-12 text-textPrimary text-sm py-6 bg-[#101010]">
      <div className="grid grid-cols-4 grid-rows-12 md:grid-cols-12 md:grid-rows-2 gap-5">
        <div className="col-start-1 col-span-12 row-span-1 inline-grid grid-cols-12 grid-rows-1">
          <div className="col-span-7 tracking-tighter">
            <h1 className="uppercase text-8xl font-extralight">Get in touch</h1>
          </div>

          <div className="col-span-5 mt-12">
            <p className="uppercase text-2xl">
              <span className="text-sm">tell us more &emsp;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="inline w-6 h-6"
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

        <div className="col-start-1 col-span-12 row-span-1 inline-grid grid-cols-12 grid-rows-1">
          <div className="col-span-4 row-span-3">
            <form>
              <label
                className="uppercase text-textPrimary text-sm font-light"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                className="border-b-textSecondary border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                name="fullName"
                id="fullName"
              />
              <label
                className="uppercase text-textPrimary text-sm font-light"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="text"
                className="border-b-textSecondary border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                name="email"
                id="email"
              />
              <label
                className="uppercase text-textPrimary text-sm font-light"
                htmlFor="company"
              >
                Company name
              </label>
              <input
                type="text"
                className="border-b-textSecondary border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                name="company"
                id="company"
              />
              <label
                className="uppercase text-textPrimary text-sm font-light"
                htmlFor="phoneNumber"
              >
                phone number
              </label>
              <input
                type="text"
                className="border-b-textSecondary border-b-2 bg-transparent border-t-0 border-l-0 border-r-0"
                name="phoneNumber"
                id="phoneNumber"
              />
              <label
                className="uppercase text-textPrimary text-sm font-light"
                htmlFor="message"
              >
                message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-black rounded-xl border"
                cols={10}
                rows={10}
              />
            </form>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default EmailForm;
