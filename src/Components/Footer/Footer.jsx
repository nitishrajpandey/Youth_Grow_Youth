import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { footerData } from "./contextData";

function Footer() {
  return (
    <div className="bg-Blue pt-10 text-[#949493]">
      <div className="flex flex-col md:flex-row justify-between gap-10 px-4 xs:px-8 ss:px-14 py-20">
        <div className="w-full md:w-[30%]">
          <p className="text-[#949493] text-lg mb-10">
            Find like-minded people who have same passion and ambition in life
            in growing together.
          </p>
          <span className="flex gap-10">
            <FaFacebook className="text-2xl text-[#3B3951]" />
            <FaTwitter className="text-2xl text-[#3B3951]" />
            <GrInstagram className="text-2xl text-[#3B3951]" />
            <FaLinkedin className="text-2xl text-[#3B3951]" />
          </span>
        </div>

        <div className="w-full md:w-[60%] flex ss:flex-row flex-col  justify-between">
          <div>
            {footerData.section1.map((item) => (
              <div className="" key={item.id}>
                <h1 className="my-5 font-bold font-Mulish text-ghostWhite ">
                  {item.title}
                </h1>
                <ul>
                  <li className="font-Quicksand">{item.link}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            {footerData.section2.map((item) => (
              <div className="" key={item.id}>
                <h1 className="my-5 font-bold font-Mulish text-ghostWhite ">
                  {item.title}
                </h1>
                <ul>
                  <li className="font-Quicksand">{item.link}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            {footerData.section3.map((item) => (
              <div className="" key={item.id}>
                <h1 className="my-5 font-bold font-Mulish text-ghostWhite ">
                  {item.title}
                </h1>
                <ul>
                  <li className="font-Quicksand">{item.link}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-deepBlue shadow-md">
        <p className="text-center font-Mulish font-semibold text-sm ss:text-base  py-4 text-[#949493]">
          © 2022 NITISH RAJ . All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
