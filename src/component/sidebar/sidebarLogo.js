import { Link } from "react-router-dom/cjs/react-router-dom"
import logo from "assets/img/logo.png"
// import duLogo from "assets/img/du_challenge.png"
// import capstone from "assets/img/capstone.png"

const Logo = () => { 

    return (
        <Link to="/">
            {/* <img src={duLogo} style={{height: "100%", width:"100%"}} /> */}
            <img src={logo} style={{height: "100%", width:"100%"}} />
        </Link>
    )
}

export default Logo