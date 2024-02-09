import { heroBanner } from "../../../../assets";
import { HeroSectionDetails } from "./contextData";
function Hero() {
  return (
    <div className="px-4 xs:px-8 ss:px-14 pt-[150px] bg-ghostWhite">
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <div className="mb-10">
            <h1 className="text-4xl ssm:text-5xl md:text-6xl mb-10 text-[#3B3951] font-bold">
              {HeroSectionDetails.Title}
            </h1>
            <p className="font-Quicksand text-[#8D8BAC] font-medium text-lg md:text-xl">
              {HeroSectionDetails.desTitle}
            </p>
          </div>
          <div className="mb-10">
            <button className="Button">{HeroSectionDetails.btn1}</button>
          </div>
          <div>
            <div className="mb-5">
              <p className="text-lg md:text-xl font-thin ">
                {HeroSectionDetails.subTitle}
              </p>
            </div>
            <div className="flex bg-transparent w-full ssm:w-[85%] lg:w-[70%] rounded-lg p-1 xs:p-3 border  border-[#0abab5] shadow-sm shadow-[#0abab5]">
              <input
                type="text"
                placeholder="Enter Your Email "
                className="w-full  outline-none "
              />
              <button className="Button2 ">{HeroSectionDetails.btn2}</button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            className="w-full ss:w-[75%] sm:w-full"
            src={heroBanner}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
