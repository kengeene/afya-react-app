import { EllipsisVertical } from "lucide-react";

export default function Issue({
  title,
  location,
  handleClick,
  className,
}: {
  title: string;
  location: string;
  className: string;
  handleClick?: () => void;
}) {
  return (
    <div
      className={
        "flex flex-row items-center cursor-pointer rounded-lg" + className
      }
      onClick={() => handleClick()}
    >
      <div className="flex flex-col">
        <span className="text-md font-bold">{title}</span>
        <span className="text-sm text-gray-400">{location}</span>
      </div>
      <EllipsisVertical />
    </div>
  );
}
