import React from "react";
import "assets/css/layout.scss"
import "assets/css/dashboard/grid.scss"
import NodeInfoBody from "views/dashboard/nodeInfo/nodeInfoBody";
import ClusterInfoBody from "views/dashboard/clusterInfo/clusterInfoBody";
import DashboardPodInfo from "./podInfo/dashboardPodInfo";

const Dashboard = () => { 
    return (
        <div className="dashboard-grid">
            <div className="dashboard-area-cluster">
                <ClusterInfoBody />
            </div>
            <div className="dashboard-area-node" >
                <NodeInfoBody /> 
            </div>
            <div className="dashboard-area-pod">
                <DashboardPodInfo />
            </div>
        </div>

    )
}

export default Dashboard