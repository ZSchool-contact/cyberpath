"use client";
import { useEffect } from "react";
import { useClerk } from "@clerk/nextjs";

export default function SignOutPage() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut({ redirectUrl: "/" });
  }, [signOut]);

  return (
    <div style={{ minHeight: "100vh", background: "#050d18", display: "flex", alignItems: "center", justifyContent: "center", color: "#cdd9f0" }}>
      מתנתק...
    </div>
  );
}
