import { Link, useLocation } from 'react-router'
import Icon from '@/components/icons'

export default function DashboardHeader() {
  const { pathname } = useLocation()

  return (
    <header
      className="h-14 flex items-center justify-between px-8 shrink-0"
      style={{ background: 'var(--ds-surface-low)' }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: 'var(--ds-primary)' }}
        >
          <Icon name="layout-dashboard" className="w-4 h-4" style={{ color: 'var(--ds-on-primary)' }} />
        </div>
        <span className="text-sm font-semibold tracking-tight" style={{ color: 'var(--ds-on-surface)' }}>
          Precision POS
        </span>
      </div>

      <nav aria-label="Main navigation" className="flex items-center gap-1">
        {[
          { label: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard' },
          { label: 'POS', href: '/pos', icon: 'shopping-cart' },
        ].map(({ label, href, icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              to={href}
              aria-current={active ? 'page' : undefined}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                background: active ? 'var(--ds-surface-highest)' : 'transparent',
                color: active ? 'var(--ds-on-surface)' : 'var(--ds-on-surface-variant)',
              }}
            >
              <Icon name={icon} className="w-4 h-4" />
              {label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
