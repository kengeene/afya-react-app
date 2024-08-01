import LineChart from "./LineChart";

export default function AnalyticMetrics() {
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
    <>
      {chartData.map((item, index) => (
        <LineChart
          key={index}
          chartTitle={item.chartTitle}
          chartData={item.chartData}
          measurementUnit={item.measurementUnit}
        />
      ))}
    </>
  );
}
