import React from "react";
import { featuresimg1 } from "../../../../assets";
import { IoSparkles } from "react-icons/io5";

function Networking() {
  return (
    <div className="bg-ghostWhite">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 px-4 xs:px-8 ss:px-14 ">
        <div className="flex justify-center">
          <img src={featuresimg1} alt="" />
        </div>

        <div>
          <div className="flex items-center gap-4">
            <IoSparkles className="text-[#0ABAB5] text-2xl" />{" "}
            <h3 className="text-xl">NETWORKING</h3>
          </div>
          <div className="py-5 font-Quicksand">
            <h1 className="font-bold text-xl xxs:text-2xl ss:text-3xl pb-5">
              Upskill your Network & Discover exciting Global Opportunities
            </h1>
            <p className="pb-5">
              Being a student-led organization, our primary focus is to build an
              active community of like-minded youth where we can all discuss
              solutions & problems related to our journeys and experiences from
              present school to choice of university!
            </p>
            <button className="Button">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Networking;
