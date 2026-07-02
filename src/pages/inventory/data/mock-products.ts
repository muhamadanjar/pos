import type { Product } from '../store/product'

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'SKU-001',
    name: 'Nasi Goreng Spesial',
    category_id: 'cat-1',
    category: 'Makanan',
    price: 25000,
    stock: 45,
    status: 'active',
  },
  {
    id: '2',
    sku: 'SKU-002',
    name: 'Mie Ayam',
    category_id: 'cat-1',
    category: 'Makanan',
    price: 18000,
    stock: 32,
    status: 'active',
  },
  {
    id: '3',
    sku: 'SKU-003',
    name: 'Soto Ayam',
    category_id: 'cat-1',
    category: 'Makanan',
    price: 20000,
    stock: 5,
    status: 'active',
  },
  {
    id: '4',
    sku: 'SKU-004',
    name: 'Es Teh Manis',
    category_id: 'cat-2',
    category: 'Minuman',
    price: 5000,
    stock: 0,
    status: 'inactive',
  },
  {
    id: '5',
    sku: 'SKU-005',
    name: 'Jus Jeruk',
    category_id: 'cat-2',
    category: 'Minuman',
    price: 8000,
    stock: 28,
    status: 'active',
  },
  {
    id: '6',
    sku: 'SKU-006',
    name: 'Kopi Hitam',
    category_id: 'cat-2',
    category: 'Minuman',
    price: 7000,
    stock: 15,
    status: 'active',
  },
  {
    id: '7',
    sku: 'SKU-007',
    name: 'Lumpia Goreng',
    category_id: 'cat-3',
    category: 'Snack',
    price: 12000,
    stock: 60,
    status: 'active',
  },
  {
    id: '8',
    sku: 'SKU-008',
    name: 'Bakso Urat',
    category_id: 'cat-1',
    category: 'Makanan',
    price: 22000,
    stock: 8,
    status: 'active',
  },
]

export async function fetchProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return MOCK_PRODUCTS
}
