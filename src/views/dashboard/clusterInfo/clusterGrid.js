import MakeDataGrid from "component/table/dataGridBody"
import ClusterCardInfo from "./cardInfo"

const ClusterGrid = props => {

    const sample = { 
        rows: [{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },],
        columns: [  { field: 'id', headerName: 'ID', width: 90 }, ]
    }

    return (
        <div className="cluster-grid-layout">
            <div className="cluster-area-card">
                <ClusterCardInfo />
            </div>
            <div className="cluster-area-table">
                <MakeDataGrid
                    rows = { sample.rows }
                    columns = { sample.columns}
                />

            </div>
        </div>
    )
}

export default ClusterGrid