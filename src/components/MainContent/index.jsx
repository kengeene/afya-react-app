import Chart from "./Chart";
export default function MainContent() {
  const chartData = [1, 2, 3];

  return (
    <div className="col-span-2 bg-white p-5 rounded-lg grid grid-cols-3 gap-10">
      <div className="col-span-3">1</div>
      <div className="col-span-3">2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      {
      chartData.map((item, index) => (
          <Chart key={index}/>
        ))
      }
      <div className="col-span-3">6</div>
    </div>
  );
}