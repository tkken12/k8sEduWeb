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

    //FIXME - 페이지 당 5개의 row를 모두 채워야함. 현재 코드는 object를 복사할 때 이상하게 합쳐지는 버그가 존재
    // gridCreateEmptyRow( emptyBody, 5 % newDatas.length, newDatas[newDatas.length-1]["id"] )

    return newDatas
}

export {
    totalMaker,
    gridDataMaker,
}