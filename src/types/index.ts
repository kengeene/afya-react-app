type ChartData = {
  month: string;
  value: number;
};

export type ChartDataItem = {
  name: string;
  unit: string;
  data: ChartData[];
};
