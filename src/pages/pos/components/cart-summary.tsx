import { Tag } from 'lucide-react'
import { useCartStore, computeTotals } from '../store/use-cart-store'

const fmt = (n: number) =>
  n.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })

function CartSummary() {
  const { items, discount, setDiscount } = useCartStore()
  const { subtotal, discountAmount, tax, total } = computeTotals(items, discount)

  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Diskon (%)
        </p>
        <div className="relative">
          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
          <input
            type="number"
            min={0}
            max={100}
            placeholder="0"
            value={discount || ''}
            onChange={(e) =>
              setDiscount(Math.min(100, Math.max(0, Number(e.target.value))))
            }
            className="w-full rounded-lg border border-input bg-background pl-8 pr-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
          />
        </div>
      </div>

      <div className="rounded-lg bg-muted/50 p-3 space-y-1.5 text-sm">
        <div className="flex justify-between text-muted-foreground">
          <span>Subtotal</span>
          <span className="tabular-nums">{fmt(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600 dark:text-green-400">
            <span>Diskon {discount}%</span>
            <span className="tabular-nums">-{fmt(discountAmount)}</span>
          </div>
        )}
        <div className="flex justify-between text-muted-foreground">
          <span>PPN 11%</span>
          <span className="tabular-nums">{fmt(tax)}</span>
        </div>
        <div className="flex justify-between font-semibold text-base pt-1.5 border-t border-border">
          <span>Total</span>
          <span className="text-primary tabular-nums">{fmt(total)}</span>
        </div>
      </div>
    </div>
  )
}

export default CartSummary
