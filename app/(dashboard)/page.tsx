"use client"
import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export default function Home() {
  // const accountQuery = useGetAccounts();
  const { onOpen } = useNewAccount();
  return (
    <div>
      <Button onClick={onOpen}>Add a new account</Button>
    </div>
  );
}
