import Dashboard from "views/dashboard/dashboard"
import NodeMonitoringBody from "views/monitoring/node/nodeMonitoringBody"
import PodInfo from "views/podInfo/podInfo"

const routePath = [
    {
        "path"      : "/",
        "component" : Dashboard,
        "key"       : "dashboard",
        "name"      : "대시보드",
        "type"      : "menu",
        "subMenus"  : []
    },
    {
        "path"     : "/workloads",
        "component": "",
        "key"      : "workloads",
        "name"     : "워크로드",
        "type"     : "menu", 
        "subMenus"  : [ { "name": "Pod 정보", "path": "/workloads/podInfo" },
                      ]
    },
    {
        "path"      : "/workloads/podInfo",
        "component" : PodInfo,
        "key"       : "podInfo",
        "name"      : "Pod 정보",
        "type"      : "submenu"
    },
    {
        "path"      : "/monitoring",
        "component" : "",
        "key"       : "monitoring",
        "name"      : "모니터링",
        "type"      : "menu",
        "subMenus"  : [
                        {"name": "Node 모니터링", "path": "/monitoring/node" }
                      ] 
    }, 
    {
        "path"      : "/monitoring/node",
        "component" : NodeMonitoringBody,
        "key"       : "nodeMonitoring",
        "name"      : "Node 모니터링",
        "type"      : "submenu"
    }
] 

export default routePath 