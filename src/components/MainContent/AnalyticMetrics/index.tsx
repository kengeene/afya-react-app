import { useEffect, useState } from "react";
import LineChart from "./LineChart";
import { useQuery } from "@apollo/client";
import { GET_ANALYTICS } from "@/graphql/queries";
import Loading from "@/components/Loading";
import { ChartDataItem } from "@/types";

export default function AnalyticMetrics() {
    const { loading, data } = useQuery(GET_ANALYTICS);
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        if (data){
          setChartData(data.analyticMetrics);
        }
      }, [data]);

      if (loading) return <Loading />;

  return (
    <>
      {chartData.map((item: ChartDataItem, index: number) => (
        <LineChart
          key={index}
          chartTitle={item.name}
          chartData={item.data}
          measurementUnit={item.unit}
        />
      ))}
    </>
  );
}
