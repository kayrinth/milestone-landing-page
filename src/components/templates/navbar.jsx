import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/atoms/sheet";
import { LayoutDashboard, ContactRound, Info, Sparkles } from "lucide-react";
import cta from "../../assets/cta.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menus = [
    { label: "Home", href: "#home", icon: LayoutDashboard },
    { label: "About", href: "#about", icon: Info },
    { label: "Features", href: "#features", icon: Sparkles },
    { label: "Contact", href: "#contact", icon: ContactRound },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full text-white py-4 ${scrolled ? "bg-teal-800/60 backdrop-blur-md" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="#home" className="text-4xl font-bold">
          FurniShop
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {menus.map((menu) => (
            <a
              key={menu.label}
              href={menu.href}
              className="text-sm font-medium text-white hover:text-gray-300"
            >
              {menu.label}
            </a>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72 bg-white p-0">
            <nav className="flex flex-col gap-4 ">
              <div className="relative h-52 w-full mb-4">
                <img
                  src={cta}
                  alt="image furniShop"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 overflow-hidden bg-black opacity-40"></div>
                <h2 className="text-3xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  FurniShop
                </h2>
                <p className="text-white text-sm mt-1 absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Furniture Store
                </p>
              </div>
              <div className="flex flex-col">
                {menus.map((menu) => (
                  <div className="px-4">
                    <div key={menu.label} className="flex items-center mb-4 ">
                      <a
                        href={menu.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-4 px-4 py-4 text-gray-700  hover:text-teal-800 transition-colors group"
                      >
                        <menu.icon
                          className="text-teal-600 group-hover:text-teal-800 transition-colors"
                          size={20}
                        />
                        <span className="text-sm font-medium">
                          {menu.label}
                        </span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                © NameBrand 2022 – All Rights Reserved
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
