import MakeGauge from "component/resourceGauge.js/makeGauge"
import "assets/css/dashboard/container.scss"

const ResourceContainer = props => {
    console.log( props )
    return (
        <div className="resource-container">
            <div style={{textAlign: "center"}}> {props.nodeName} </div>
            <MakeGauge 
                utilization={props.utilization}
            />
        </div>

    )
}

export default ResourceContainer