"use client";


import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

export default function Header() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between p-5 bg-slate-800">
      {user && (
        <h1>
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

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
