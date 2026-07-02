import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import type { Product, AddProductInput } from '../store/product'
import { fetchProducts } from '../data/mock-products'

const QUERY_KEY = ['inventory', 'products']

export function useProducts() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  })
}

export function useAddProduct() {
  const qc = useQueryClient()

  return useMutation({
    mutationFn: async (input: AddProductInput) => {
      await new Promise((resolve) => setTimeout(resolve, 300))
      const newProduct: Product = {
        ...input,
        id: crypto.randomUUID(),
      }
      return newProduct
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: QUERY_KEY })
    },
  })
}
