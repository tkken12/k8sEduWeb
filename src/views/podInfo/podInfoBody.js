import { K8S_EDU_CONST } from "common/constant";
import requestHandler from "component/apiCaller/axios";
import React, { useState, useEffect } from "react";
import "assets/css/workload/pod/podInfoBody.scss"

const PodInfo = () => { 
    const [ podInfo, setPodInfo ] = useState([])

    useEffect(() => {
        requestHandler({
            "method": K8S_EDU_CONST["REQUEST"]["METHOD"]["GET"],
            "reqPath": K8S_EDU_CONST["REQUEST"]["PATH"]["GET"]["API"]["V1"]["POD"]["LIST"],
            "query": ""
        }).then( res => { setPodInfo(res.data) })
        .catch( err => {
            console.log(err)
        })
    }, [])

    return(
        <div className="pod-container">
            <div className="pod-area-header">
        
            </div>
            <div className="pod-area-body">

            </div>
            <div className="pod-area-graph">

            </div>
        </div>
    )
}

export default PodInfo