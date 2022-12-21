import { Card } from "@mui/material"
import { POD_INFO_STYLE } from "assets/css/dashboard/style"

const PodInfoGraph = () => {
    return (
        <div className="pod-area-graph">
            <Card sx={POD_INFO_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}>
            </Card>
        </div>
    )
}

export default PodInfoGraph