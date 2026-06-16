import { TODAY, fmt } from '../data/mock-data'
import Icon from '@/components/icons'
import { Card } from '@/components/ui/card'

type KpiCard = {
  label: string
  value: string
  subtext: string
  icon: string
  accent?: boolean
}

const cards: KpiCard[] = [
  {
    label: 'Pendapatan Hari Ini',
    value: fmt(TODAY.revenue),
    subtext: `${TODAY.transactions} transaksi`,
    icon: 'banknote',
    accent: true,
  },
  {
    label: 'Total Transaksi',
    value: TODAY.transactions.toString(),
    subtext: '+12% dari kemarin',
    icon: 'receipt',
  },
  {
    label: 'Rata-rata Transaksi',
    value: fmt(Math.round(TODAY.revenue / TODAY.transactions)),
    subtext: 'per transaksi',
    icon: 'trending-up',
  },
  {
    label: 'Produk Terlaris',
    value: 'Nasi Goreng',
    subtext: '148 terjual minggu ini',
    icon: 'star',
  },
]

export default function KpiGrid() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) =>
        card.accent ? (
          <div
            key={card.label}
            className="rounded-2xl p-6 flex flex-col gap-4 shadow-[0_8px_32px_-12px_rgba(21,30,20,0.08)]"
            style={{
              background: 'var(--ds-primary)',
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                {card.label}
              </span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  color: '#fff',
                }}
              >
                <Icon name={card.icon} className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p
                className="text-2xl font-bold leading-none tracking-tight"
                style={{ color: '#fff' }}
              >
                {card.value}
              </p>
              <p
                className="mt-1 text-xs"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {card.subtext}
              </p>
            </div>
          </div>
        ) : (
          <Card key={card.label} className="rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-medium uppercase tracking-wider text-ds-on-surface-variant"
              >
                {card.label}
              </span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-ds-surface-mid"
              >
                <Icon name={card.icon} className="w-4 h-4 text-ds-primary" />
              </div>
            </div>
            <div>
              <p
                className="text-2xl font-bold leading-none tracking-tight text-ds-on-surface"
              >
                {card.value}
              </p>
              <p
                className="mt-1 text-xs text-ds-on-surface-variant"
              >
                {card.subtext}
              </p>
            </div>
          </Card>
        )
      )}
    </div>
  )
}
