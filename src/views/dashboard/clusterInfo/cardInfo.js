import { Card, CardContent } from "@mui/material"
import { DASHBOARD_STYLE } from "assets/css/dashboard/style"


const ClusterCardInfo = props => {
    const clusterInfoObject = [
        { nodeTotal: 0}, { masterTotal: 0} ,{ workerTotal: 0},
        { podTotal: 0}, { cpuTotal: 0 }, { memoryTotal: 0}
    ] 
    return (
        <div className="cluster-card-container">
            
            { clusterInfoObject.map( (obj, idx) => (
                <Card sx={DASHBOARD_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}>
                    <CardContent>
                        { Object.keys(obj)[0] }
                    </CardContent>
                </Card>
             )) 
            }
                
        </div>
    )
}



export default ClusterCardInfo