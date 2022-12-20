const { DataGrid } = require("@mui/x-data-grid")

const MakeDataGrid = props => {
    return(
        <DataGrid 
            rows = { props.rows}
            columns ={ props.columns }
            pageSize= { 5 }
            rowsPerPageOptions={[5]}
            checkboxSelection = { props.checkboxSelection }
            rowHeight = { !!props.rowHeight !== false ? props.rowHeight : 52 }
            onRowClick = { !!props.onRowClick !== false ? props.onRowClick : null }
        />
    )
} 

export default MakeDataGrid