import React from "react";
import { LuSend } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosGlobe } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-ghostWhite">
      <div className="px-4 xs:px-8 ss:px-14 py-20">
        <div className="flex flex-col justify-center items-center mb-5">
          <h2 className="font-semibold text-3xl mb-5">Contact Us</h2>
          <span className="font-Quicksand text-[#8D8BAC]">
            Any questions,queries or suggestions? We'd love to hear
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-10  md:gap-20 ">
          <div className="md:w-[60%] ">
            <div className="grid grid-cols-1 ssm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="Name">Name*</label>
                <input
                  type="text"
                  id="Name"
                  className="border border-gray-300 rounded-xl shadow-md w-full outline-none p-3"
                  placeholder="Enter your Name here.."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Email">Email*</label>
                <input
                  type="email"
                  id="Email"
                  className="border border-gray-300 shadow-md rounded-xl p-3 outline-none"
                  placeholder="Enter your email here.."
                />
              </div>
            </div>
            <div className=" flex flex-col gap-4 py-6">
              <label htmlFor="Massage" className="">
                Massage
              </label>
              <textarea
                id="Massage"
                rows="10"
                className="border border-gray-300 rounded-xl shadow-md w-full  p-4 outline-none"
              ></textarea>
            </div>
            <div>
              <button className="flex items-center Button">
                Send Massage <LuSend />
              </button>
            </div>
          </div>

          <div className="md:w-[20%] flex flex-col justify-center gap-4">
            <span className="flex items-center gap-2 text-[#8D8BAC]">
              <AiOutlineMail />: support@website.com
            </span>
            <span className="flex items-center gap-2 text-[#8D8BAC]">
              <IoIosGlobe />: www.website.com
            </span>
            <span className="flex items-center gap-2 text-[#8D8BAC]">
              <FaPhoneAlt /> : (+001) 123 456 7890
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
