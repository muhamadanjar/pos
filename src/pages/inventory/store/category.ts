import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface Category {
    id: string;
    name: string;
    description: string;
}

interface CategoryState {
    search?: string,

}

const storeConfig: StateCreator<
    CategoryState,
    [],
    [['zustand/persist', CategoryState], ['zustand/devtools', never]]
> = (set) => ({
    search: "",
    setSearch: (search: string) => set({ search }),
})

const category = create<CategoryState>()(
    persist(devtools(storeConfig), { name: "category" })
);

export default category;