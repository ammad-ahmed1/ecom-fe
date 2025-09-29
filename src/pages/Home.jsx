import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "@/components/homepage/Hero";
import Brands from "@/components/homepage/Brands";
import HotItems from "@/components/homepage/HotItems";

import { newArrivals } from "@/data/newArrival";
import { topSelling } from "@/data/topSelling";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Brands />
      <div className="main my-[50px] sm:my-[72px]">
        <section className="max-w-frame mx-auto text-center">
          <HotItems heading={"New Arrivals"} products={newArrivals} />
          <div class="max-w-frame mx-auto px-4 xl:px-0">
            <hr class="h-[1px] border-t-black/10 my-10 sm:my-16"/>
          </div>
          <HotItems heading={"Top Selling"} products={topSelling} />
        </section>
      </div>
    </Layout>
  );
}
