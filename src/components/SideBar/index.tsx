import SideBarItem from "./SideBarItem";
import { useMemo } from "react";
export default function SideBar() {

  const menuItems = useMemo(()=>[
    { value: 10, text: "Item One", active: true },
    { value: 243, text: "Item Two" },
    { value: 123, text: "Item Three" },
    { value: 42, text: "Item Four" },
    { value: 12, text: "Item Five" },
  ], []);
  return (
    <div className="bg-white p-5 rounded-lg">
      <span className="text-gray-400">Items</span>
      {
        menuItems.map((item, index) => (
          <SideBarItem key={index} value={item.value} text={item.text} />
        ))
      }
    </div>
  );
}
