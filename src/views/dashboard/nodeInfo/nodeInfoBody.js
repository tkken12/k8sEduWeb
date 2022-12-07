import { Card, CardContent } from "@mui/material"
import { DASHBOARD_STYLE } from "assets/css/dashboard/style"
import NodeGrid from "views/dashboard/nodeInfo/nodeGrid"

const NodeInfoBody = props => {

    return (
        <div className="dashboard-area-height">
            <Card
                sx={DASHBOARD_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}
            >
                <CardContent
                    sx={DASHBOARD_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}
                >
                    <NodeGrid />
                </CardContent>
            </Card>
        </div>
    )
}

export default NodeInfoBody