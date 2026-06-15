import { TODAY, fmt } from '../data/mock-data'
import Icon from '@/components/icons'

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
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl p-6 flex flex-col gap-4"
          style={{
            background: card.accent ? 'var(--ds-primary)' : 'var(--ds-surface-lowest)',
            boxShadow: '0 24px 48px -12px rgba(21,30,20,0.08)',
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-medium uppercase tracking-wider"
              style={{ color: card.accent ? 'rgba(255,255,255,0.7)' : 'var(--ds-on-surface-variant)' }}
            >
              {card.label}
            </span>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: card.accent ? 'rgba(255,255,255,0.15)' : 'var(--ds-surface-low)',
                color: card.accent ? '#fff' : 'var(--ds-primary)',
              }}
            >
              <Icon name={card.icon} className="w-4 h-4" />
            </div>
          </div>
          <div>
            <p
              className="text-2xl font-bold leading-none tracking-tight"
              style={{ color: card.accent ? '#fff' : 'var(--ds-on-surface)' }}
            >
              {card.value}
            </p>
            <p
              className="mt-1 text-xs"
              style={{ color: card.accent ? 'rgba(255,255,255,0.6)' : 'var(--ds-on-surface-variant)' }}
            >
              {card.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
