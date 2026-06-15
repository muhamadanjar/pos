import { useState } from 'react'
import { Search } from 'lucide-react'
import { CATEGORIES, PRODUCTS } from '../data/products'
import { useCartStore } from '../store/use-cart-store'
import CategoryFilter from './category-filter'
import ProductCard from './product-card'

function ProductCatalog() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Semua')
  const { addItem, items } = useCartStore()

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = category === 'Semua' || p.category === category
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const getQty = (productId: string) =>
    items.find((i) => i.product.id === productId)?.qty ?? 0

  return (
    <div className="flex flex-col h-full gap-4 p-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Cari produk..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-input bg-background pl-9 pr-4 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
        />
      </div>

      <CategoryFilter
        categories={CATEGORIES}
        selected={category}
        onSelect={setCategory}
      />

      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
            <Search className="size-8 mb-2 opacity-30" />
            <p className="text-sm">Produk tidak ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 pb-2">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                qty={getQty(product.id)}
                onAdd={addItem}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCatalog
