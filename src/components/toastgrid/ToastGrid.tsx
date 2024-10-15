import React from 'react'
import Grid from '@toast-ui/react-grid';


function ToastGrid() {

    const data = [
        { id: 1, name: "Editor" },
        { id: 2, name: "Grid" },
        { id: 3, name: "Chart" },
      ];
      
      const columns = [
        { name: "id", header: "ID" },
        { name: "name", header: "Name" },
      ];
    return (
    <div>
        <Grid
        data={data}
        columns={columns}
        rowHeight={25}
        bodyHeight={100}
        heightResizable={true}
        rowHeaders={["rowNum"]}
      />
    </div>
  )
}

export default ToastGrid