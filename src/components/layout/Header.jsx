import { navItems } from "@/constants/nav-items";
import { Link } from "react-router-dom";
import HamburgerBtn from "../ui/HamburgerBtn";
import { LeftDrawerMBL } from "./LeftDrawerMbl";
import { useState } from "react";

export default function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div className="main flex justify-center items-center gap-2  py-2 sticky top-0 bg-gray-50 z-10">
      <LeftDrawerMBL showDrawer={showDrawer} />

      <div className="logo">
        <a
          class="__className_931021 text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10 font-black"
          href="/"
        >
          SHOP.CO
        </a>
      </div>
      <div className="navs hidden md:flex lg:gap-1 xl:gap=2 mr-2 lg:mr-7">
        {navItems.map((item, key) => (
          <div className="nav px-2  py-2 text-sm  flex items-center cursor-pointer hover:bg-[#F0F0F0] rounded-md">
            {item.label}{" "}
            <span className="mt-1 ml-1 items-center ">
              {item.icon && <item.icon className="w-4 h-4" />}
            </span>
          </div>
        ))}
      </div>
      <div className="search hidden input-group focus-within:shadow-lg p-3 pl-4 transition-all relative items-center  rounded-full overflow-hidden hidden md:flex bg-[#F0F0F0] mr-3 lg:mr-10">
        <span className="mr-4">
          <img src="svgs/search.svg" alt="search" className="w-5 h-5" />
        </span>
        <input
          type="text"
          placeholder="Search for products..."
          className="lg:w-[250px] xl:w-[500px] md:w-[120px] h-[23px] bg-transparent focus:outline-none"
        />
      </div>
      <div className="actions flex items-center gap-6 font-normal">
        <div className="sm:flex md:hidden">
          <img
            src="svgs/search-black.svg"
            alt="search-black"
            className="w-5 h-5"
          />
        </div>
        <div>
          <img src="svgs/cart.svg" alt="search" className="w-5.5 h-5.5 " />
        </div>
        <div>
          <img src="svgs/user.svg" alt="search" className="w-5.5 h-5.5 " />
        </div>
      </div>
    </div>
  );
}
