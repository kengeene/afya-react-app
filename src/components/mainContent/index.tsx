import TableSection from "./tableComponent";
import Monitoring from "./monitoring";
import KeyIssues from "./keyIssues";
import AnalyticMetrics from "./analyticMetrics";

export default function MainContent() {
  return (
    <div className="col-span-3 rounded-lg grid grid-cols-3 gap-10">
      {/* key issues */}
      <KeyIssues />
      {/* monitoring */}
      <Monitoring />
      {/* Chartdata row */}
      <AnalyticMetrics />
      {/* Table Row*/}
      <TableSection />
    </div>
  );
}