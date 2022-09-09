import Dashboard from "views/dashboard/dashboard"
import PodInfo from "views/podInfo/podInfo"

const routePath = [
    {
        "path"      : "/",
        "component" : Dashboard,
        "key"       : "dashboard"
    },
    {
        "path"      : "/podInfo",
        "component" : PodInfo,
        "key"       : "podInfo"
    }
] 

export default routePath 