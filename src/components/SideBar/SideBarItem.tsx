import { EllipsisVertical } from "lucide-react";

import { Button } from "@/components/shared/button";
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
        "grid grid-cols-12 w-full my-5 border-2 border-gray-200" +
        (active ? "bg-purple-600 text-white" : " bg-white text-gray-500")
      }
      variant={active ? "activeLink" : "link"}
      onClick={() => handleClick()}
    >
      <span className="col-span-2">{value}</span>
      <span className="col-span-8">{text}</span>
      <span className="col-span-2 flex justify-end">
        <EllipsisVertical className="mr-2 h-4 w-4 text-grey-400" />
      </span>
    </Button>
  );
}
