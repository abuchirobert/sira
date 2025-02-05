import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DefaultAuthPage = () => {
  return (
    <div className="flex flex-col gap-4 w-70 mx-auto p-4 animate-in fade-in duration-500">
      <img src="/images/walking-illustration.png" alt="Welcome Image" />

      <Button asChild>
        <Link href="/auth/signup">Create account</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
    </div>
  );
};

export default DefaultAuthPage;
