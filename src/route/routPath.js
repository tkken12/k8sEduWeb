import Dashboard from "views/dashboard/dashboard"
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
                        { "name": "Deployment 정보", "path": "/workloads/deploymentInfo" }
                      ]
    },
    {
        "path"      : "/workloads/podInfo",
        "component" : PodInfo,
        "key"       : "podInfo",
        "name"      : "Pod 정보",
        "type"      : "submenu"
    }
] 

export default routePath 