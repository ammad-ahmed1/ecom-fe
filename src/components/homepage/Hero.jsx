import React from "react";
import { Button } from "../ui/button";
import CountUp from "react-countup";
import { Separator } from "../ui/seperator";

const Hero = () => {
  const stats = [
    { end: 200, label: "International Brands" },
    { end: 150, label: "High-Quality Products" },
    { end: 225, label: "Happy Customers" },
  ];
  const statsMobile = [
    { end: 200, label: "International Brands" },
    { end: 150, label: "High-Quality Products" },
  ];
  const statsMobileOne = [{ end: 225, label: "Happy Customers" }];
  return (
    <div className="bg-[#F2F0F1] px-0 pt-10 md:px-20 md:pt-24 md:py-0 overflow-hidden">
      <div className="parent grid grid-cols-1 md:grid-cols-2">
        <div className="left px-4 md:px-0">
          <h2 className="__className_931021 text-4xl font-black lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p
            className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[575px]"
            // style="opacity: 1; transform: none;"
          >
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button className="w-full md:w-52" size="lg">
            Shop Now
          </Button>
          <div
            className={`hidden md:flex gap-2 md:gap-4 justify-between md:justify-start px-2 mt-4 md:mt-12`}
          >
            {stats.map((stat, index) => (
              <div key={index} className={``}>
                <h2 className="text-2xl md:text-[36px] font-medium md:font-medium text-black">
                  <CountUp start={0} end={stat.end} duration={2} />+
                </h2>
                <span className="mt-2 text-xs md:text-[12px] text-gray-600 tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex md:hidden gap-8 md:gap-4 justify-between md:justify-start px-4 mt-4 md:mt-12`}
        >
          {statsMobile.map((stat, index) => (
            <div key={index} className={``}>
              <h2 className="text-2xl md:text-[36px] font-medium md:font-medium text-black">
                <CountUp start={0} end={stat.end} duration={2} />+
              </h2>
              <span className="mt-2 text-xs md:text-[12px] text-gray-600 ">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className={`flex md:hidden justify-center  px-2 mt-4 md:mt-12`}>
          {statsMobileOne.map((stat, index) => (
            <div key={index} className={``}>
              <h2 className="text-2xl md:text-[36px] font-medium md:font-medium text-center">
                <CountUp start={0} end={stat.end} duration={2} />+
              </h2>
              <span className="mt-2 text-xs md:text-[12px] text-gray-600 ">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="right relative md:px-4 min-h-[448px] md:min-h-[550px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')]">
          <div className="first-star absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-[spin_3s_infinite]">
            <img src="svgs/small-star.svg" alt="small star" />
          </div>

          <div
            className="second-star absolute right-7 xl:right-0 top-12 
             max-w-[76px] max-h-[76px] 
             lg:max-w-24 lg:max-h-24 
             xl:max-w-[104px] xl:max-h-[104px] 
             animate-[spin_4s_linear_infinite]"
          >
            <img src="svgs/big-star.svg" alt="small star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
