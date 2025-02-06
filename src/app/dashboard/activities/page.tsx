import { SubHeader } from "@/components/dashboard/header";
import { FilePenLine } from "lucide-react";
import React from "react";

const recentActivities = [
  {
    id: 1,
    activity: "You submitted a new report",
    timeAgo: "An hour ago",
  },
  {
    id: 2,
    activity: "Make a new report to get started and going",
    timeAgo: "A month ago",
  },
  {
    id: 3,
    activity: "Make a new report to get started and going",
    timeAgo: "A month ago",
  },
  {
    id: 4,
    activity: "Make a new report to get started and going",
    timeAgo: "A month ago",
  },
];

const RecentActivities = () => {
  return (
    <div>
      <SubHeader title="Recent Activities" />

      <div className="text-neutral-500 text-xl mt-10">Recent Activities</div>

      <div className="activities">
        {recentActivities.map(({ id, activity, timeAgo }) => (
          <React.Fragment key={id}>
            <div className="flex items-center gap-2 w-full py-2 hover:bg-neutral-200">
              <FilePenLine />
              <div className="content capitalize flex flex-col font-semibold text-lg">
                {activity}
                <div className="date text-sm font-normal">{timeAgo}</div>
              </div>
            </div>
            <hr className="border-neutral-500" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
