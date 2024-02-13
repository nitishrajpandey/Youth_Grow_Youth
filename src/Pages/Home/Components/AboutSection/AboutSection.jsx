import React from "react";
import { IoThumbsUp } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { GoShieldCheck } from "react-icons/go";
import { FaDatabase } from "react-icons/fa";
import { IoCube } from "react-icons/io5";
import "./style.css";

function AboutSection() {
  return (
    <div className="px-4 xs:px-8 ss:px-14 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-[35px] lg:gap-[100px]">
        <div className="md:w-[20%] ">
          <div className=" p-2 bg-[#F0F2FA] rounded-full w-fit">
            <IoCube className=" rounded-full text-[#0ABAB5] text-5xl " />
          </div>
          <div>
            <h2 className="font-semibold text-3xl py-3 ">Why Us?</h2>
            <p className="text-[#8D8BAC]">
              Discover global opportunities,connect with like-minded youth and
              grow!
            </p>
          </div>
        </div>
        {/* second div container */}
        <div className=" w-full md:w-[80%] flex flex-col  gap-16 ">
          <div className="flex flex-col sm:flex-row justify-evenly md:justify-between lg:justify-evenly  items-center  gap-20 sm:gap-0 ">
            <div className="rounded-md p-10 sm:p-5 lg:p-10 shadow-md effact  ">
              <div className="max-w-[300px] text-center flex flex-col items-center ">
                <div className=" p-2 bg-[#F0F2FA] rounded-full w-fit ">
                  <IoThumbsUp className=" rounded-full text-[#0ABAB5] text-5xl " />
                </div>
                <div className="">
                  <h2 className="font-semibold text-xl py-3 ">
                    Access to Personalised Resources & Global Opportunities
                  </h2>
                  <p className="text-[#8D8BAC]">
                    Best of opportunities coming from startups, leading
                    companies, NGOs etc based on YOUR personal career interest.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-md p-10 sm:p-5 lg:p-10 shadow-md effact ">
              <div className="max-w-[300px] text-center flex flex-col items-center">
                <div className=" p-2 bg-[#F0F2FA] rounded-full w-fit">
                  <AiOutlineStock className=" rounded-full text-[#0ABAB5] text-5xl " />
                </div>
                <div>
                  <h2 className="font-semibold text-xl py-3 ">
                    Explore Exclusive Ivy League Programs & Conferences
                  </h2>
                  <p className="text-[#8D8BAC]">
                    Explore our tie-ups with ivy leagues in the form of
                    workshops, IG lives, conferences and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-evenly md:justify-between lg:justify-evenly items-center gap-20 sm:gap-0">
            <div className="rounded-md p-10 sm:p-5 lg:p-10 shadow-md effact">
              <div className="max-w-[300px] text-center flex flex-col items-center">
                <div className=" p-2 bg-[#F0F2FA] rounded-full w-fit">
                  <GoShieldCheck className=" rounded-full text-white bg-[#0ABAB5] text-5xl " />
                </div>
                <div>
                  <h2 className="font-semibold text-xl py-3 ">
                    Exposure to Mentors and High School Students from across the
                    Globe
                  </h2>
                  <p className="text-[#8D8BAC]">
                    Get in touch with not just students but also mentors from
                    IIM, Nike, University alumni, etc.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-md p-10 sm:p-5 lg:p-10 shadow-md effact">
              <div className="max-w-[300px] text-center flex flex-col items-center">
                <div className=" p-2 bg-[#F0F2FA] rounded-full w-fit">
                  <FaDatabase className=" rounded-full text-[#0ABAB5] text-5xl " />
                </div>
                <div>
                  <h2 className="font-semibold text-xl py-3 ">
                    Informative Biweekly Posts
                  </h2>
                  <p className="text-[#8D8BAC]">
                    Tips,Insights, Do's and Dont's etc for college from our
                    students and alumni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
