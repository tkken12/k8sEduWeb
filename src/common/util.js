import { useEffect, useRef } from "react"

const utilConst = {
    UNIT_KI: "Ki",
    UNIT_GI: "Gi",
    UNIT_TI: "Gi",
    UNIT_COND_INCREASE: "increase",
    UNIT_COND_DECREASE: "decrease"
}


const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id)
        }
    }, [delay]);
}

const checkIsValidUnit = capacity => {
    return capacity < 1000 ? true : false
}

const giToTi = capacity => {
    return capacity / 1024 
}

const convertUnit = (unit, cond) => {
    
    let convertedUnit = ""

    switch( unit ) {
        case utilConst["UNIT_GI"]:
            if( cond === utilConst["UNIT_COND_INCREASE"]) {
                convertedUnit = utilConst["UNIT_TI"]
            } else if( cond === utilConst["UNIT_COND_DECREASE"] ) {
                convertedUnit = utilConst["UNIT_KI"] 
            }

            return convertedUnit

        default: return unit
    } 
}

const gridCreateEmptyRow = ( row, cycle, idNum ) => {

    console.log( cycle)
    let tmpRow = row
    let emptyRows = []
    let keys = Object.keys(tmpRow)

    for( let i=0; i < cycle; i++ ) {
        emptyRows.push(tmpRow)
    }

    emptyRows.forEach( (elem, idx) => {
        keys.forEach( key => {
            if( key === "id" ) {
                !!idNum !== true ? elem["id"] += idx + 1 : elem["id"] = idNum; idNum++
            } else {
                elem[key] = ""
            }
        })
    })

    return emptyRows 
}

export {
    utilConst,
    useInterval,
    giToTi,
    checkIsValidUnit,
    convertUnit,
    gridCreateEmptyRow
}