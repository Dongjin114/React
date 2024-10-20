import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef } from "ag-grid-community";
import BaseModal from "../modal/BaseModal";
import { RowData } from "../../types/interface/RowData";
import { PostStatus } from "../../types/enum/enums";

interface AgridProps {
  width: number;
  height: number;
  postStatus: PostStatus;
  changeStatus: (status: PostStatus) => void;
  columNames: ColDef[];
  data: any[];
}

export default function AgGrid({
  width,
  height,
  postStatus,
  changeStatus,
  columNames,
  data,
}: AgridProps) {
  const [open, setOpen] = useState(false);
  const [detailData, setDetailData] = useState<RowData>({
    id: "c1",
    make: "Toyota",
    model: "Celica",
    price: 35000,
  });

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(data);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<ColDef[]>(columNames);

  const openModal = (params: any) => {
    setOpen(true);
    console.log(params.data);
    setDetailData(params.data);
    changeStatus(PostStatus.EDIT);
  };

  const closeModal = () => {
    setOpen(false);
    changeStatus(PostStatus.NONE);
  };

  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: height, width: width }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columNames}
        onRowDoubleClicked={openModal}
      />

      <BaseModal
        openState={open}
        closeModal={closeModal}
        rowData={detailData}
        colDefs={colDefs}
        postStatus={postStatus}
      />
    </div>
  );
}
