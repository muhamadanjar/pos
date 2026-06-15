import { TOP_PRODUCTS, fmt } from '../data/mock-data'

const MAX_SOLD = TOP_PRODUCTS[0].sold

export default function TopProducts() {
  return (
    <div
      className="rounded-2xl p-6 flex flex-col gap-5"
      style={{
        background: 'var(--ds-surface-lowest)',
        boxShadow: '0 24px 48px -12px rgba(21,30,20,0.08)',
      }}
    >
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--ds-on-surface-variant)' }}>
        Produk Terlaris
      </p>

      <div className="flex flex-col">
        {TOP_PRODUCTS.map((product, i) => {
          const pct = (product.sold / MAX_SOLD) * 100
          return (
            <div key={product.name} className="py-3 flex items-center gap-4">
              <span className="text-xl w-8 text-center shrink-0">{product.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold truncate" style={{ color: 'var(--ds-on-surface)' }}>
                    {product.name}
                  </span>
                  <span className="text-xs font-medium ml-2 shrink-0" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    {product.sold} terjual
                  </span>
                </div>
                <div className="h-1 rounded-full w-full" style={{ background: 'var(--ds-surface-high)' }}>
                  <div
                    className="h-1 rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: i === 0 ? 'var(--ds-primary)' : 'var(--ds-primary-container)',
                    }}
                  />
                </div>
              </div>
              <span className="text-xs font-semibold shrink-0 w-20 text-right" style={{ color: 'var(--ds-secondary)' }}>
                {fmt(product.revenue)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
