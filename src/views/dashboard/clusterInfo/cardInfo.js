import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import { DASHBOARD_STYLE } from "assets/css/dashboard/style"
import { totalMaker } from "component/dataParser/dashboardParser"
import { useStore } from "component/global/zustand"

const ClusterCardInfo = () => {

    const { dashboardInfo } = useStore() 
    return (
        <div className="cluster-card-container">
            { totalMaker(dashboardInfo["message"]["total"]).map( obj => (
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
                        {  `${obj["total"]} ${obj["unit"]}` }
                    </CardContent>
                </Card>
            )) 
            }
        </div>
    )
}



export default ClusterCardInfo