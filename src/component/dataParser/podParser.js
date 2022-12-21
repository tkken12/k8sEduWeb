
const podTableDataParser = data => {

    if( !!data["podInfo"] !== true ) {
        return {
                id: 0,
                podName: "",
                address: "",
                namespace: "",
                nodeName: "",
                phase: "",
                creationTime: "",
        };
    };

    let newDatas = [];

    data["podInfo"].forEach( (elem, idx) => {
        let rowsBody = {
                id: idx + 1,
                podName:      elem["podName"],
                address:      elem["address"],
                namespace:    elem["namespace"],
                nodeName:     elem["nodeName"],
                phase:        elem["phase"],
                creationTime: elem["creationTime"]
        };

        newDatas.push(rowsBody)
    })

    return newDatas
}

export {
    podTableDataParser
}