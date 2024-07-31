import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function TopBar() {
  return (
    <div className="grid grid-cols-3 p-4 items-center bg-white">
      <div>
        <Button
          variant="secondary"
          className="border-solid border-2 border-gray-400 rounded-md"
        >
          Add Assessment
          <Plus className="h-6 w-6 pl-1" />
        </Button>
      </div>
      <div className="flex flex-col justify-end">
        <Progress value={33} />
        <p className="text-sm text-gray-400">33 / 100 registered users</p>
      </div>
      <div className="flex flex-row justify-end">
        <div className="flex flex-col pr-3">
          <span className="text-sm font-bold">Eugene Kuria</span>
          <span className="text-sm text-grey-500">kengeene@gmail.com</span>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default TopBar;
