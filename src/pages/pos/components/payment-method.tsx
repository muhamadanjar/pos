import { Banknote, CreditCard, QrCode } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCartStore, type PaymentMethod as PM } from '../store/use-cart-store'

const METHODS: { id: PM; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'cash', label: 'Cash', Icon: Banknote },
  { id: 'card', label: 'Kartu', Icon: CreditCard },
  { id: 'qris', label: 'QRIS', Icon: QrCode },
]

function PaymentMethod() {
  const { paymentMethod, setPaymentMethod } = useCartStore()

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
        Pembayaran
      </p>
      <div className="grid grid-cols-3 gap-2">
        {METHODS.map(({ id, label, Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setPaymentMethod(id)}
            className={cn(
              'flex flex-col items-center gap-1.5 rounded-lg border p-2.5 text-xs font-medium transition-all',
              paymentMethod === id
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border hover:bg-muted text-muted-foreground',
            )}
          >
            <Icon className="size-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PaymentMethod
