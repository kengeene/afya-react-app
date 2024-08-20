import { CartesianGrid, Line, LineChart} from "recharts"
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shared/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shared/chart"
import { useState,useEffect } from "react";

const chartConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


type ChartData = {
  month: string;
  value: number;
}

export default function LineChartComponent({
  chartTitle,
  chartData,
  measurementUnit,
}: {
  chartTitle: string;
  chartData: ChartData[];
  measurementUnit: string;
}) {
  const [variance, setVariace] = useState(0);

  useEffect(() => {
    setVariace(
      ((chartData[chartData.length - 1].value -
        chartData[chartData.length - 2].value) /
        chartData[0].value) *
        100
    );
  }, [chartData]);
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-sm">{chartTitle}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-purple-600">
            {chartData[chartData.length - 1].value}k
          </span>
          <span className="text-xs text-gray-400">
            {measurementUnit}
          </span>
          <div
            className={
              "flex flex-row	items-center text-xs " +
              (variance > 0 ? "text-green-400" : "text-red-400")
            }
          >
            {variance > 0 ? <ChevronUp /> : <ChevronDown />}
            <span>{Math.floor(variance)}</span>{" "}
          </div>
        </div>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="natural"
              stroke="black"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
