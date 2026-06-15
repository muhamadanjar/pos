import { Phone, User } from 'lucide-react'
import { useCartStore } from '../store/use-cart-store'

function CustomerInfo() {
  const { customer, setCustomer } = useCartStore()

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
        Info Customer
      </p>
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Nama customer"
          value={customer.name}
          onChange={(e) => setCustomer({ name: e.target.value })}
          className="w-full rounded-lg border border-input bg-background pl-8 pr-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
        />
      </div>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
        <input
          type="tel"
          placeholder="No. telepon"
          value={customer.phone}
          onChange={(e) => setCustomer({ phone: e.target.value })}
          className="w-full rounded-lg border border-input bg-background pl-8 pr-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30 transition"
        />
      </div>
    </div>
  )
}

export default CustomerInfo
