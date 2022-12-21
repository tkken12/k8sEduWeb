import { useState } from "react";
import { K8S_EDU_CONST } from "common/constant";
import requestHandler from "component/apiCaller/axios";
import React, {useEffect} from "react";
import "assets/css/workload/pod/podInfoBody.scss"
import PodInfoHeader from "views/podInfo/podInfoContainer/infoHeader";
import { useStore } from "component/global/zustand";
import { useInterval } from "common/util";
import PodInfoTable from "views/podInfo/podInfoContainer/infoTable";
import PodInfoGraph from "views/podInfo/podInfoContainer/infoGraph";

const PodInfo = () => { 
    const { setPodInfo } = useStore();
    const [ filter, setFilter ] = useState("");
    
    const getPodInfo = () => {
        requestHandler({
            "method": K8S_EDU_CONST["REQUEST"]["METHOD"]["GET"],
            "reqPath": K8S_EDU_CONST["REQUEST"]["PATH"]["GET"]["API"]["V1"]["POD"]["LIST"],
            "query": ""
        }).then( res => { setPodInfo(res.data) })
        .catch( err => {
            console.log(err)
        });
    };

    useEffect(() => {
        getPodInfo();
    }, []);

    useInterval( getPodInfo, K8S_EDU_CONST["REQUEST"]["INTERVAL"]);

    return(
        <div className="pod-container">
            <PodInfoHeader />
            <PodInfoTable />
            <PodInfoGraph />
        </div>
    )
}

export default PodInfo