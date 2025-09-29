import React from "react";

const Brands = () => {
  const brandLogos = [
    {
      src: "/svgs/brands/versace-logo.svg",
      alt: "Versace",
    },
    {
      src: "/svgs/brands/zara-logo.svg",
      alt: "Zara",
    },
    {
      src: "/svgs/brands/gucci-logo.svg",
      alt: "Gucci",
    },
    {
      src: "/svgs/brands/prada-logo.svg",
      alt: "Prada",
    },
    {
      src: "/svgs/brands/calvin-klein-logo.svg",
      alt: "Calvin Klein",
    },
  ];

  const Logo = ({ src, alt, className = "" }) => {
    return (
      <img
        alt={alt}
        src={src}
        fetchpriority="high"
        decoding="async"
        className={`h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11 ${className}`}
      />
    );
  };

  return (
    <div className="flex flex-wrap justify-center bg-black gap-4 md:gap-24">
        {brandLogos.map((item, key) => (
             <Logo src={item.src} />
        ))}
     
    </div>
  );
};

export default Brands;
