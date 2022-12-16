import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import { DASHBOARD_STYLE } from "assets/css/dashboard/style"


const ClusterCardInfo = props => {
    const clusterInfoObject = [
        { headerName: "Node Total" , total: 3}, {  headerName: "Master Total", total: 1} ,
        { headerName: "Woker Total", total: 2}, { headerName: "Pod Total", total: 9}, 
        { headerName: "CPU Total", total: 48}, { headerName: "Memory Total", total: "128Gi"}
    ] 
    return (
        <div className="cluster-card-container">
            { clusterInfoObject.map( obj => (
                <Card sx={DASHBOARD_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}>
                    <CardHeader 
                        titleTypographyProps={{variant: "h8"}}
                        className="condition-header"
                        component={Typography}
                        title={ obj["headerName"] }
                    />
                    <CardContent
                        sx={{ textAlign:"center"}}
                    >
                        { obj["total"] }
                    </CardContent>
                </Card>
             )) 
            }
                
        </div>
    )
}



export default ClusterCardInfo