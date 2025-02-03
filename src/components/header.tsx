import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="p-4 md:px-8 bg-white border-b border-neutral-300">
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="/images/logo.svg"
          alt="Sira Logo"
          className="logo max-md:w-16"
        />

        <nav className="flex gap-4">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
