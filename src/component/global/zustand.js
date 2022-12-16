import create from "zustand";

const useStore = create( (set) => ({
    dashboardInfo: {},
    setDashboardInfo: (value) => set({ dashboardInfo: value }),

    nodeInfo: {},
}))

export {
    useStore
}