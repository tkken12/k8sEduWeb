import create from "zustand";

const useStore = create( (set) => ({
    dashboardInfo: { code: "", message: { total:{}, tableInfo:[], utilization:{} } },
    setDashboardInfo: (value) => set({ dashboardInfo: value }),

    podInfo: { code: "", message: { }},
    setPodInfo: (value) => set({ podInfo: value }),

    nodeInfo: {},
}))

export {
    useStore
}