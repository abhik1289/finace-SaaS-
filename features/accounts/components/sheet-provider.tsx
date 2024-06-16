"use client";
import React from "react";
import NewAccountSheet from "./new-account-sheet";
import { useMountedState } from "react-use";
import EditAccountSheet from "./edit-account-sheet";
export default function SheetProvider() {
  const isMounted = useMountedState();
  if (!isMounted) return null;
  return (
    <>
      <NewAccountSheet />
      <EditAccountSheet />
    </>
  );
}
