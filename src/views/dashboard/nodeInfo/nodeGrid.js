import ResourceContainer from "views/dashboard/nodeInfo/container/resourceContainer"
import ConditionContainer from "views/dashboard/nodeInfo/container/conditionContainer"
import { Card, CardContent } from "@mui/material"
import { DASHBOARD_STYLE } from "assets/css/dashboard/style"

const NodeGrid = props => {

    let exampleData = [
        {"nodeName": "m1", "utilization": 10}, {"nodeName": "m2", "utilization": 50}, {"nodeName": "m3", "utilization": 70},
    ]

    let contentBodyObj = [
        {"className": "node-area-cpu", "headerName": "CPU 사용률"},
        {"className": "node-area-memory", "headerName": "Memory 사용률"},
        {"className": "node-area-disk", "headerName": "Disk 사용률"},
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
                                    { exampleData.map( data => (
                                        <ResourceContainer 
                                            nodeName={ data.nodeName }
                                            utilization = {data.utilization}
                                        />
                                    ))}
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