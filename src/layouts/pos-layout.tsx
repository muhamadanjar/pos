import { useState, useEffect } from 'react'
import { Link } from 'react-router'
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
    <div className="h-screen w-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased overflow-hidden">
      {/* Design System variables for Mint/Pastel Green POS Theme */}
      <style>{`
        :root {
          --mint-50: #f4f9f6;
          --mint-100: #e3f0e9;
          --mint-200: #cbe4d7;
          --mint-300: #A7D7C5;
          --mint-400: #8dc8b3;
          --mint-500: #70b69e;
          --mint-600: #549c84;
          --mint-700: #437d6a;
          --mint-800: #366455;
          --mint-900: #2d5347;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-sm z-10">
        
        {/* Branding & Navigation */}
        <div className="flex items-center gap-4 w-1/4">
          <Link
            to="/dashboard"
            className="p-2 text-slate-500 hover:text-[var(--mint-900)] hover:bg-[var(--mint-50)] rounded-lg transition-colors group flex items-center justify-center cursor-pointer"
            title="Back to Dashboard"
          >
            <Icon name="arrow-left" className="h-5 w-5" />
          </Link>
          <div className="h-6 w-px bg-slate-200"></div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-900">Iron Ledger POS</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl px-4">
          <div className="relative flex items-center w-full h-10 rounded-lg bg-slate-100 border border-transparent focus-within:border-[var(--mint-400)] focus-within:bg-white focus-within:ring-2 focus-within:ring-[var(--mint-400)]/20 transition-all overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-slate-400">
              <Icon name="search" className="h-5 w-5" />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-slate-700 bg-transparent pr-2 placeholder-slate-400 border-none focus:ring-0 p-0"
              id="search"
              placeholder="Search products, barcodes, or SKUs..."
              type="text"
            />
          </div>
        </div>

        {/* Time & Quick Actions */}
        <div className="flex items-center justify-end gap-4 w-1/4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            <Icon name="clock" className="size-4 text-[var(--mint-600)]" />
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
            <button className="p-2 text-slate-500 hover:bg-[var(--mint-50)] hover:text-[var(--mint-800)] rounded-lg transition-colors cursor-pointer" aria-label="Sync">
              <Icon name="refresh-cw" className="h-4 w-4" />
            </button>
            <button className="p-2 text-slate-500 hover:bg-[var(--mint-50)] hover:text-[var(--mint-800)] rounded-lg transition-colors cursor-pointer" aria-label="Fullscreen">
              <Icon name="maximize" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  )
}

export default POSLayout
