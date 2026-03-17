import React from 'react'
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
     const companyLinks = ["About Us", "Careers", "Press", "Contact"];
  const productLinks = ["Rates & fees", "Mobile Apps", "Security", "Coverage"];
  const helpLinks = [
    "Support Center",
    "Dispute Resolution",
    "Privacy Policy",
    "Terms of Service",
  ];
  return (
    <footer className="w-full bg-white px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto">
        {/* top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* brand block */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d4a514] flex items-center justify-center text-black text-2xl font-bold">
                ⇄
              </div>
              <h2 className="text-[28px] font-semibold text-[#111111]">Remit</h2>
            </div>

            <p className="mt-6 text-[#3a3a3a] text-[18px] leading-[1.45] max-w-[300px]">
              Redefining money transfers for the African diaspora. Fast, fair and fully transparent.
            </p>

            <div className="mt-6 flex items-center gap-5 text-[#111111] text-[22px]">
              <a href="#" className="hover:opacity-70 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* company */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#111111]">
              Company
            </h3>
            <ul className="mt-5 space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[18px] text-[#3a3a3a] hover:text-black transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* product */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#111111]">
              Product
            </h3>
            <ul className="mt-5 space-y-4">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[18px] text-[#3a3a3a] hover:text-black transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* help */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-semibold text-[#111111]">
              Help
            </h3>
            <ul className="mt-5 space-y-4">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[18px] text-[#3a3a3a] hover:text-black transition inline-flex items-center gap-2"
                  >
                    {link}
                    <span className="text-[10px] text-[#7a7a7a]">○</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* divider */}
        <div className="mt-12 border-t border-[#d9d9d9]" />

        {/* bottom section */}
        <div className="mt-8 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
          {/* left bottom text */}
          <div className="max-w-[900px]">
            <p className="text-[#111111] text-[20px] sm:text-[24px] font-medium">
              © 2026 Remit Africa Ltd. All rights reserved.
            </p>
            <p className="mt-4 text-[#4a4a4a] text-[15px] sm:text-[17px] leading-[1.6] max-w-[940px]">
              Remit is a financial technology company, not a bank. Payment services are provided by authorized financial
              partners across our operating jurisdictions. Remit is registered with FCA for money service activities.
            </p>
          </div>

          {/* right legal links */}
          <div className="flex flex-wrap gap-8 xl:justify-end text-[18px] font-semibold text-[#111111]">
            <a href="#" className="hover:opacity-70 transition">
              PRIVACY
            </a>
            <a href="#" className="hover:opacity-70 transition">
              TERMS
            </a>
            <a href="#" className="hover:opacity-70 transition">
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer