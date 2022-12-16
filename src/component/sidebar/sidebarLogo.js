import { Link } from "react-router-dom/cjs/react-router-dom"
import logo from "assets/img/logo.png"
// import duLogo from "assets/img/du_challenge.png"
// import capstone from "assets/img/capstone.png"

const Logo = () => { 

    return (
        <Link to="/">
            <div style={{ width: "100%", height:"100%"}}>
                <img src={logo} style={{height: "100%", width:"100%"}} />
            </div>
        </Link>
    )
}

export default Logo