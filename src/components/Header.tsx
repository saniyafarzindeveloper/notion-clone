"use client";

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function Header() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-red-800">
      <h1 className="text-xl font-bold">
        {user?.firstName}
        {`'s`} Space
      </h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
