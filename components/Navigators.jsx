"use client";
import React, { useState } from "react";
import NavButton from "./NavButton";
import { usePathname, useRouter } from "next/navigation";
import { useMedia } from "react-use";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const menus = [
  { id: 1, label: "Overview", path: "/" },
  { id: 2, label: "Transitions", path: "/transitions" },
  { id: 3, label: "Accounts", path: "/accounts" },
  { id: 4, label: "Category", path: "/categories" },
  { id: 5, label: "Settings", path: "/settings" },
];

export default function Navigators() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);
  const onClick = (href) => {
    router.push(href);
    setIsOpen(false);
  };
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white transition focus:bg-white/30 border-none bg-white/10 font-normal hover:bg-white/20 hover:text-white"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-14">
            {menus.map((item) => (
              <Button
              className="w-full flex justify-start"
                key={item.id}
                onClick={() => onClick(item.path)}
                variant={item.path === pathname ? "secondary" : "ghost"}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2">
      {menus.map((item) => (
        <NavButton
          key={item.id}
          label={item.label}
          path={item.path}
          isActive={item.path === pathname}
        />
      ))}
    </nav>
  );
}
