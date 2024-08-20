import TableSection from "@/components/MainContent/TableComponent/index.tsx";
import Monitoring from "@/components/MainContent/Monitoring/index.tsx";
import KeyIssues from "@/components/MainContent/KeyIssues/index.tsx";
import AnalyticMetrics from "@/components/MainContent/AnalyticMetrics/index.tsx";

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