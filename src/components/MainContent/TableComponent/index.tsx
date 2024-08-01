import { TableComponent } from "./Table";
import { useQuery } from "@apollo/client";
import { GET_NPS_DATA } from "@/graphql/queries";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

export default function TableSection() {
  const { loading, data } = useQuery(GET_NPS_DATA);
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data);

      setTableData(data.npsMetrics);
    }
  }, [data]);

  if (loading) return <Loading />;

  return (
    <div className="bg-white col-span-3">
      {tableData.length > 0 && <TableComponent data={tableData} />}
    </div>
  );
}
