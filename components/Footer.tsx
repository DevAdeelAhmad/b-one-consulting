import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-full px-12 hidden font-Prompt bg-gradient-to-t from-black via-black to-[#101010] opacity-90 md:block text-sm py-10">
        <div className="flex justify-between">
          <div>
            <ul className="text-textPrimary font-Prompt">
              <li className="text-textSecondary">Contact</li>
              <li>contact@b1-consulting.com</li>
              <li>+62 6786909</li>
            </ul>
          </div>
          <div className="col-span-3 col-start-4 font-Prompt">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Address</li>
              <li>78 Jalan hcosiah azpojpoz</li>
              <li>iàdzi, Bali</li>
            </ul>
          </div>
          <div className="col-span-2 col-start-7 font-Prompt">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Open Hours</li>
              <li>Monday to friday</li>
              <li>9am to 6pm</li>
            </ul>
          </div>
          <div className="col-span-2 col-start-9 font-Prompt">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Collaborate with us</li>
              <li className="text-textSecondary italic">
Freelances & Applicants</li>
              <li>hello@b1-consulting.com</li>
            </ul>
          </div>
          <div className="col-span-1 col-start-11 font-Prompt">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Connect</li>
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

export default Footer;
