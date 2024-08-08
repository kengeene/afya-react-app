import SideBarItem from "./SideBarItem";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "@/graphql/queries";
import Loading from "@/components/shared/loading";

export default function SideBar() {
  const { loading, data } = useQuery(GET_LOCATIONS);
  const [activeItem, setActiveItem] = useState('1');
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
      if (data){
        setActiveItem(data.locations[0].id);
        setMenuItems(data.locations);
      }
    }, [data]);

    if (loading) return <Loading/>;


  return (
    <div className="bg-white p-5 rounded-lg">
      <span className="text-gray-400 text-sm">VISITS</span>
      {
       menuItems.length > 0 && menuItems.map((item: {
         id: string;
         visits: number;
         name: string;
       }) => (
          <SideBarItem key={item.id} value={item.visits} text={item.name} handleClick={() => setActiveItem(item.id)} active={activeItem === item.id} />
        ))
      }
    </div>
  );
}
