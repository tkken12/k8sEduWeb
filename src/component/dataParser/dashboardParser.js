import { checkIsValidUnit, convertUnit, giToTi, gridCreateEmptyRow, utilConst } from "common/util"

const totalMaker = data => {

    let body = [
        { key: "nodeTotal",   headerName: "Node Total"  , total: 0, unit : ""     }, { key: "masterTotal", headerName: "Master Total", total: 0, "unit": ""                   },
        { key: "workerTotal", headerName: "Worker Total", total: 0, unit : ""     }, { key: "podTotal",    headerName: "Pod Total",    total: 0, "unit": ""                   }, 
        { key: "cpuTotal",    headerName: "CPU Total"   , total: 0, unit : "core" }, { key: "memoryTotal", headerName: "Memory Total", total: 0, "unit": utilConst["UNIT_GI"] }
    ] 

    if ( typeof(data) !== "object" || Object.keys(data).length === 0 ) {
        return body
    } 

    for (const key in data) {
        body.forEach( elem => {
            if( elem["key"] === key ) {
                if( !!elem["unit"] !== false ) {
                    checkIsValidUnit(elem["total"]) 
                    ? elem["total"] = data[key] 
                    : elem["total"] = giToTi(data[key]); elem["unit"] = convertUnit( elem["unit"], utilConst["UNIT_COND_INCREASE"] ) 
                } else {
                    elem["total"] = data[key]
                }
            }
        })
    }

    return body
}

const gridDataMaker = data => {

    let emptyBody = {
        id             : 0, 
        nodeName       : "",
        role           : "",
        address        : "",
        os             : "",
        kernelVersion  : "",
        k8sVersion     : ""
    }

    // if( Array.isArray && !data.length ) {
    //     return gridCreateEmptyRow(emptyBody, 5, 1)
    // }
    
    let newDatas = []

    if( !!data !== true ) {
        return []
    }

    data.forEach( (elem, idx) => {
        let rowsBody = {
            id             : idx + 1,
            nodeName       : elem["nodeName"],
            role           : elem["role"],
            address        : elem["address"],
            os             : elem["os"],
            kernelVersion  : elem["kernelVersion"],
            k8sVersion     : elem["k8sVersion"]
        } 

        newDatas.push(rowsBody)
    })

    //FIXME - ????????? ??? 5?????? row??? ?????? ????????????. ?????? ????????? object??? ????????? ??? ???????????? ???????????? ????????? ??????
    // gridCreateEmptyRow( emptyBody, 5 % newDatas.length, newDatas[newDatas.length-1]["id"] )

    return newDatas
}

const conditionDataMaker = data => {

    let body = [
        { "id": "nodeReady",          "headerName": "?????? ?????????",          "data": "0%"  },
        { "id": "memoryPressure",     "headerName": "MemoryPressure",     "data": "0%"   },
        { "id": "pidPressure",        "headerName": "PIDPressure",        "data": "0%"   },
        { "id": "diskPressure",       "headerName": "DiskPressure",       "data": "0%"   },
        { "id": "networkUnavailable", "headerName": "NetworkUnavailable", "data": "0%"   },
    ];

    if( !!data !== true ) { return body; };

    for( let key in data["nodeCondition"]) {
        let targetNode = 0;
        data["nodeCondition"][key].forEach( elem => {
            if(elem["pressure"]) {
                targetNode++
            };
        });

        body.forEach(bodyElem => {
            if( bodyElem["id"] === key ) {
                bodyElem["data"] = `${(targetNode / data["nodeCondition"][key].length) * 100}%`
            };
        });
    };

    return body;
} 

export {
    totalMaker,
    gridDataMaker,
    conditionDataMaker
}