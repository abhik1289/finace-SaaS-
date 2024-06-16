import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
// import {};
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-2 ">
          <h1 className="font-semibold text-3xl text-slate-800">
            Welcome Back !
          </h1>
          <p className="text-slate-400">
            Log in or create a new account for get back to your dashboard
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 flex justify-center items-center">
        <Image width={100} height={100} alt="log" src="logo.svg" />
      </div>
    </div>
  );
}
