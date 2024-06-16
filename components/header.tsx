import React from "react";
import HeaderLogo from "./header-logo";
import Navigators from "./Navigators";
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMessage from "./welcome-msg";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-blue-700 to-blue-600 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex justify-center lg:gap-x-16">
            <HeaderLogo />
            <Navigators />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-blue-300" />
          </ClerkLoading>
        </div>
        <WelcomeMessage/>
      </div>
    </header>
  );
}
