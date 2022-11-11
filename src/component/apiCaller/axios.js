import axios from "axios";

let axiosInstance = axios.create({
    baseURL: `${process.env["REACT_APP_MIDDLEWARE_PROTOCOL"]}://${process.env["REACT_APP_MIDDLEWARE_ADDR"]}:${process.env["REACT_APP_MIDDLEWARE_PORT"]}`,
    timeout: process.env["REACT_APP_MIDDLEWARE_TIMEOUT"],
    keepAlive: true,
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
})

const requestHandler = ( props ) => {
    return new Promise( (resolve, reject) => { 
        axiosInstance[props.method](props.reqPath, props.query)
        .then ( res => resolve(res) )
        .catch( err => reject(err)  )
    })
}

export default requestHandler