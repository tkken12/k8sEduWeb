import React, { useState } from "react"

const SidebarMenu = () => { 

    const [ activeMenu, setActiveMenu ] = useState("")

    return (
        <>
            <ul> Pod
                <li> test 1 </li>
                <li> test 2 </li>
                <li> test 3 </li>
                <li> test 4 </li>
            </ul>
        </>
    )
}

const sidebarCollapse = () => {

}

export default SidebarMenu