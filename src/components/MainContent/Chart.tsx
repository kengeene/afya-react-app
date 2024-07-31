import { CartesianGrid, Line, LineChart} from "recharts"
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState,useEffect } from "react";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


type ChartData = {
  month: string;
  desktop: number;
}

export default function Chart({chartTitle,chartData}: {chartTitle: string, chartData: ChartData[]}) {
  const [variance, setVariace] = useState(0);

    useEffect(() => {
     setVariace(((chartData[chartData.length - 1].desktop -
      chartData[chartData.length - 2].desktop) /
      chartData[0].desktop) *
    100)
    }, [chartData]);
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-sm">{chartTitle}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-purple-600">
            {chartData[chartData.length - 1].desktop}k
          </span>
          <span className="text-xs text-gray-400">
            {variance > 0 ? "Positive" : "Negative"}
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
              dataKey="desktop"
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
