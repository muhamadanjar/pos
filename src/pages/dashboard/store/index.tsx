import  {create, type StateCreator} from "zustand"

interface DashboardState {
    date_start: string,
    date_end: string
}


const storeConfig: StateCreator<DashboardState> = (set) => ({
    date_start: '',
    date_end: '',
    setDateStart: (date_start: string) => set({ date_start }),
    setDateEnd: (date_end: string) => set({ date_end }),
})

const useDashboardStore = create<DashboardState>(storeConfig)


export { useDashboardStore }
