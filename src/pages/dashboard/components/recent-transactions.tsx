import type { RecentTransaction } from '../data/mock-data'
import { RECENT_TRANSACTIONS, fmt } from '../data/mock-data'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

const PAYMENT_LABELS: Record<RecentTransaction['paymentMethod'], string> = {
  cash: 'Tunai',
  card: 'Kartu',
  qris: 'QRIS',
}

const PAYMENT_CLASSES: Record<RecentTransaction['paymentMethod'], string> = {
  cash: 'bg-ds-surface-high text-ds-on-surface-variant',
  card: 'bg-ds-secondary-container text-ds-secondary',
  qris: 'bg-ds-primary-container text-ds-on-primary-container',
}

export default function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-ds-on-surface-variant">
            Transaksi Terbaru
          </p>
          <span className="text-xs text-ds-on-surface-variant">
            Hari ini
          </span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col">
          {RECENT_TRANSACTIONS.map((tx) => (
            <div
              key={tx.id}
              className="py-3 flex items-center gap-4"
            >
              <div className="shrink-0">
                <p className="text-sm font-semibold text-ds-on-surface">
                  {tx.customer}
                </p>
                <p className="text-xs mt-0.5 text-ds-on-surface-variant">
                  {tx.id} · {tx.items} item · {tx.time}
                </p>
              </div>
              <div className="flex-1" />
              <Badge className={cn('rounded-full font-medium shrink-0', PAYMENT_CLASSES[tx.paymentMethod])}>
                {PAYMENT_LABELS[tx.paymentMethod]}
              </Badge>
              <span className="text-sm font-bold shrink-0 w-24 text-right text-ds-on-surface">
                {fmt(tx.total)}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
