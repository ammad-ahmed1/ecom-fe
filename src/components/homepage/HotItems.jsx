import React from "react";
import ProductCard from "../shared/ProductCard";

const HotItems = ({ heading, products }) => {
  console.log(products, "....HotItems")
  return (
    <section>
      <h2 className="__className_931021 text-[32px] md:text-5xl mb-8 md:mb-14 capitalize">
        {heading}
      </h2>
      <div className="flex justify-center mx-4 xl:mx-0 space-x-4 sm:space-x-5">
        {products.map((product, key) => (
          <>
          <ProductCard product={ product } />
          </>
        ))}
      </div>
    </section>
  );
};

export default HotItems;
