import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  label: string;
  path: string;
  isActive?: boolean;
}

export default function NavButton({ label, path, isActive }: Props) {
  return (
    <Button
      asChild
      size={"sm"}
      variant={"outline"}
      className={cn("w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white transition focus:bg-white/30", isActive ? "bg-white/10 text-white" : "bg-transparent")}
    >
      <Link href={path}>{label}</Link>
    </Button>
  );
}
