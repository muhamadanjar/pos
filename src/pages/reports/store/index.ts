import { create } from "zustand"

type TimePeriod = "today" | "weekly" | "monthly" | "custom"

interface ReportsStore {
  period: TimePeriod
  setPeriod: (period: TimePeriod) => void
  startDate?: string
  endDate?: string
  setDateRange: (startDate: string, endDate: string) => void
}

export const useReportsStore = create<ReportsStore>((set) => ({
  period: "monthly",
  setPeriod: (period) => set({ period }),
  setDateRange: (startDate, endDate) => set({ startDate, endDate }),
}))
