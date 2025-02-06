"use client";
import React, { useState } from "react";
import {
  Activity,
  ClipboardPlus,
  Home,
  LogOut,
  Menu,
  Moon,
  SquarePen,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Switch, SwitchThumb } from "@radix-ui/react-switch";
import { Button } from "../ui/button";

const navLinks = [
  { name: "Home", href: "/dashboard", icon: <Home /> },
  {
    name: "Submitted reports",
    href: "/dashboard/reports",
    icon: <ClipboardPlus />,
  },
  { name: "Drafts", href: "/dashboard/drafts", icon: <SquarePen /> },
  {
    name: "Recent activities",
    href: "/dashboard/activities",
    icon: <Activity />,
  },
];

const DashboardSidebar = () => (
  <>
    <DesktopSidebar />
    <MobileSidebar />
  </>
);

const DesktopSidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="max-md:hidden w-[300px] h-screen shrink-0 overflow-y-auto flex flex-col bg-white">
      <Link href="/">
        <img
          src="/images/logo.svg"
          alt="Sira Logo"
          className="logo w-16 py-10 mx-auto"
        />
      </Link>

      <ul>
        {navLinks.map(({ name, href, icon }) => (
          <li key={name + href}>
            <Link
              href={href}
              className={cn(
                "flex items-center gap-4 p-4 transition duration-300",
                pathname === href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10"
              )}
            >
              {icon}
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer flex flex-col gap-4 mt-auto">
        <DarkModeToggle />

        <button className="flex items-center gap-4 cursor-pointer p-4 transition duration-300 text-red-700 bg-red-100 hover:bg-red-200">
          <LogOut />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

const MobileSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "md:hidden overflow-y-auto h-screen shrink-0",
        !collapsed && "fixed inset-0 bg-black/50"
      )}
      onClick={(e) => {
        if (
          e.target instanceof HTMLElement &&
          !e.target.closest(".sidebar-mobile")
        ) {
          setCollapsed(true);
        }
      }}
    >
      <nav
        className={cn(
          "sidebar-mobile h-full flex flex-col bg-white transition-width duration-300",
          collapsed ? "w-16" : "w-[300px]"
        )}
      >
        <Button
          variant="outline"
          size="icon"
          className={cn("mt-4", collapsed ? "mx-auto" : "ml-auto mr-4")}
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu />
        </Button>
        <Link href="/">
          <img
            src="/images/logo.svg"
            alt="Sira Logo"
            className={cn("logo py-5 mx-auto", collapsed ? "w-12" : "w-16")}
          />
        </Link>
        <ul>
          {navLinks.map(({ name, href, icon }) => (
            <li key={name + href}>
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-4 p-4 transition duration-300",
                  pathname === href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10",
                  collapsed && "justify-center"
                )}
              >
                {icon}
                {!collapsed && <span>{name}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer flex flex-col gap-4 mt-auto">
          <DarkModeToggle />
          <button className="flex max-md:justify-center items-center gap-4 cursor-pointer p-4 transition duration-300 text-red-700 bg-red-100 hover:bg-red-200">
            <LogOut />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </nav>
    </div>
  );
};

const DarkModeToggle = () => (
  <Switch className="peer inline-flex w-14 h-8 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input px-0.5 self-center">
    <SwitchThumb className="group pointer-events-none block size-6 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0">
      <Sun className="sun size-full group-data-[state=checked]:hidden" />
      <Moon className="moon size-full group-data-[state=unchecked]:hidden" />
    </SwitchThumb>
  </Switch>
);

export default DashboardSidebar;
