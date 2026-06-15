import { DAILY_REVENUE, fmt } from '../data/mock-data'

const MAX = Math.max(...DAILY_REVENUE.map((d) => d.revenue))

export default function RevenueChart() {
  const todayIdx = DAILY_REVENUE.length - 1

  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-6"
      style={{
        background: 'var(--ds-surface-lowest)',
        boxShadow: '0 24px 48px -12px rgba(21,30,20,0.08)',
      }}
    >
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--ds-on-surface-variant)' }}>
            Pendapatan 7 Hari
          </p>
          <p className="mt-1 text-xl font-bold tracking-tight" style={{ color: 'var(--ds-on-surface)' }}>
            {fmt(DAILY_REVENUE.reduce((s, d) => s + d.revenue, 0))}
          </p>
        </div>
        <div
          className="px-3 py-1 rounded-full text-xs font-semibold"
          style={{ background: 'var(--ds-surface-low)', color: 'var(--ds-secondary)' }}
        >
          Minggu Ini
        </div>
      </div>

      <div className="flex items-end gap-2 h-32">
        {DAILY_REVENUE.map((d, i) => {
          const pct = (d.revenue / MAX) * 100
          const isToday = i === todayIdx
          return (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-end" style={{ height: '80px' }}>
                <div
                  className="w-full rounded-t-lg transition-all duration-500"
                  style={{
                    height: `${pct}%`,
                    background: isToday
                      ? 'linear-gradient(180deg, var(--ds-primary) 0%, var(--ds-on-primary-container) 100%)'
                      : 'var(--ds-surface-highest)',
                  }}
                />
              </div>
              <span
                className="text-[10px] font-medium"
                style={{ color: isToday ? 'var(--ds-primary)' : 'var(--ds-on-surface-variant)' }}
              >
                {d.day}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
