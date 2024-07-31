import { useState } from "react";
import Issue from "./Issue";
export default function KeyIssues() {
  const [keyIssues] = useState([
    {
      id: 1,
      title: "Patient Satisfaction",
      location: "South Africa",
    },
    {
      id: 2,
      title: "Opened Late",
      location: "South Africa",
    },
    {
      id: 3,
      title: "Bad Receipts",
      location: "South Africa",
    },
    {
      id: 4,
      title: "Late Check-In",
      location: "South Africa",
    },
    {
      id: 5,
      title: "Delay in Lab",
      location: "South Africa",
    },
    {
      id: 6,
      title: "Careless waste disposal",
      location: "South Africa",
    },
  ]);
  const [selectedIssueId, setSelectedIssueId] = useState(1);

  return (
    <div className="col-span-3 bg-white p-5">
      <span className=" text-sm text-gray-400 my-10">KEY ISSUES</span>
      <div className="grid grid-cols-3 gap-10">
        {keyIssues.map((issue, key) => (
          <Issue
            key={key}
            title={issue.title}
            location={issue.location}
            handleClick={() => setSelectedIssueId(issue.id)}
            className={
              selectedIssueId === issue.id ? "border-2 border-purple-700" : ""
            }
          />
        ))}
      </div>
    </div>
  );
}