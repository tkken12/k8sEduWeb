import MakeDataGrid from "component/table/dataGridBody"
import ClusterCardInfo from "./cardInfo"

const ClusterGrid = props => {

    const sample = { 
        rows: [
            { id: 1, nodeName: 'm1', role: "master", address: "192.168.0.6", os: "Rocky Linux 8.5", kernelVersion: "Linux tykim 4.18.0-348.12.2.el8_5.x86_64", kubernetesVersion: "v1.25.2" },
            { id: 2, nodeName: 'w1', role: "worker", address: "192.168.0.7", os: "Rocky Linux 8.5", kernelVersion: "Linux tykim 4.18.0-348.12.2.el8_5.x86_64", kubernetesVersion: "v1.25.2" },
            { id: 3, nodeName: 'w2', role: "worker", address: "192.168.0.8", os: "Rocky Linux 8.5", kernelVersion: "Linux tykim 4.18.0-348.12.2.el8_5.x86_64", kubernetesVersion: "v1.25.2" },
        ],
        columns: [  
            { field: 'id', headerName: 'No' }, 
            { field: 'nodeName', headerName: 'Node 이름' }, 
            { field: 'role', headerName: '역할' }, 
            { field: 'address', headerName: 'IP 주소' }, 
            { field: 'os', headerName: 'OS 버전', width: 140 }, 
            { field: 'kernelVersion', headerName: '커널 버전', width: 290 }, 
            { field: 'kubernetesVersion', headerName: 'k8s 버전' }, 
        ]
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