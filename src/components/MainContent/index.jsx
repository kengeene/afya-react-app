import Chart from "./Chart";
import { TableComponent } from "./Table";
export default function MainContent() {
  const chartData = [
    {
      chartTitle: "line chart",
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
      chartTitle: "line chart",
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
      chartTitle: "line chart",
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
      <div className="col-span-3">2</div>
      {/* Chartdata row */}
      {chartData.map((item, index) => (
        <Chart
          key={index}
          chartTitle={item.chartTitle}
          chartData={item.chartData}
        />
      ))}
      <div className="bg-white col-span-3"><TableComponent/></div>
    </div>
  );
}