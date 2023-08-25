import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-screen text-sm py-10 md:px-12 lg:xl:px-14 bg-[#101010]">
        <div className="px-8 md:lg:xl:px-0 grid grid-cols-1 grid-rows-4 md:grid-cols-12 md:grid-rows-1 lg:xl:grid-cols-12 lg:xl:grid-rows-1 gap-4">
          <div className="col-span-3">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Contact</li>
              <li>contact@b1-consulting.com</li>
              <li>+62 6786909</li>
            </ul>
          </div>
          <div className="col-span-3">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Address</li>
              <li>78 Jalan hcosiah azpojpoz</li>
              <li>iàdzi, Bali</li>
            </ul>
          </div>
          <div className="col-span-3">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Open Hours</li>
              <li>Monday to friday</li>
              <li>9am to 6pm</li>
            </ul>
          </div>
          <div className="col-span-3">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Connect</li>
              <li className="inline"><Link href='https://www.facebook.com'>Fb</Link></li>
              <li className="inline px-4"><Link href='https://www.instagram.com'>Ig</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
