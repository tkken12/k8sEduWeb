const NodeMonitoringBody = props => {
        // FIXME - iframe 주소 동적으로 변경 필요
        return (
                <iframe title="grafana" 
                        width={"100%"} 
                        height={"100%"} 
                        // src={"http://192.168.0.6:30400/d/g4KR1lK4k/node-dashboard?orgId=1&refresh=5"} 
                        src={"http://203.244.132.115:30400/d/g4KR1lK4k/node-dashboard?orgId=1&refresh=5"} 
                />
        )
}

export default NodeMonitoringBody