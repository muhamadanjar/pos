import { Plus } from 'lucide-react'
import type { Product } from '../store/use-cart-store'

interface ProductCardProps {
  product: Product
  qty: number
  onAdd: (product: Product) => void
}

function ProductCard({ product, qty, onAdd }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow group relative">
      {qty > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-[var(--mint-200)] text-[var(--mint-900)]">
            Terpilih ({qty})
          </span>
        </div>
      )}
      <div className="aspect-[4/3] bg-slate-50 p-4 flex items-center justify-center relative">
        <span className="text-5xl select-none group-hover:scale-105 transition-transform duration-300">
          {product.emoji}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between border-t border-slate-100">
        <div>
          <h3 className="font-medium text-sm text-slate-800 line-clamp-2 leading-snug">{product.name}</h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-slate-900 text-base">
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })}
          </span>
          <button
            type="button"
            aria-label="Add to cart"
            className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-[var(--mint-300)] hover:text-[var(--mint-900)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--mint-400)] focus:ring-offset-1 cursor-pointer"
            onClick={() => onAdd(product)}
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
