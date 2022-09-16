import React, { useState } from "react"
import "assets/css/sidebar/font.css"
import routePath from "route/routPath"
import { Link } from "react-router-dom"

const SidebarMenu = () => { 

    const [ activeMenu, setActiveMenu ] = useState("")
    const activeHandler = e => { setActiveMenu(e.target.id) }

    return (
        routePath.map( route => (
            showMenus( route, activeMenu, activeHandler)
        ))
    )
}

const showMenus = ( route, activeMenu, activeHandler ) => { 
    if( route["type"] === "menu" ) {
        return (
            <div id={ route["key"] } className="sidebar" onClick={ activeHandler } >
                {route["name"]}
                <ul className="submenuFont">
                    { route["subMenus"].map( subMenu => ( 
                        <Link to={  subMenu["path"]}>
                            <li style={ activeMenu !== route["key"] ? { display: "none"} : {display: "flex"} } > { subMenu["name"] } </li>
                        </Link>
                    ))}
                    </ul>

            </div>
        )
    }
}

export default SidebarMenu