import React from "react";
import { testimonials } from "@/data/testimonials";
import { FullStar } from "@/svgs/StarsIcons";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    className: "center",
    dots: false,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="head">
        <h2 className="__className_931021 text-[32px] md:text-5xl my-8 md:my-14 font-black capitalize">
          OUR HAPPY CUSTOMERS
        </h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="reviewCard border border-black/10 rounded-[20px] min-h-[280px] py-4 px-8 ">
              <div className="flex gap-2 my-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>
                    <FullStar key={index} color="gold" />
                  </span>
                ))}
              </div>
              <h1 className="my-4 text-xl font-semibold">{testimonial.name}</h1>
              <p className="text-sm sm:text-base text-black/60">
                {testimonial.review}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
