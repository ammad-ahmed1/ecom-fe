import React from "react";
import ProductCard from "../shared/ProductCard";
import Slider from "react-slick";

const HotItems = ({ heading, products }) => {
  var settings = {
    className: "center",
    dots: false,
    infinite: true,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section>
      <h2 className="__className_931021 text-[32px] md:text-5xl mb-8 md:mb-14 capitalize">
        {heading}
      </h2>
      {/* <div className="flex justify-center mx-4 xl:mx-0 space-x-4 sm:space-x-5"> */}
      {/* <div className="slider-container"> */}
      <Slider
        {...settings}
        className="[&_.slick-slide>div]:mx-2 [&_.slick-list]:-mx-2"
      >
        {products.map((product, key) => (
          <div key={key} className="px-2">
            {" "}
            {/* controls spacing between slides */}
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default HotItems;
