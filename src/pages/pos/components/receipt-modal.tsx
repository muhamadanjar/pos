import { CheckCircle, Printer, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { computeTotals, type CartItem, type PaymentMethod } from '../store/use-cart-store'

export interface Transaction {
  id: string
  date: Date
  items: CartItem[]
  customer: { name: string; phone: string }
  paymentMethod: PaymentMethod
  discount: number
}

interface ReceiptModalProps {
  transaction: Transaction | null
  onClose: () => void
}

const PAYMENT_LABEL: Record<PaymentMethod, string> = {
  cash: 'Cash',
  card: 'Kartu Debit/Kredit',
  qris: 'QRIS',
}

const fmt = (n: number) =>
  n.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })

function ReceiptModal({ transaction, onClose }: ReceiptModalProps) {
  if (!transaction) return null

  const { subtotal, discountAmount, tax, total } = computeTotals(
    transaction.items,
    transaction.discount,
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-sm bg-background rounded-2xl shadow-xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="size-5 text-green-500" />
              <h2 className="font-semibold">Transaksi Berhasil</h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 hover:bg-muted transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="text-center mb-4">
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              #{transaction.id}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {transaction.date.toLocaleString('id-ID')}
            </p>
          </div>

          {transaction.customer.name && (
            <div className="mb-4 rounded-lg bg-muted/50 p-3 text-sm">
              <p className="font-medium">{transaction.customer.name}</p>
              {transaction.customer.phone && (
                <p className="text-muted-foreground text-xs mt-0.5">
                  {transaction.customer.phone}
                </p>
              )}
            </div>
          )}

          <div className="border-t border-dashed border-border py-3 space-y-2">
            {transaction.items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.product.emoji} {item.product.name} ×{item.qty}
                </span>
                <span className="tabular-nums">
                  {fmt(item.product.price * item.qty)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-border py-3 space-y-1.5 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span className="tabular-nums">{fmt(subtotal)}</span>
            </div>
            {transaction.discount > 0 && (
              <div className="flex justify-between text-green-600 dark:text-green-400">
                <span>Diskon {transaction.discount}%</span>
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

          <div className="border-t border-dashed border-border pt-3 mb-6 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Metode Bayar</span>
              <span className="font-medium text-foreground">
                {PAYMENT_LABEL[transaction.paymentMethod]}
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1" onClick={() => window.print()}>
              <Printer />
              Cetak
            </Button>
            <Button className="flex-1" onClick={onClose}>
              Selesai
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReceiptModal
