import { Card, CardContent, CardHeader, Typography } from "@mui/material"

const ConditionContainer = props => {

    let conditionBodyOjb = [
        {"headerName": "정상 가동률", "data": ""},
        {"headerName": "MemoryPresure", "data": ""},
        {"headerName": "PIDPresure", "data": ""},
        {"headerName": "DiskPresure", "data": ""},
        {"headerName": "Condition", "data": ""},
        {"headerName": "NetworkUnavailable", "data": ""},
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
                    <CardContent>
                        <div> { body["data"]} </div>
                    </CardContent>
                </Card>
                </div>
                
            )) }
        </div>
    )
}

export default ConditionContainer