import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const invoices = [
  {
    id: 1,
    staffName: "Mercy Mukoya",
    efficiencyDelta: 4.8,
    efficiency: 12,
    npsDelta: 7.9,
    reportedIssues: 80,
  },
  {
    id: 2,
    staffName: "Kennedy Akeyo",
    efficiencyDelta: 3.5,
    efficiency: 90,
    npsDelta: 6.2,
    reportedIssues: 55,
  },
  {
    id: 3,
    staffName: "Stephanie Tomsett",
    efficiencyDelta: 6.1,
    efficiency: 54,
    npsDelta: 8.4,
    reportedIssues: 42,
  },
  {
    id: 4,
    staffName: "Faith Kityo",
    efficiencyDelta: 2.7,
    efficiency: 23,
    npsDelta: 5.6,
    reportedIssues: 78,
  },
];

export function TableComponent({
  data = invoices,
  tableHeadings = [
    {
      text: "No",
    },
    {
      text: "Staff Name",
    },
    {
      text: "Efficiency Delta",
    },
    {
      text: "NPS Delta",
    },
    {
      text: "Efficiency",
    },
    {
      text: "Reported Issues",
    },
  ],
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHeadings.map((heading) => (
            <TableHead>{heading.text}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow key={data.id}>
            <TableCell className="font-medium w-10">{data.id}</TableCell>
            <TableCell className="text-purple-600 font-semibold">
              {data.staffName}
            </TableCell>
            <TableCell>
              <div className="flex flex-row gap-2 items-center">
                <span className="font-bold">{data.efficiencyDelta}</span>
                <span className="text-gray-400">{data.efficiencyDelta}</span>
                <span>
                  <ChevronDown className="text-red-400" />
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-row gap-2 items-center">
                <span className="font-bold">{data.npsDelta}</span>
                <span className="text-gray-400">+{data.npsDelta}</span>
                <span>
                  <ChevronUp className="text-green-400" />
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-row gap-2 justify-evenly items-center">
                <span className="font-bold">{data.efficiency}%</span>
                <Progress value={data.efficiency} />
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-row gap-2 items-center">
                <span className="font-bold">{data.reportedIssues}</span>
                <Progress value={data.reportedIssues} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
