import type { RecentTransaction } from '../data/mock-data'
import { RECENT_TRANSACTIONS, fmt } from '../data/mock-data'

const PAYMENT_LABELS: Record<RecentTransaction['paymentMethod'], string> = {
  cash: 'Tunai',
  card: 'Kartu',
  qris: 'QRIS',
}

const PAYMENT_STYLES: Record<RecentTransaction['paymentMethod'], { bg: string; color: string }> = {
  cash: { bg: 'var(--ds-surface-high)', color: 'var(--ds-on-surface-variant)' },
  card: { bg: 'var(--ds-secondary-container)', color: 'var(--ds-secondary)' },
  qris: { bg: 'var(--ds-primary-container)', color: 'var(--ds-on-primary-container)' },
}

export default function RecentTransactions() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-5"
      style={{
        background: 'var(--ds-surface-lowest)',
        boxShadow: '0 24px 48px -12px rgba(21,30,20,0.08)',
      }}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--ds-on-surface-variant)' }}>
          Transaksi Terbaru
        </p>
        <span className="text-xs" style={{ color: 'var(--ds-on-surface-variant)' }}>
          Hari ini
        </span>
      </div>

      <div className="flex flex-col">
        {RECENT_TRANSACTIONS.map((tx) => {
          const badge = PAYMENT_STYLES[tx.paymentMethod]
          return (
            <div
              key={tx.id}
              className="py-3 flex items-center gap-4"
            >
              <div className="shrink-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface)' }}>
                  {tx.customer}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--ds-on-surface-variant)' }}>
                  {tx.id} · {tx.items} item · {tx.time}
                </p>
              </div>
              <div className="flex-1" />
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-medium shrink-0"
                style={{ background: badge.bg, color: badge.color }}
              >
                {PAYMENT_LABELS[tx.paymentMethod]}
              </span>
              <span className="text-sm font-bold shrink-0 w-24 text-right" style={{ color: 'var(--ds-on-surface)' }}>
                {fmt(tx.total)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
