import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import Icon from '@/components/icons'

interface POSLayoutProps {
  children: React.ReactNode
}

function POSLayout({ children }: POSLayoutProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-screen w-screen flex flex-col bg-ds-surface text-ds-on-surface font-sans antialiased overflow-hidden">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top Header */}
      <header className="h-14 bg-ds-surface-lowest border-b border-ds-outline-variant/15 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
        
        {/* Branding & Navigation */}
        <div className="flex items-center gap-4 w-1/4">
          <Button
            asChild
            variant="ghost"
            size="icon"
            title="Back to Dashboard"
          >
            <Link to="/dashboard">
              <Icon name="arrow-left" className="h-5 w-5" />
            </Link>
          </Button>
          <div className="h-6 w-px bg-ds-outline-variant/20"></div>
          <h1 className="text-lg font-semibold tracking-tight text-ds-on-surface">Precision POS</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl px-4">
          <div className="relative flex items-center w-full h-10 rounded-lg bg-ds-surface-high border border-transparent focus-within:bg-ds-surface-lowest focus-within:border-ds-primary/20 focus-within:ring-2 focus-within:ring-ds-primary/10 transition-all overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-ds-on-surface-variant">
              <Icon name="search" className="h-5 w-5" />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-ds-on-surface bg-transparent pr-2 placeholder-ds-on-surface-variant border-none focus:ring-0 p-0"
              id="search"
              placeholder="Search products, barcodes, or SKUs..."
              type="text"
            />
          </div>
        </div>

        {/* Time & Quick Actions */}
        <div className="flex items-center justify-end gap-4 w-1/4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-ds-on-surface-variant bg-ds-surface-high px-3 py-1.5 rounded-full border border-ds-outline-variant/30">
            <Icon name="clock" className="size-4 text-ds-primary" />
            <span className="font-medium">
              {time.toLocaleDateString('id-ID', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
              })}
              {' · '}
              {time.toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" aria-label="Sync">
              <Icon name="refresh-cw" className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Fullscreen">
              <Icon name="maximize" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  )
}

export default POSLayout
