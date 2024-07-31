import { EllipsisVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
export default function SideBarItem({
  value,
  text,
  active = false,
}: {
  value: number;
  text: string;
  active?: boolean;
}) {
  return (
    <Button
      className={
        "grid grid-cols-3 w-full my-5 " +
        (active ? "bg-purple-400 text-white" : " bg-white text-gray-500")
      }
    >
      <span className="text-purple-300 w-5">{value}</span>
      <span className="w-5">{text}</span>
      <span className="flex justify-end">
        <EllipsisVertical className="mr-2 h-4 w-4 text-grey-400" />
      </span>
    </Button>
  );
}
