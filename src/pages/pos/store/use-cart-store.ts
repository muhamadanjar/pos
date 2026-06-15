import { create } from 'zustand'

export interface Product {
  id: string
  name: string
  price: number
  category: string
  emoji: string
}

export interface CartItem {
  product: Product
  qty: number
}

export type PaymentMethod = 'cash' | 'card' | 'qris'

export interface Customer {
  name: string
  phone: string
  type: 'member' | 'walk-in'
  memberId?: string
  points?: number
}

interface CartState {
  items: CartItem[]
  customer: Customer
  paymentMethod: PaymentMethod
  discount: number
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQty: (productId: string, qty: number) => void
  setCustomer: (customer: Partial<Customer>) => void
  setPaymentMethod: (method: PaymentMethod) => void
  setDiscount: (discount: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  customer: { name: '', phone: '', type: 'walk-in' },
  paymentMethod: 'cash',
  discount: 0,

  addItem: (product) =>
    set((state) => {
      const existing = state.items.find((i) => i.product.id === product.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        }
      }
      return { items: [...state.items, { product, qty: 1 }] }
    }),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.product.id !== productId),
    })),

  updateQty: (productId, qty) =>
    set((state) => {
      if (qty <= 0) {
        return { items: state.items.filter((i) => i.product.id !== productId) }
      }
      return {
        items: state.items.map((i) =>
          i.product.id === productId ? { ...i, qty } : i,
        ),
      }
    }),

  setCustomer: (customer) =>
    set((state) => ({ customer: { ...state.customer, ...customer } })),

  setPaymentMethod: (method) => set({ paymentMethod: method }),

  setDiscount: (discount) => set({ discount }),

  clearCart: () =>
    set({
      items: [],
      customer: { name: '', phone: '', type: 'walk-in' },
      paymentMethod: 'cash',
      discount: 0,
    }),
}))

export function computeTotals(items: CartItem[], discount: number) {
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0)
  const discountAmount = Math.round(subtotal * (discount / 100))
  const afterDiscount = subtotal - discountAmount
  const tax = Math.round(afterDiscount * 0.11)
  const total = afterDiscount + tax
  return { subtotal, discountAmount, tax, total }
}
