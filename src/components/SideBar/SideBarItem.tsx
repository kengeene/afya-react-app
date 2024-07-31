import { EllipsisVertical } from "lucide-react";

import { Button } from "@/components/ui/button";
export default function SideBarItem({
  value,
  text,
  active = false,
  handleClick,
}: {
  value: number;
  text: string;
  active?: boolean;
  handleClick: () => void;
}) {
  return (
    <Button
      className={
        "grid grid-cols-3 w-full my-5 border-2 border-gray-200" +
        (active ? "bg-purple-600 text-white" : " bg-white text-gray-500")
      }
      variant={active ? "activeLink" : "link"}
      onClick={() => handleClick()}
    >
      <span className="text-purple-600 w-2">{value}</span>
      <span className="w-5">{text}</span>
      <span className="flex justify-end">
        <EllipsisVertical className="mr-2 h-4 w-4 text-grey-400" />
      </span>
    </Button>
  );
}
