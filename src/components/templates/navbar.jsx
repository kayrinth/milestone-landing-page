import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/atoms/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/atoms/sheet";
import { LayoutDashboard, ContactRound, Info, Sparkles } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { label: "Home", href: "#home", icon: LayoutDashboard },
    { label: "About", href: "#about", icon: Info },
    { label: "Features", href: "#features", icon: Sparkles },
    { label: "Contact", href: "#contact", icon: ContactRound },
  ];

  return (
    <header className="fixed top-0 z-50 w-full text-white py-4">
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

          <SheetContent side="right" className="w-64 bg-white">
            <nav className="flex flex-col gap-4 mt-8 ml-3">
              {menus.map((menu) => (
                <div key={menu.label} className="flex items-center">
                  <menu.icon className="mr-2" />
                  <a
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium"
                  >
                    {menu.label}
                  </a>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
