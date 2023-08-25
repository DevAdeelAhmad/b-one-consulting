import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-screen p-10 xl:px-32 bg-[#101010]">
        <div className="flex flex-col md:flex-row lg:xl:flex-row gap-4 justify-between">
          <div className="flex-1">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Contact</li>
              <li>contact@b1-consulting.com</li>
              <li>+62 6786909</li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Address</li>
              <li>78 Jalan hcosiah azpojpoz</li>
              <li>iàdzi, Bali</li>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Open Hours</li>
              <li>Monday to friday</li>
              <li>9am to 6pm</li>
            </ul>
          </div>
          <div className="flex-1">
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
