import { Card } from "@mui/material"
import { POD_INFO_STYLE } from "assets/css/dashboard/style"
import { podTableDataParser } from "component/dataParser/podParser";
import MakeDataGrid from "component/table/dataGridBody"
import { useStore } from "component/global/zustand"

const PodInfoTable = () => {

    const { podInfo } = useStore()

    let columns = [  
            { field: 'id', headerName: 'No', width: 45 }, 
            { field: 'podName', headerName: 'Pod 이름', flex: 1 }, 
            { field: 'address', headerName: 'IP 주소', flex: 1, maxWidth: 120}, 
            { field: 'namespace', headerName: '네임스페이스', flex: 1, maxWidth: 150}, 
            { field: 'nodeName', headerName: 'Node 이름', flex: 1, maxWidth: 150}, 
            { field: 'phase', headerName: '상태', flex: 1, maxWidth: 120 }, 
            { field: 'creationTime', headerName: '생성 시간', flex: 1 }, 
    ];

    return (
        <div className="pod-area-table">
            <Card sx={POD_INFO_STYLE["MUI"]["CARD"]["DEFAULT_STYLE"]}>
                <MakeDataGrid 
                    rows = { podTableDataParser( podInfo["message"] ) }
                    columns = { columns }
                />
            </Card>
        </div>
    )
}

export default PodInfoTable