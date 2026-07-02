import { create, type StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'

export type ProductStatus = 'active' | 'inactive'

export interface Product {
    id: string
    name: string
    sku: string
    category_id: string
    category: string
    price: number
    stock: number
    status: ProductStatus
}

export type AddProductInput = Omit<Product, 'id'>

interface ProductState {
    search: string
    setSearch: (search: string) => void
    addProduct: (product: Product) => void
}



const storeConfig: StateCreator<
    ProductState,
    [['zustand/devtools', never]]
> = (set) => ({
    search: '',
    setSearch: (search: string) => set({ search }),
    addProduct: () => {
        // Placeholder — data managed by react-query
    },
})

const product = create<ProductState>()(
    devtools(storeConfig, { name: 'product' })
)

export default product;
