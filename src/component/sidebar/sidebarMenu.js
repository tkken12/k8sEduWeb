import React, { useState } from "react"
import "assets/css/sidebar/font.scss"
import routePath from "route/routPath"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom"

const SidebarMenu = () => { 

    const [ activeMenu, setActiveMenu ] = useState("")
    const [ activeSubmenu, setActiveSubmenu ] = useState("")
    const activeHandler = e => { setActiveMenu(e.target.id) }
    const activeSubmenuHandler = e => { setActiveSubmenu(e.target.id) }
    const history = useHistory()

    return (
        routePath.map( route => (
            showMenus( route, activeMenu, activeSubmenu, activeHandler, activeSubmenuHandler, history )
        ))
    )
}

const showMenus = ( route, activeMenu, activeSubmenu, activeHandler, activeSubmenuHandler, history ) => { 
    if(activeMenu === "dashboard") { history.push("/") }
    if( route["type"] === "menu" ) {
        return (
            <div id={ route["key"] } className="sidebar" onClick={ activeHandler } >
                { route["name"] }
                <ul id={ route["key"] } className="submenuFont">
                    { route["subMenus"].map( (subMenu,idx) => ( 
                        <Link id={ "submenu" + idx } to={ subMenu["path"] }>
                            <li id={subMenu["key"]} 
                                style={ activeMenu !== route["key"] ? 
                                        { display: "none" } 
                                        :
                                        { display: "flex" } 
                                      } 
                                onClick={ activeSubmenuHandler }
                            > { subMenu["name"] } 
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        )
    }
}

export default SidebarMenu