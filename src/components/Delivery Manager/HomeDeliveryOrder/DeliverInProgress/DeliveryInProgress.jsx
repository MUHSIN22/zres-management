import React, { useState } from "react";
import "./deliveryInProgress.scss";
import { DataGrid } from "@mui/x-data-grid";
import DummyData from "./dummydata";

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

function DeliveryInProgress() {
  const [tableData, setTableData] = useState(DummyData);
  const [selectedRow, setSelectedRow] = useState([]);

  const list = [
    { ordername: "cheeeseDurger", qty: "2" },
    { ordername: "jerry", qty: "2" },
    { ordername: "pizza", qty: "3" },
    { ordername: "coke", qty: "3" },
  ];
  const half = Math.ceil(list.length / 2);
  const firstHalf = list.splice(0, half);
  const secondHalf = list.splice(-half);

  const [readMore, setReadMore] = useState(false);
  return (
    <div className="deliveryInProgress" style={{ height: 350, width: "100%" }}>
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
        <button>Collected</button>
      </div>
    </div>
  );
}

export default DeliveryInProgress;
