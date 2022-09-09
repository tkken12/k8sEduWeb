import Dashboard from "../views/dashboard/dashboard"
import PodInfo from "../views/podInfo/podInfo"

const routePath = [
    {
        route: "/",
        component: <Dashboard />,
        key: "dashboard"
    },
    {
        route: "/podInfo",
        component: <PodInfo />,
        key: "podInfo"
    }
] 

export default routePath 