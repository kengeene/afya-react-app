import { useState, useEffect } from "react";
import Issue from "./Issue";
import { useQuery } from "@apollo/client";
import { GET_ISSUES } from "@/graphql/queries";
import Loading from "@/components/ui/loading";

export default function KeyIssues() {
  const { loading, data } = useQuery(GET_ISSUES);

  const [keyIssues, setKeyIssues] = useState([])
  ;
  const [selectedIssueId, setSelectedIssueId] = useState('1');

  useEffect(() => {
    if (data) {
      setSelectedIssueId(data.keyIssues[0].id);
      setKeyIssues(data.keyIssues);
    }
  }, [data]);

  if (loading) return <Loading />;

  return (
    <div className="col-span-3 bg-white p-5">
      <span className=" text-sm text-gray-400 my-10">KEY ISSUES</span>
      {
      loading ? <Loading /> :
      <div className="grid grid-cols-3 gap-10">
        {keyIssues.map((issue: {
          id: string;
          type: string;
          location: string;
        }, key) => (
          <Issue
            key={key}
            title={issue.type}
            location={issue.location}
            handleClick={() => setSelectedIssueId(issue.id)}
            className={
              selectedIssueId === issue.id ? "border-2 border-purple-700" : ""
            }
          />
        ))}
      </div>
      }
    </div>
  );
}