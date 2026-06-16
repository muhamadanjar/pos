import { create, type StateCreator } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export interface Product {
    id: string
    name: string
    category_id: string
    price: number
}

interface ProductState {
    data: Product[]
    search: string
    setSearch: (search: string) => void
}



const storeConfig: StateCreator<
    ProductState,
    [],
    [['zustand/persist', ProductState], ['zustand/devtools', never]]
> = (set) => ({
    data: [],
    search: '',
    setSearch: (search: string) => set({ search }),
})

const product = create<ProductState>()(
    persist(devtools(storeConfig), { name: 'product' })
)

export default product;
