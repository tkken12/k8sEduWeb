import { K8S_EDU_CONST } from "common/constant";
import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MakeGauge = props => {

    const getCurrentState = () => {
        if( !!props.utilization !== true ){ return ""}

        if( props.utilization <= K8S_EDU_CONST["COMPONENT"]["GAUGE"]["LOOSE"] ) { return "success" } 
        else if (K8S_EDU_CONST["COMPONENT"]["GAUGE"]["LOOSE"] <= props.utilization 
                 && 
                 props.utilization <= K8S_EDU_CONST["COMPONENT"]["GAUGE"]["NORMAL"] ) { return "warning" }
        else { return "danger" }
    }


    return <ProgressBar variant={getCurrentState()} label={`${props.utilization}%`} now={props.utilization} />
}

export default MakeGauge