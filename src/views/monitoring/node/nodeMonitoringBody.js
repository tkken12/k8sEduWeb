
const NodeMonitoringBody = props => {
    return (
            <iframe title="grafana" 
                    width={"100%"} 
                    height={"100%"} 
                    src={"http://192.168.0.6:30400/d/g4KR1lK4k/node-dashboard?orgId=1&refresh=5"} 
            />
    )
}

export default NodeMonitoringBody