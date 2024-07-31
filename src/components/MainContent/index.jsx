import LineChart from "./LineChart";
import { TableComponent } from "./Table";
import Monitoring from "./Monitoring";

export default function MainContent() {
  const chartData = [
    {
      chartTitle: "Foot Fall",
      measurementUnit: "Patients",
      chartData: [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 21 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 34 },
        { month: "May", desktop: 632 },
        { month: "June", desktop: 400 },
      ],
    },
    {
      chartTitle: "Patient Satisfaction",
      measurementUnit: "NPS",
      chartData: [
        { month: "January", desktop: 324 },
        { month: "February", desktop: 12 },
        { month: "March", desktop: 123 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 64 },
        { month: "June", desktop: 312 },
      ],
    },
    {
      chartTitle: "Revenue",
      measurementUnit: "Kenya Shillings",
      chartData: [
        { month: "January", desktop: 186 },
        { month: "February", desktop: 305 },
        { month: "March", desktop: 237 },
        { month: "April", desktop: 73 },
        { month: "May", desktop: 30 },
        { month: "June", desktop: 30 },
      ],
    },
  ];

  return (
    <div className="col-span-3 p-5 rounded-lg grid grid-cols-3 gap-10">
      <div className="col-span-3">1</div>
      {/* monitoring */}
      <Monitoring/>
      {/* Chartdata row */}
      {chartData.map((item, index) => (
        <LineChart
          key={index}
          chartTitle={item.chartTitle}
          chartData={item.chartData}
          measurementUnit={item.measurementUnit}
        />
      ))}
      <div className="bg-white col-span-3">
        <TableComponent />
      </div>
    </div>
  );
}