// import { useState } from "react";
import "assets/css/layout.scss"
import "assets/css/dashboard/grid.scss"
import NodeInfoBody from "views/dashboard/nodeInfo/nodeInfoBody";
import ClusterInfoBody from "views/dashboard/clusterInfo/clusterInfoBody";
// import DashboardPodInfo from "./podInfo/dashboardPodInfo";
import requestHandler from "component/apiCaller/axios";
import { K8S_EDU_CONST } from "common/constant";
import { useInterval } from "common/util";
import { useEffect } from "react";
import { useStore } from "component/global/zustand";

const Dashboard = () => { 

    const { setDashboardInfo } = useStore()
    const getDashboardInfo = () => {
        requestHandler(
            { "method": K8S_EDU_CONST["REQUEST"]["METHOD"]["GET"],
              "reqPath": K8S_EDU_CONST["REQUEST"]["PATH"]["GET"]["API"]["V1"]["DASHBOARD"]["INFO"], 
              "query": ""
            }
        ).then( res => {
            setDashboardInfo(res.data)
        }).catch(err => {
            console.log(err)
            setDashboardInfo({ code: "", message: { total:{}, tableInfo: [], utilization:{} } })
        })
    }
    
    useEffect( () => {
        getDashboardInfo()
    }, [])
    
    useInterval( getDashboardInfo, K8S_EDU_CONST["REQUEST"]["INTERVAL"])

    return (
        <div className="dashboard-grid">
            <div className="dashboard-area-cluster">
                <ClusterInfoBody />
            </div>
            <div className="dashboard-area-node" >
                <NodeInfoBody /> 
            </div>
            {/* <div className="dashboard-area-pod">
                <DashboardPodInfo />
            </div> */}
        </div>

    )
}

export default Dashboard