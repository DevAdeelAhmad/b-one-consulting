import React from "react";

const Footer = () => {
  return (
    <>
      <section className="container p-10 bg-[#101010]">
        <div className="grid gap-4 grid-cols-12 grid-rows-2">
          <div className="col-span-3 row-span-2">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Contact</li>
              <li>contact@b1-consulting.com</li>
              <li>+62 6786909</li>
            </ul>
          </div>
          <div className="col-span-3 row-span-2">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Address</li>
              <li>78 Jalan hcosiah azpojpoz</li>
              <li>iàdzi, Bali</li>
            </ul>
          </div>
          <div className="col-span-3 row-span-2">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Open Hours</li>
              <li>Monday to friday</li>
              <li>9am to 6pm</li>
            </ul>
          </div>
          <div className="col-span-3 row-span-2">
            <ul className="text-textPrimary">
              <li className="text-textSecondary">Contact</li>
              <li>contact@b1-consulting.com</li>
              <li>+62 6786909</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
