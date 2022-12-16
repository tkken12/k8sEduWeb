const K8S_EDU_CONST = { 
    REQUEST: {
        METHOD: {
            GET   : "get",
            POST  : "post",
            PUT   : "put",
            DELETE: "delete"
        },
        PATH: {
            GET: {
                API: {
                    V1: {
                        DASHBOARD: {
                            INFO: "/api/v1/dashboard"
                        },
                        POD: {
                            LIST: "/api/v1/pod/list"
                        }
                    }
                }
            }
        }
    },

    COMPONENT: {
        GAUGE: {
            LOOSE: 30, 
            NORMAL: 50,
            TIGHT: 70
        }
    }
}

export { 
    K8S_EDU_CONST 
}