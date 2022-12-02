import { Card, CardContent } from "@mui/material"
import { DASHBOARD_STYLE } from "assets/css/dashboard/style"
import ClusterGrid from "./clusterGrid"

const ClusterInfoBody = props => {

    return (
        <div className="dashboard-area-height">
            <Card
                sx={DASHBOARD_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}
            >
                <CardContent
                    sx={ DASHBOARD_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"] }
                >
                    <ClusterGrid />
                </CardContent>
            </Card>
        </div>
    )
}

export default ClusterInfoBody