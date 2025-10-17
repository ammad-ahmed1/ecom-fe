import React from "react";

const BrowseStyle = () => {
  return (
    <div className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
      <h1 className="__className_931021 text-4xl font-black leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize">
        BROWSE BY dress STYLE
      </h1>
      <div className="flex flex-col gap-4 ">
        <div className="first flex flex-col md:flex-row gap-4">
          <div className="casual bg-[url('/images/dress-style-1.png')] h-64 w-full bg-cover bg-center md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[275px] rounded-2xl text-2xl md:text-4xl font-bold text-left py-6 px-4">
            Casual
          </div>
          <div className="formal bg-[url('/images/dress-style-2.png')] h-64 w-full bg-cover bg-center md:max-w-[684px]  h-[275px] rounded-2xl text-2xl md:text-4xl font-bold text-left py-6 px-4">
            Formal
          </div>
        </div>
        <div className="second flex flex-col md:flex-row gap-4">
          <div className="party bg-[url('/images/dress-style-3.png')] h-64 w-full bg-cover bg-center md:max-w-[684px] h-[275px] rounded-2xl text-2xl md:text-4xl font-bold text-left py-6 px-4">
            Party
          </div>
          <div className="gym bg-[url('/images/dress-style-4.png')] h-64 w-full bg-cover bg-center md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[275px] rounded-2xl text-2xl md:text-4xl font-bold text-left py-6 px-4">
            Gym
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
