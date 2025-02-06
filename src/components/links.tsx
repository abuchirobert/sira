import { Activity, ClipboardPlus, Home, SquarePen } from "lucide-react";

export const dashboardLinks = [
  { name: "Home", description: "", href: "/dashboard", icon: <Home /> },
  {
    name: "Submitted reports",
    href: "/dashboard/reports",
    description: "Check the status of the reports you have made so far.",
    icon: <ClipboardPlus />,
  },
  {
    name: "Drafts",
    href: "/dashboard/drafts",
    description: "Check the status of the reports you have made so far.",
    icon: <SquarePen />,
  },
  {
    name: "Recent activities",
    href: "/dashboard/activities",
    description: "Check the status of the reports you have made so far.",
    icon: <Activity />,
  },
];
