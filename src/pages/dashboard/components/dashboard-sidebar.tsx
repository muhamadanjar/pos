import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import Icon from '@/components/icons'
import type { MenuItem } from '@/types/menu'
import { MENU_ITEMS } from '@/config'
import { Button } from '@/components/ui/button'


type MenuItemProps = {
  item: MenuItem
  pathname: string
  level?: number
}

function MenuItemComponent({ item, pathname, level = 0 }: MenuItemProps) {
  const [expanded, setExpanded] = useState(false)
  const isActive = item.href === pathname || (item.href === '/dashboard' && pathname === '/')
  const hasChildren = item.children && item.children.length > 0

  return (
    <div key={item.label}>
      {item.href ? (
        <Link
          to={item.href}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{
            marginLeft: `${level * 12}px`,
            background: isActive ? 'var(--ds-surface-highest)' : 'transparent',
            color: isActive ? 'var(--ds-on-surface)' : 'var(--ds-on-surface-variant)',
          }}
        >
          {item.icon && <Icon name={item.icon} className="w-4 h-4 shrink-0" />}
          <span>{item.label}</span>
        </Link>
      ) : (
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors justify-between"
          style={{
            marginLeft: `${level * 12}px`,
            background: expanded ? 'var(--ds-surface-mid)' : 'transparent',
            color: 'var(--ds-on-surface)',
          }}
        >
          <div className="flex items-center gap-3">
            {item.icon && <Icon name={item.icon} className="w-4 h-4 shrink-0" />}
            <span>{item.label}</span>
          </div>
          <Icon
            name={expanded ? 'chevron-down' : 'chevron-right'}
            className="w-4 h-4 shrink-0"
            style={{ color: 'var(--ds-on-surface-variant)' }}
          />
        </button>
      )}

      {hasChildren && expanded && (
        <div className="mt-1">
          {item.children!.map((child) => (
            <MenuItemComponent key={child.label} item={child} pathname={pathname} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function DashboardSidebar() {
  const { pathname } = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <aside
      className="w-64 flex flex-col shrink-0 border-r overflow-hidden"
      style={{
        background: 'var(--ds-surface-low)',
        borderColor: 'var(--ds-outline-variant)',
      }}
    >
      {/* Branding */}
      <div className="h-14 flex items-center px-6 shrink-0">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
          style={{ background: 'var(--ds-primary)' }}
        >
          <Icon name="layout-dashboard" className="w-4 h-4" style={{ color: 'var(--ds-on-primary)' }} />
        </div>
        <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--ds-on-surface)' }}>
          Precision POS
        </span>
      </div>

      {/* Search */}
      <div className="px-3 py-3 border-b shrink-0" style={{ borderColor: 'var(--ds-outline-variant)' }}>
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors"
          style={{
            background: 'var(--ds-surface-mid)',
            color: 'var(--ds-on-surface-variant)',
          }}
        >
          <Icon name="search" className="w-4 h-4" />
          <span>Search menu...</span>
        </button>
        {searchOpen && (
          <input
            type="text"
            placeholder="Type to search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full mt-2 px-3 py-2 rounded-lg text-sm border-0 outline-none"
            style={{
              background: 'var(--ds-surface-highest)',
              color: 'var(--ds-on-surface)',
            }}
            autoFocus
          />
        )}
      </div>

      {/* New Transaction CTA */}
      <div className="px-3 py-3">
        <Link to="/pos">
          <Button className="w-full bg-ds-primary text-ds-on-primary hover:bg-ds-primary/90 gap-2">
            <Icon name="plus" className="w-4 h-4" />
            New Transaction
          </Button>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {MENU_ITEMS.map((item) => (
          <MenuItemComponent key={item.label} item={item} pathname={pathname} />
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t px-3 py-4 shrink-0" style={{ borderColor: 'var(--ds-outline-variant)' }}>
        <button
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{
            background: 'transparent',
            color: 'var(--ds-on-surface-variant)',
          }}
        >
          <Icon name="log-out" className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
