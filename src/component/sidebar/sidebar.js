import "assets/css/layout.scss"
import "assets/css/sidebar/logo.scss"
import Logo from "./sidebarLogo"
import SidebarMenu from "./sidebarMenu"

const Sidebar = ( props ) => { 

    return (
            <div className="sidebar-layout">
                <div className="logo">
                    <Logo />
                </div>
                <div>
                    <SidebarMenu />
                </div>
            </div>
    )
}

export default Sidebar