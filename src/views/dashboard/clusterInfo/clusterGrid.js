import { gridDataMaker } from "component/dataParser/dashboardParser"
import { useStore } from "component/global/zustand"
import MakeDataGrid from "component/table/dataGridBody"
import ClusterCardInfo from "./cardInfo"

const ClusterGrid = props => {

    const { dashboardInfo } = useStore()

    let columns = [  
            { field: 'id', headerName: 'No', width: 45 }, 
            { field: 'nodeName', headerName: 'Node 이름' }, 
            { field: 'role', headerName: '역할', width: 75 }, 
            { field: 'address', headerName: 'IP 주소' }, 
            { field: 'os', headerName: 'OS 버전', width: 140 }, 
            { field: 'kernelVersion', headerName: '커널 버전', width: 200 }, 
            { field: 'k8sVersion', headerName: 'k8s 버전' }, 
    ]

    return (
        <div className="cluster-grid-layout">
            <div className="cluster-area-card">
                <ClusterCardInfo />
            </div>
            <div className="cluster-area-table">
                <MakeDataGrid
                    rows = { gridDataMaker(dashboardInfo["message"]["tableInfo"]) }
                    columns = { columns }
                />

            </div>
        </div>
    )
}

export default ClusterGrid