import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import { conditionDataMaker } from "component/dataParser/dashboardParser"
import { useStore } from "component/global/zustand"

const ConditionContainer = props => {

    const { dashboardInfo } = useStore()
    return (
        <div className="condition-container">
            { conditionDataMaker(dashboardInfo["message"]["nodeInfo"]).map(body => (
                <div className="condition-item"> 
                <Card >
                    <CardHeader
                        titleTypographyProps={{variant: "h8"}}
                        className="condition-header"
                        component={Typography}
                        title={body["headerName"]}
                    />
                    <CardContent
                        sx={{ textAlign:"center"}}
                    >
                        <div className="card-font"> { body["data"]} </div>
                    </CardContent>
                </Card>
                </div>
                
            )) }
        </div>
    )
}

export default ConditionContainer