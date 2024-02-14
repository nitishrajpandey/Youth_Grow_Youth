import React from "react";
import { BsCalendar2DateFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

import { blogData } from "./contextData";

function Blog() {
  return (
    <div className="py-20">
      <div className="px-4 xs:px-8 ss:px-14">
        <div className="pb-10">
          <h1 className="flex justify-center font-semibold text-3xl">Blog</h1>
        </div>

        {/* post */}
        <div className="flex flex-col md:flex-row gap-10">
          {blogData.map((item) => (
            <div className="w-full md:w-[400px]" key={item.id}>
              <div>
                <div className="">
                  <img src={item.img} alt="" className="rounded-md" />
                </div>
                <div className="flex gap-10 py-3">
                  <span className="flex items-center gap-3">
                    <BsCalendar2DateFill className="text-gray-600" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-3">
                    <FaUserEdit className="text-gray-600" />
                    {item.author}
                  </span>
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-xl font-Mulish">
                  {item.title}
                </h1>
                <p className="font-Quicksand text-[#8D8BAC] mb-2">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  className="text-[#0ABAB5] font-medium flex gap-2 items-center "
                >
                  Learn More <IoIosArrowForward />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
