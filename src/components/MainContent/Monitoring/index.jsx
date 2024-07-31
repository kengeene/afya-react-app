import { Button } from "@/components/ui/button";
import DateRangePicker from "./DateRangePicker";
import { useState } from "react";
export default function Monitoring() {
    const [activePeriod, setActivePeriod] = useState('today')

  return (
    <div className="col-span-3 bg-white p-10">
      <span className="text-semibold text-sm text-gray-400">
        MONITORING PERIOD
      </span>
      <div className="grid grid-cols-2 gap-10 my-5">
        <div className="flex flex-row w-fit">
          <Button className={activePeriod === "today" ?" bg-purple-400" : "text-sm border-2"} onClick={() => setActivePeriod("today")}>Today</Button>
          <Button
            className={activePeriod === "week" ?" bg-purple-400" : "text-sm border-2"}
            onClick={() => setActivePeriod("week")}
          >
            Week
          </Button>
          <Button
            className={activePeriod === "month" ?" bg-purple-400" : "text-sm border-2"}
            onClick={() => setActivePeriod("month")}
          >
            Month
          </Button>
          <Button
            className={activePeriod === "year" ?" bg-purple-400" : "text-sm border-2"}
            onClick={() => setActivePeriod("year")}
          >
            Year
          </Button>
        </div>
        <div className="flex flex-col">
          <DateRangePicker />
        </div>
      </div>
    </div>
  );
}
