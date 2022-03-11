import React, { useEffect, useState } from "react";
import "./waitingForCollection.scss";
import DummyData from "./dummydata";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "OrderNumber",
    headerName: "Order Number",
    width: 250,
    editable: true,
  },
  {
    field: "OrderTakenAt",
    headerName: "Order Taken At",
    width: 150,
    editable: true,
  },
  {
    field: "ElapsedTime",
    headerName: "Elapsed Time",
    width: 150,
    editable: true,
  },

  {
    field: "Driver",
    headerName: "Driver",
    width: 150,
    editable: true,
  },
  {
    field: "Location",
    headerName: "Location",
    width: 150,
    editable: true,
  },
  {
    field: "Amount",
    headerName: "Amount",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Status",
    headerName: "Status",

    width: 210,
    editable: true,
  },
];

function WaitingForCollection({ setCollected, collected }) {
  const [tableData, setTableData] = useState(DummyData);
  const [selectedRow, setSelectedRow] = useState([]);

  // const dataToDiaplayInTable = () => {
  //   const [tableData, setTableData] = useState(DummyData);

  //   // for reading data from server
  //   // useEffect(() => {
  //   //   fetch(url)
  //   //     .then((data) => data.json())
  //   //     .then((data) => setTableData(data));
  //   // }, []);
  // };

  const options = {
    filterType: "checkbox",
  };

  const handleCollectedData = () => {
    if (selectedRow.length === 0) {
      console.log("There is no selected data to move to collected list");
    } else {
      setCollected(selectedRow);

      const c = tableData.filter(
        (x) => !selectedRow?.filter((y) => y.id === x.id).length
      );

      // setSelectedRow((prevstate) => ({
      //   ...prevstate,
      //   Status: true,
      // }));

      setTableData(c);
    }
  };

  return (
    <div
      className="waitingForCollection"
      style={{ height: 350, width: "100%" }}
    >
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = tableData.filter((row) =>
            selectedIDs.has(row.id)
          );
          setSelectedRow(selectedRows);
        }}
      />

      <div className="colllected__btn">
        <button onClick={handleCollectedData}>Collected</button>
      </div>
    </div>
  );
}

export default WaitingForCollection;
