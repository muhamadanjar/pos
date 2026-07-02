import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Product } from '../store/use-cart-store'

interface ProductCardProps {
  product: Product
  qty: number
  onAdd: (product: Product) => void
}

function ProductCard({ product, qty, onAdd }: ProductCardProps) {
  return (
    <div className="bg-ds-surface-lowest rounded-2xl shadow-sm border border-ds-outline-variant/15 overflow-hidden flex flex-col hover:shadow-md transition-shadow group relative">
      {qty > 0 && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-ds-primary-container text-ds-on-primary-container">
            Terpilih ({qty})
          </span>
        </div>
      )}
      <div className="aspect-[4/3] bg-ds-surface p-4 flex items-center justify-center relative">
        <span className="text-5xl select-none group-hover:scale-105 transition-transform duration-300">
          {product.emoji}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between border-t border-ds-outline-variant/10">
        <div>
          <h3 className="font-medium text-sm text-ds-on-surface line-clamp-2 leading-snug">{product.name}</h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-ds-on-surface text-base">
            {product.price.toLocaleString('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0,
            })}
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Add to cart"
            className="h-8 w-8 bg-ds-surface-high hover:bg-ds-primary hover:text-ds-on-primary"
            onClick={() => onAdd(product)}
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
