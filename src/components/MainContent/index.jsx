import { TableComponent } from "./Table";
import Monitoring from "./Monitoring";
import KeyIssues from "./KeyIssues";
import AnalyticMetrics from "./AnalyticMetrics";

export default function MainContent() {
  return (
    <div className="col-span-3 rounded-lg grid grid-cols-3 gap-10">
      {/* key issues */}
      <KeyIssues />
      {/* monitoring */}
      <Monitoring/>
      {/* Chartdata row */}
     <AnalyticMetrics/>
      <div className="bg-white col-span-3">
        <TableComponent />
      </div>
    </div>
  );
}