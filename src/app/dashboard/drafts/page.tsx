import { SubHeader } from "@/components/dashboard/header";
import React from "react";

const drafts = [
  {
    id: 21,
    category: "Hardware",
    status: "draft",
    title: "New Server Setup",
    description: "Planning server configurations",
    date: "2023-09-21",
  },
  {
    id: 22,
    category: "Software",
    status: "draft",
    title: "Mobile App Redesign",
    description: "Outlining UI/UX changes",
    date: "2023-09-22",
  },
  {
    id: 23,
    category: "Others",
    status: "draft",
    title: "Company Policy Review",
    description: "Drafting new IT guidelines",
    date: "2023-09-23",
  },
  {
    id: 24,
    category: "Network",
    status: "draft",
    title: "Cloud Migration Strategy",
    description: "Planning move to cloud infrastructure",
    date: "2023-09-24",
  },
  {
    id: 25,
    category: "Hardware",
    status: "draft",
    title: "Device Procurement Plan",
    description: "Researching best options for new laptops",
    date: "2023-09-25",
  },
  {
    id: 26,
    category: "Software",
    status: "draft",
    title: "Custom CRM Development",
    description: "Outlining system requirements",
    date: "2023-09-26",
  },
  {
    id: 27,
    category: "Others",
    status: "draft",
    title: "Employee Training Schedule",
    description: "Preparing cybersecurity training roadmap",
    date: "2023-09-27",
  },
  {
    id: 28,
    category: "Network",
    status: "draft",
    title: "Data Center Expansion",
    description: "Preliminary research on infrastructure needs",
    date: "2023-09-28",
  },
  {
    id: 29,
    category: "Hardware",
    status: "draft",
    title: "Workstation Upgrades",
    description: "Evaluating performance benchmarks",
    date: "2023-09-29",
  },
  {
    id: 30,
    category: "Software",
    status: "draft",
    title: "AI Integration Plan",
    description: "Exploring AI automation opportunities",
    date: "2023-09-30",
  },
];

const Drafts = () => {
  return (
    <div>
      <SubHeader title="Your reports in draft" />

      <div className="text-center my-8">
        View reports you did&apos;t complete
      </div>

      <div className="drafts mt-10">
        {drafts.map(({ id, title, date, status }) => (
          <React.Fragment key={id}>
            <div className="flex justify-between w-full py-2 hover:bg-neutral-200">
              <div className="content capitalize flex flex-col font-bold text-lg">
                {title}
                <div className="date text-sm font-normal">{date}</div>
              </div>
              <div className="status p-1 rounded text-sm self-center uppercase bg-pink-400">
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

export default Drafts;
