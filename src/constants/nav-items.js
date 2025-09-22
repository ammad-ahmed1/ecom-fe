import { ChevronDown } from "lucide-react";

export const navItems = [
  {
    label: "Shop",
    route: "/shop",
    description: "Browse all products for every style and occasion.",
    icon: ChevronDown,
    children: [
      {
        label: "Men",
        route: "/shop/men",
        description: "Trendy and comfortable outfits designed for men.",
      },
      {
        label: "Women",
        route: "/shop/women",
        description: "Elegant and stylish wear made for modern women.",
      },
    ],
  },
  {
    label: "On Sale",
    route: "/sale",
    description: "Get the best deals with huge seasonal discounts.",
  },
  {
    label: "New Arrivals",
    route: "/new",
    description: "Discover the latest trends and newly launched products.",
  },
  {
    label: "Brands",
    route: "/brands",
    description: "Shop by top brands you already love and trust.",
  },
];
