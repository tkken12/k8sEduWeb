import { Card, CardContent, CardHeader, Typography } from "@mui/material"

const ConditionContainer = props => {

    let conditionBodyOjb = [
        {"headerName": "정상 가동률", "data": "100%"},
        {"headerName": "MemoryPresure", "data": "N/A"},
        {"headerName": "PIDPresure", "data": "N/A"},
        {"headerName": "DiskPresure", "data": "N/A"},
        {"headerName": "Condition", "data": "N/A"},
        {"headerName": "NetworkUnavailable", "data": "N/A"},
    ]

    return (
        <div className="condition-container">
            {conditionBodyOjb.map(body => (
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
                        <div> { body["data"]} </div>
                    </CardContent>
                </Card>
                </div>
                
            )) }
        </div>
    )
}

export default ConditionContainer