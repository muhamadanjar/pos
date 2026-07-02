import { TODAY, fmt } from '../data/mock-data'
import Icon from '@/components/icons'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

type KpiCard = {
  label: string
  value: string
  subtext: string
  icon: string
  accent?: boolean
  trend?: 'up' | 'down' | 'neutral'
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
    trend: 'up',
  },
  {
    label: 'Rata-rata Transaksi',
    value: fmt(Math.round(TODAY.revenue / TODAY.transactions)),
    subtext: 'per transaksi',
    icon: 'trending-up',
    trend: 'up',
  },
  {
    label: 'Produk Terlaris',
    value: 'Nasi Goreng',
    subtext: '148 terjual minggu ini',
    icon: 'star',
    trend: 'neutral',
  },
]

export default function KpiGrid() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) =>
        card.accent ? (
          <Card
            key={card.label}
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: 'var(--ds-primary)',
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-ds-on-primary/70">
                {card.label}
              </span>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/15 text-ds-on-primary">
                <Icon name={card.icon} className="w-4 h-4" />
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold leading-none tracking-tight text-ds-on-primary">
                {card.value}
              </p>
              <p className="mt-1 text-xs text-ds-on-primary/60">
                {card.subtext}
              </p>
            </div>
          </Card>
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
              <p className="text-2xl font-bold leading-none tracking-tight text-ds-on-surface">
                {card.value}
              </p>
              <p
                className={cn(
                  'mt-1 text-xs flex items-center gap-1',
                  card.trend === 'up' && 'text-ds-secondary',
                  card.trend === 'down' && 'text-ds-error',
                  (!card.trend || card.trend === 'neutral') && 'text-ds-on-surface-variant'
                )}
              >
                {card.trend === 'up' && <Icon name="trending-up" className="w-3 h-3" />}
                {card.trend === 'down' && <Icon name="trending-down" className="w-3 h-3" />}
                {card.subtext}
              </p>
            </div>
          </Card>
        )
      )}
    </div>
  )
}
