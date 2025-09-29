import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { EmptyStar, FullStar, HalfStar } from "../../svgs/StarsIcons";
import { Button } from "../ui/button";

const ProductCard = ({ product }) => {
  return (
    <Card className="w-[300px] text-left">
      {/* Image */}
      <CardHeader className="p-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[300px] object-cover rounded-xl"
        />
      </CardHeader>

      {/* Title + Rating + Price */}
      <CardContent className="pt-4">
        <CardTitle className="text-lg ">{product.title}</CardTitle>
        <CardDescription className="mt-1 ">
          {Array.from({ length: 5 }).map((_, index) => {
            if (product.rating >= index + 1) {
              return <FullStar key={index} color="gold" />;
            } else if (product.rating >= index + 0.5) {
              return <HalfStar key={index} color="gold" />;
            } else {
              return <EmptyStar key={index} color="gold" />;
            }
          })}{" "}
          <span className="ml-3">
            {product.rating}/{5}
          </span>
        </CardDescription>
        <p className="mt-3 text-xl font-semibold">${product.price}</p>
      </CardContent>

      {/* Footer → Add to Cart */}
      <CardFooter className="flex justify-start">
        <Button className=" w-[80%]" size="sm">
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
