import create from "zustand";

const useStore = create( (set) => ({
    dashboardInfo: { code: "", message: { total:{}, tableInfo:{}, utilization:{} } },
    setDashboardInfo: (value) => set({ dashboardInfo: value }),

    nodeInfo: {},
}))

export {
    useStore
}