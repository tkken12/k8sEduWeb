import TableBody from "component/table/tableBody";
import { TableColumns } from "component/table/tableStyle";
import React, { useState } from "react";
import "views/podInfo/podInfoBody.css"

const PodInfo = () => { 

    const [ podInfo, setPodInfo ] = useState([])

    console.log(TableColumns )
    return(
        <>
            <div className="podInfoBody">
                <TableBody
                    data = { podInfo }
                    columns = { TableColumns() }
                />

            </div>
            <div>

            </div>
        </>
       
    )
}

export default PodInfo