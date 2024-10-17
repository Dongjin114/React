import React, { useCallback, useEffect, useState } from 'react'
import { AgGridReact, AgGridReactProps } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { _setAriaRowIndex, ColDef } from 'ag-grid-community';
import BaseModal from '../modal/BaseModal';
import { rowColums, rowData } from '../../types/RowData';


const columNames: ColDef[] = [
    { field: "id" },
    { field: "make" },
    { field: "model" },
    { field: "price" },
]

interface gridSize {
    width: number;
    height: number;

}
const data = [
    { id: "c1", make: "Toyota", model: "Celica", price: 35000 },
    { id: "c2", make: "Ford", model: "Mondeo", price: 32000 },
    { id: "c8", make: "Porsche", model: "Boxster", price: 72000 },
    { id: "c4", make: "BMW", model: "M50", price: 60000 },
    { id: "c14", make: "Aston Martin", model: "DBX", price: 190000 },
]


export default function AgGrid({ width, height }: gridSize) {

    const [open, setOpen] = useState(false);
    const [detailData, setDetailData] = useState<rowData>({ id: "c1", make: "Toyota", model: "Celica", price: 35000 });

    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState(data);

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState<ColDef[]>(columNames);

    const openModal = (params: any) => {
        setOpen(true);
        console.log(params.data);
        setDetailData(params.data);
    };

    const closeModal = () => setOpen(false);

    useEffect(() => {
        console.log("detail", detailData);
    }, [detailData])


    useEffect(() => {
        console.log("Opendetail", detailData);
    }, [open])


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
            />

        </div>
    )
}
