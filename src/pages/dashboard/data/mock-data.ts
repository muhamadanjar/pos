export type DailyRevenue = { day: string; revenue: number; transactions: number }
export type TopProduct = { name: string; emoji: string; sold: number; revenue: number }
export type RecentTransaction = {
  id: string
  time: string
  customer: string
  items: number
  total: number
  paymentMethod: 'cash' | 'card' | 'qris'
}

export const DAILY_REVENUE: DailyRevenue[] = [
  { day: 'Sen', revenue: 1_850_000, transactions: 42 },
  { day: 'Sel', revenue: 2_230_000, transactions: 58 },
  { day: 'Rab', revenue: 1_640_000, transactions: 37 },
  { day: 'Kam', revenue: 2_780_000, transactions: 71 },
  { day: "Jum", revenue: 3_120_000, transactions: 84 },
  { day: 'Sab', revenue: 3_850_000, transactions: 97 },
  { day: 'Min', revenue: 2_460_000, transactions: 63 },
]

export const TODAY = DAILY_REVENUE[DAILY_REVENUE.length - 1]

export const TOP_PRODUCTS: TopProduct[] = [
  { name: 'Nasi Goreng', emoji: '🍳', sold: 148, revenue: 3_700_000 },
  { name: 'Kopi Susu', emoji: '☕', sold: 134, revenue: 2_680_000 },
  { name: 'Ayam Bakar', emoji: '🍗', sold: 119, revenue: 4_165_000 },
  { name: 'Martabak Manis', emoji: '🥞', sold: 98, revenue: 2_940_000 },
  { name: 'Jus Alpukat', emoji: '🥑', sold: 87, revenue: 1_566_000 },
]

export const RECENT_TRANSACTIONS: RecentTransaction[] = [
  { id: 'TRX-9821', time: '14:47', customer: 'Budi S.', items: 4, total: 98_000, paymentMethod: 'qris' },
  { id: 'TRX-9820', time: '14:31', customer: 'Siti R.', items: 2, total: 43_000, paymentMethod: 'cash' },
  { id: 'TRX-9819', time: '14:18', customer: 'Ahmad F.', items: 6, total: 142_000, paymentMethod: 'card' },
  { id: 'TRX-9818', time: '14:02', customer: 'Dewi P.', items: 3, total: 67_000, paymentMethod: 'qris' },
  { id: 'TRX-9817', time: '13:55', customer: 'Rizky A.', items: 1, total: 25_000, paymentMethod: 'cash' },
  { id: 'TRX-9816', time: '13:40', customer: 'Rina M.', items: 5, total: 119_000, paymentMethod: 'card' },
  { id: 'TRX-9815', time: '13:28', customer: 'Hendra W.', items: 2, total: 38_000, paymentMethod: 'cash' },
  { id: 'TRX-9814', time: '13:11', customer: 'Lestari D.', items: 7, total: 176_000, paymentMethod: 'qris' },
  { id: 'TRX-9813', time: '12:58', customer: 'Fajar K.', items: 3, total: 71_000, paymentMethod: 'card' },
  { id: 'TRX-9812', time: '12:44', customer: 'Nurul H.', items: 4, total: 88_000, paymentMethod: 'cash' },
]

export const fmt = (n: number) =>
  n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })
