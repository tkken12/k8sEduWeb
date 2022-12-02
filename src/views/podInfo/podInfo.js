import { K8S_EDU_CONST } from "common/constant";
import requestHandler from "component/apiCaller/axios";
// import TableBody from "component/table/tableBody_deprecated";
// import { TableColumns } from "component/table/tableStyle_deprecated";
import React, { useState, useEffect } from "react";
import "views/podInfo/podInfoBody.scss"
import dotenv from "dotenv"

const PodInfo = () => { 

    dotenv.config()
    const [ podInfo, setPodInfo ] = useState([])

    useEffect(() => {
        requestHandler({
            "method": K8S_EDU_CONST["REQUEST"]["METHOD"]["GET"],
            "reqPath": K8S_EDU_CONST["REQUEST"]["PATH"]["GET"]["API"]["V1"]["POD"]["LIST"],
            "query": ""
        }).then( res => { setPodInfo(res.data) })
        .catch( err => {
            console.log(err)
        })
    }, [])

    return(
        <>
            <div className="podInfoBody">
                {/* <TableBody
                    data = { podInfo }
                    columns = { TableColumns() }
                />
 */}
            </div>
            <div>

            </div>
        </>
       
    )
}

export default PodInfo