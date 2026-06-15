import { Minus, Plus, Trash2 } from 'lucide-react'
import type { CartItem } from '../store/use-cart-store'

interface CartItemRowProps {
  item: CartItem
  onUpdateQty: (id: string, qty: number) => void
}

function CartItemRow({ item, onUpdateQty }: CartItemRowProps) {
  const subtotal = item.product.price * item.qty

  return (
    <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3 group relative mb-3">
      {/* Small item image/emoji container */}
      <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100 select-none text-2xl">
        {item.product.emoji}
      </div>

      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="text-sm font-medium text-slate-900 truncate pr-6">
          {item.product.name}
        </h4>
        <div className="text-sm font-semibold text-slate-900 mt-1">
          {subtotal.toLocaleString('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
          })}
        </div>
      </div>

      {/* Absolute delete button */}
      <button
        type="button"
        onClick={() => onUpdateQty(item.product.id, 0)}
        className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded transition-colors cursor-pointer"
        title="Remove Item"
      >
        <Trash2 className="h-4 w-4" />
      </button>

      {/* Quantity Controls */}
      <div className="flex items-center bg-slate-100 rounded-lg border border-slate-200 h-8 self-end mt-4">
        <button
          type="button"
          onClick={() => onUpdateQty(item.product.id, item.qty - 1)}
          className="w-8 h-full flex items-center justify-center text-slate-500 hover:text-[var(--mint-800)] hover:bg-[var(--mint-100)] rounded-l-lg transition-colors cursor-pointer"
        >
          <Minus className="h-3 w-3 mx-auto" />
        </button>
        <span className="w-8 text-center text-sm font-medium text-slate-900 tabular-nums">
          {item.qty}
        </span>
        <button
          type="button"
          onClick={() => onUpdateQty(item.product.id, item.qty + 1)}
          className="w-8 h-full flex items-center justify-center text-slate-500 hover:text-[var(--mint-800)] hover:bg-[var(--mint-100)] rounded-r-lg transition-colors cursor-pointer"
        >
          <Plus className="h-3 w-3 mx-auto" />
        </button>
      </div>
    </div>
  )
}

export default CartItemRow
