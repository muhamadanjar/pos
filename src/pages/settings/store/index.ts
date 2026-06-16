

import { create } from 'zustand'
interface SettingState {
    title: string
    setTitle: (title: string) => void
}


export const store = create<SettingState>((set) => ({
    title: "",
    setTitle: (title) => set({ title }),
}))
