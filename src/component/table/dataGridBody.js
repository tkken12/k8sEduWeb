const { DataGrid } = require("@mui/x-data-grid")

const MakeDataGrid = props => {
    return(
        <DataGrid 
            rows = { props.rows}
            columns ={ props.columns }
            pageSize= { 10 }
            rowsPerPageOptions={[5]}
            checkboxSelection = { props.checkboxSelection }
            rowHeight = { !!props.rowHeight !== false ? props.rowHeight : 52 }
            onRowClick = { !!props.onRowClick !== false ? props.onRowClick : null }
            autoHeight ={ !!props.autoHeight !== false ? props.autoHeight : false }
            // getRowHeight={() => 'auto'}
        />
    )
} 

export default MakeDataGrid