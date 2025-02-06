"use client";
import { SubHeader } from "@/components/dashboard/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const reports = [
  {
    id: 1,
    category: "Hardware",
    status: "resolved",
    title: "Server Maintenance",
    description: "Replaced faulty PSU",
    date: "2023-09-01",
  },
  {
    id: 2,
    category: "Software",
    status: "pending",
    title: "Bug Fix",
    description: "Investigating login issue",
    date: "2023-09-02",
  },
  {
    id: 3,
    category: "Others",
    status: "resolved",
    title: "System Update",
    description: "Software patching completed",
    date: "2023-09-03",
  },
  {
    id: 4,
    category: "Network",
    status: "pending",
    title: "Connectivity Issue",
    description: "Router configuration update required",
    date: "2023-09-04",
  },
  {
    id: 5,
    category: "Hardware",
    status: "resolved",
    title: "Workstation Repair",
    description: "Replaced damaged SSD",
    date: "2023-09-05",
  },
  {
    id: 6,
    category: "Software",
    status: "pending",
    title: "App Deployment",
    description: "Awaiting QA approval",
    date: "2023-09-06",
  },
  {
    id: 7,
    category: "Others",
    status: "resolved",
    title: "User Training",
    description: "Security awareness training completed",
    date: "2023-09-07",
  },
  {
    id: 8,
    category: "Network",
    status: "pending",
    title: "Firewall Upgrade",
    description: "Pending approval from IT manager",
    date: "2023-09-08",
  },
  {
    id: 9,
    category: "Hardware",
    status: "resolved",
    title: "Printer Issue",
    description: "Replaced toner and fixed driver issue",
    date: "2023-09-09",
  },
  {
    id: 10,
    category: "Software",
    status: "pending",
    title: "Database Optimization",
    description: "Query performance tuning in progress",
    date: "2023-09-10",
  },
  {
    id: 11,
    category: "Others",
    status: "resolved",
    title: "Policy Update",
    description: "Updated IT security policies",
    date: "2023-09-11",
  },
  {
    id: 12,
    category: "Network",
    status: "pending",
    title: "VPN Access Issue",
    description: "Investigating remote login problems",
    date: "2023-09-12",
  },
  {
    id: 13,
    category: "Hardware",
    status: "resolved",
    title: "Device Upgrade",
    description: "Upgraded RAM on all office PCs",
    date: "2023-09-13",
  },
  {
    id: 14,
    category: "Software",
    status: "pending",
    title: "CMS Update",
    description: "Version upgrade in progress",
    date: "2023-09-14",
  },
  {
    id: 15,
    category: "Others",
    status: "resolved",
    title: "Security Audit",
    description: "Completed annual security assessment",
    date: "2023-09-15",
  },
  {
    id: 16,
    category: "Network",
    status: "pending",
    title: "LAN Expansion",
    description: "Setting up additional office connections",
    date: "2023-09-16",
  },
  {
    id: 17,
    category: "Hardware",
    status: "resolved",
    title: "Monitor Replacement",
    description: "Replaced faulty screens",
    date: "2023-09-17",
  },
  {
    id: 18,
    category: "Software",
    status: "pending",
    title: "Backup Failure",
    description: "Investigating cloud backup failures",
    date: "2023-09-18",
  },
  {
    id: 19,
    category: "Others",
    status: "resolved",
    title: "Inventory Audit",
    description: "Reviewed and updated asset records",
    date: "2023-09-19",
  },
  {
    id: 20,
    category: "Network",
    status: "pending",
    title: "Wireless Interference",
    description: "Identifying source of Wi-Fi disruptions",
    date: "2023-09-20",
  },
];

const Reports = () => {
  const [mode, setMode] = useState<"resolved" | "pending">("resolved");

  return (
    <div>
      <SubHeader
        title={
          <>Your {mode === "resolved" ? "submitted" : "pending"} reports</>
        }
      />

      <div className="text-center my-8">
        {mode === "resolved"
          ? "View your resolved reports here."
          : "View reports that are still pending "}
      </div>

      <div className="btn-group flex">
        <Button
          variant="ghost"
          className={cn(
            "rounded-none border-b w-full hover:bg-primary/10",
            mode === "resolved" && "bg-primary/20 border-primary"
          )}
          onClick={() => setMode("resolved")}
        >
          Resolved
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "rounded-none border-b w-full hover:bg-primary/10",
            mode === "pending" && "bg-primary/20 border-primary"
          )}
          onClick={() => setMode("pending")}
        >
          Pending
        </Button>
      </div>

      <div className="reports mt-10">
        {reports
          .filter((report) => report.status === mode)
          .map(({ id, title, date, status }) => (
            <React.Fragment key={id}>
              <div className="flex justify-between w-full py-2 hover:bg-neutral-200">
                <div className="content capitalize flex flex-col font-bold text-lg">
                  {title}
                  <div className="date text-sm font-normal">{date}</div>
                </div>
                <div
                  className={cn(
                    "status p-1 rounded text-sm self-center uppercase",
                    mode === "resolved" ? "bg-primary/20" : "bg-amber-200"
                  )}
                >
                  {status}
                </div>
              </div>
              <hr className="border-neutral-500" />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default Reports;
