import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import HamburgerBtn from "../ui/HamburgerBtn";

export function LeftDrawerMBL({ showDrawer }) {
  return (
    <Sheet>
      {/* Trigger Button */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hamburger md:hidden mt-0"
        >
          <HamburgerBtn />
        </Button>
      </SheetTrigger>

      {/* Drawer Content */}
      <SheetContent side="left" className="w-64">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Navigation</h2>
          <nav className="flex flex-col space-y-2">
            <a href="/shop" className="hover:text-blue-600">
              Shop
            </a>
            <a href="/sale" className="hover:text-blue-600">
              On Sale
            </a>
            <a href="/new" className="hover:text-blue-600">
              New Arrivals
            </a>
            <a href="/brands" className="hover:text-blue-600">
              Brands
            </a>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
