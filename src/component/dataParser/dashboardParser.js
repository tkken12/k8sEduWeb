import { checkIsValidUnit, convertUnit, giToTi, utilConst } from "common/util"

const totalMaker = data => {

    console.log( data )

    let body = [
        { key: "nodeTotal",   headerName: "Node Total"  , total: 0, unit : "" }, { key: "masterTotal", headerName: "Master Total", total: 0, "unit": "" },
        { key: "workerTotal", headerName: "Worker Total", total: 0, unit : "" }, { key: "podTotal",    headerName: "Pod Total",    total: 0, "unit": "" }, 
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

export {
    totalMaker
}