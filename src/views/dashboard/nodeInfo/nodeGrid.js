import ResourceContainer from "views/dashboard/nodeInfo/container/resourceContainer"
import ConditionContainer from "views/dashboard/nodeInfo/container/conditionContainer"
import { Card, CardContent } from "@mui/material"
import { DASHBOARD_STYLE } from "assets/css/dashboard/style"
import { useStore } from "component/global/zustand"

const NodeGrid = () => {

    const { dashboardInfo } = useStore()
    const utilizations = id => {
        if( !!dashboardInfo["message"]["nodeInfo"] !== false ) {
            return (
                dashboardInfo["message"]["nodeInfo"]["nodeResource"][id].map( resource => (
                    <ResourceContainer 
                        nodeName={ resource.nodeName }
                        utilization={ resource.utilization}
                    />
                ))
            )
        } else {
            return (
                <ResourceContainer 
                    nodeName={""}
                    utilization={0}
                />
            )
        }
    }

    let contentBodyObj = [
        {"id": "nodeCpuUtilization", "className": "node-area-cpu", "headerName": "CPU 사용률"},
        {"id": "nodeMemoryUtilization", "className": "node-area-memory", "headerName": "Memory 사용률"},
        {"id": "nodeDiskIO", "className": "node-area-disk", "headerName": "Disk 사용률"},
    ]

    return(
        <div className="node-grid-layout">
            { contentBodyObj.map( obj => (
                <div className={obj["className"]}>
                    <Card sx={{maxHeight: "100%"}} >
                        <CardContent sx={DASHBOARD_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}>
                            <div className="body-container">
                                <div className="body-area-header">{ obj["headerName"] }</div>
                                <div className="body-area-content">
                                    { utilizations(obj["id"]) }
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
            
            <div className="node-area-condition">
                <ConditionContainer />
            </div> 
        </div>
    )
}

export default NodeGrid