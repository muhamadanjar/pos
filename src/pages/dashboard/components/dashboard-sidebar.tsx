import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { motion } from 'motion'
import Icon from '@/components/icons'
import { cn } from '@/lib/utils'
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
    <motion.div
      key={item.label}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      {item.href ? (
        <Link
          to={item.href}
          className={cn(
            'relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
            isActive
              ? 'bg-ds-surface-highest text-ds-on-surface before:absolute before:left-0 before:top-2 before:bottom-2 before:w-0.5 before:rounded-full before:bg-ds-primary'
              : 'text-ds-on-surface-variant hover:bg-ds-surface-mid hover:text-ds-on-surface'
          )}
          style={{ marginLeft: `${level * 12}px` }}
        >
          {item.icon && <Icon name={item.icon} className={cn('w-4 h-4 shrink-0', isActive && 'text-ds-primary')} />}
          <span>{item.label}</span>
        </Link>
      ) : (
        <motion.button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors justify-between"
          style={{
            marginLeft: `${level * 12}px`,
            background: expanded ? 'var(--ds-surface-mid)' : 'transparent',
            color: 'var(--ds-on-surface)',
          }}
          whileHover={{ background: expanded ? 'var(--ds-surface-mid)' : 'var(--ds-surface-low)' }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-3">
            {item.icon && <Icon name={item.icon} className="w-4 h-4 shrink-0" />}
            <span>{item.label}</span>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon
              name="chevron-right"
              className="w-4 h-4 shrink-0"
              style={{ color: 'var(--ds-on-surface-variant)' }}
            />
          </motion.div>
        </motion.button>
      )}

      {hasChildren && (
        <motion.div
          className="mt-1 overflow-hidden"
          initial={false}
          animate={{
            opacity: expanded ? 1 : 0,
            height: expanded ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {item.children!.map((child) => (
            <MenuItemComponent key={child.label} item={child} pathname={pathname} level={level + 1} />
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function DashboardSidebar() {
  const { pathname } = useLocation()

  return (
    <aside
      className="w-64 flex flex-col shrink-0 border-r overflow-hidden"
      style={{
        background: 'var(--ds-surface-low)',
        borderColor: 'var(--ds-outline-variant)',
      }}
    >
      {/* Branding */}
      <motion.div
        className="h-14 flex items-center px-6 shrink-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
          style={{ background: 'var(--ds-primary)' }}
        >
          <Icon name="layout-dashboard" className="w-4 h-4" style={{ color: 'var(--ds-on-primary)' }} />
        </div>
        <span className="text-sm font-bold tracking-tight" style={{ color: 'var(--ds-on-surface)' }}>
          Precision POS
        </span>
      </motion.div>

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
        <Button variant="ghost" className="w-full justify-start gap-3">
          <Icon name="log-out" className="w-4 h-4" />
          <span>Logout</span>
        </Button>
      </div>
    </aside>
  )
}
