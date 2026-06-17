import { Banknote, CreditCard, QrCode } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
          <Button
            key={id}
            variant={paymentMethod === id ? 'default' : 'outline'}
            className="flex flex-col items-center gap-1.5 h-auto py-2.5 px-2"
            onClick={() => setPaymentMethod(id)}
          >
            <Icon className="size-4" />
            <span className="text-xs">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default PaymentMethod
