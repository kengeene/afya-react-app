import SideBarItem from "./SideBarItem";
import { useMemo, useState } from "react";
export default function SideBar() {

  const menuItems = useMemo(
    () => [
      { id: 1, value: 7, text: "Kiambiu", active: true },
      { id: 2, value: 12, text: "Mukuru Kwa Ruben" },
      { id: 3, value: 26, text: "Mukuru Kwa Njenga" },
      { id: 4, value: 38, text: "Baba Ndogo" },
      { id: 5, value: 41, text: "Kosovo" },
      { id: 6, value: 24, text: "Mukuru Kayaba" },
    ],
    []
  );
  const [activeItem, setActiveItem] = useState(2);

  return (
    <div className="bg-white p-5 rounded-lg">
      <span className="text-gray-400 text-sm">VISITS</span>
      {
        menuItems.map((item) => (
          <SideBarItem key={item.id} value={item.value} text={item.text} handleClick={() => setActiveItem(item.id)} active={activeItem === item.id} />
        ))
      }
    </div>
  );
}
