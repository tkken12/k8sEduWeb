import { Card } from "@mui/material"
import { POD_INFO_STYLE } from "assets/css/dashboard/style"

const PodInfoHeader = () => {

    return (
        <div className="pod-area-header">
            <Card sx={POD_INFO_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}>
            </Card>
        </div>
    )
}

export default PodInfoHeader