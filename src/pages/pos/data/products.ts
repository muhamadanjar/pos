import type { Product } from '../store/use-cart-store'

export const CATEGORIES = ['Semua', 'Makanan', 'Minuman', 'Snack', 'Dessert']

export const PRODUCTS: Product[] = [
  { id: '1', name: 'Nasi Goreng', price: 25000, category: 'Makanan', emoji: '🍳' },
  { id: '2', name: 'Ayam Bakar', price: 35000, category: 'Makanan', emoji: '🍗' },
  { id: '3', name: 'Mie Goreng', price: 22000, category: 'Makanan', emoji: '🍜' },
  { id: '4', name: 'Soto Ayam', price: 28000, category: 'Makanan', emoji: '🍲' },
  { id: '5', name: 'Es Teh', price: 8000, category: 'Minuman', emoji: '🍵' },
  { id: '6', name: 'Es Jeruk', price: 10000, category: 'Minuman', emoji: '🍊' },
  { id: '7', name: 'Jus Alpukat', price: 18000, category: 'Minuman', emoji: '🥑' },
  { id: '8', name: 'Kopi Susu', price: 20000, category: 'Minuman', emoji: '☕' },
  { id: '9', name: 'Keripik Tempe', price: 12000, category: 'Snack', emoji: '🥜' },
  { id: '10', name: 'Pisang Goreng', price: 15000, category: 'Snack', emoji: '🍌' },
  { id: '11', name: 'Roti Bakar', price: 18000, category: 'Snack', emoji: '🍞' },
  { id: '12', name: 'Singkong Keju', price: 13000, category: 'Snack', emoji: '🫛' },
  { id: '13', name: 'Es Krim', price: 20000, category: 'Dessert', emoji: '🍦' },
  { id: '14', name: 'Puding Coklat', price: 15000, category: 'Dessert', emoji: '🍮' },
  { id: '15', name: 'Bubur Kacang', price: 12000, category: 'Dessert', emoji: '🫘' },
  { id: '16', name: 'Martabak Manis', price: 30000, category: 'Dessert', emoji: '🥞' },
]
