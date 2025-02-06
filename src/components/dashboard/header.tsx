import React from "react";
import { Button } from "../ui/button";
import { Bell, ChevronDown, FilePlus2, User } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between max-sm:flex-col gap-4 py-8 max-sm:py-4 px-4 bg-white">
      <Button>
        <FilePlus2 />
        Make a report
      </Button>

      <div className="self-end profile flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell />
        </Button>
        <div className="profile-picture rounded-full border border-neutral-400 p-0.5 size-6">
          <User className="size-full" />
        </div>
        <span className="text-sm text-center">Hi Abuchi</span>
        <Button variant="ghost" size="icon">
          <ChevronDown />
        </Button>
      </div>
    </div>
  );
};

export const SubHeader: React.FC<{ title: React.ReactNode }> = ({ title }) => (
  <div className="report-header bg-primary text-white p-4 text-center text-lg font-semibold -mx-4 md:-mx-8 -mt-4 md:-mt-8">
    {title}
  </div>
);

export default DashboardHeader;
