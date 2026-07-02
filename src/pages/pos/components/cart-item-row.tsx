import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { CartItem } from '../store/use-cart-store'

interface CartItemRowProps {
  item: CartItem
  onUpdateQty: (id: string, qty: number) => void
}

function CartItemRow({ item, onUpdateQty }: CartItemRowProps) {
  const subtotal = item.product.price * item.qty

  return (
    <div className="bg-ds-surface-lowest p-3 rounded-xl border border-ds-outline-variant/15 shadow-sm flex items-start gap-3 group relative mb-3">
      {/* Small item image/emoji container */}
      <div className="w-12 h-12 bg-ds-surface rounded-lg flex items-center justify-center shrink-0 border border-ds-outline-variant/10 select-none text-2xl">
        {item.product.emoji}
      </div>

      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="text-sm font-medium text-ds-on-surface truncate pr-6">
          {item.product.name}
        </h4>
        <div className="text-sm font-semibold text-ds-on-surface mt-1">
          {subtotal.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          })}
        </div>
      </div>

      {/* Absolute delete button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onUpdateQty(item.product.id, 0)}
        className="absolute top-2 right-2 text-ds-on-surface-variant hover:text-ds-error hover:bg-ds-error/10"
        title="Remove Item"
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      {/* Quantity Controls */}
      <div className="flex items-center bg-ds-surface-high rounded-lg border border-ds-outline-variant/20 h-8 self-end mt-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onUpdateQty(item.product.id, item.qty - 1)}
          className="w-8 h-8 rounded-l-lg"
        >
          <Minus className="h-3 w-3 mx-auto" />
        </Button>
        <span className="w-8 text-center text-sm font-medium text-ds-on-surface tabular-nums">
          {item.qty}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onUpdateQty(item.product.id, item.qty + 1)}
          className="w-8 h-8 rounded-r-lg"
        >
          <Plus className="h-3 w-3 mx-auto" />
        </Button>
      </div>
    </div>
  )
}

export default CartItemRow
