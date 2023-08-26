import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <section className="w-full text-textPrimary text-sm py-6 xl:lg:md:px-6 bg-[#101010]">
        <div className="px-8 grid grid-cols-4 grid-rows-6 gap-5 xl:lg:md:grid-cols-12 xl:lg:md:grid-rows-2">
          {/* First Column */}
          <div className="col-span-4 row-span-2 col-start-1 xl:lg:md:col-start-4 xl:lg:md:col-span-3 xl:lg:md:row-span-2 gap-5 md:gap-14 xl:lg:gap-28">
            <ul>
              <li className="text-textSecondary">Write us</li>
              <li>contact@b1-consulting.com</li>
            </ul>

            <ul>
              <li className="text-textSecondary">Visit us</li>
              <li>78 Jalan hcosiah azpojpoz iàdzi, Bali</li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="col-span-4 row-span-2 col-start-1 xl:lg:md:col-start-4 xl:lg:md:col-span-3 xl:lg:md:row-span-2 gap-5 md:gap-14 xl:lg:gap-28">
            <ul>
              <li className="text-textSecondary">Call us</li>
              <li>+62 6786909</li>
            </ul>

            <ul>
              <li className="text-textSecondary">Open Hours</li>
              <li>Monday to friday - 9am to 6pm</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-span-4 row-span-2 col-start-1 xl:lg:md:col-start-4 xl:lg:md:col-span-3 xl:lg:md:row-span-2 gap-5 md:gap-14 xl:lg:gap-28">
            <ul>
              <li className="text-textSecondary">Collaborate with us</li>
              <li className="italic text-textSecondary">
                Freelances & Applicants
              </li>
              <li>hello@b1-consulting.com</li>
            </ul>

            <ul>
              <li className="text-textSecondary">Follow Us</li>
              <li className="inline">
                <Link href="https://www.facebook.com">Fb</Link>
              </li>
              <li className="inline px-4">
                <Link href="https://www.instagram.com">Ig</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
