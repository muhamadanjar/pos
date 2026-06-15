import type { ReactNode } from 'react'
import DashboardSidebar from '@/pages/dashboard/components/dashboard-sidebar'
import Icon from '@/components/icons'

type Props = {
  children: ReactNode
  title?: string
  subtitle?: string
}

export default function DashboardLayout({ children, title, subtitle }: Props) {
  return (
    <div className="h-screen w-screen flex overflow-hidden font-sans" style={{ background: 'var(--ds-surface)' }}>
      {/* Global design tokens for dashboard from Stitch */}
      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .ambient-shadow {
          box-shadow: 0 10px 40px -10px rgba(21, 30, 20, 0.05);
        }

        .chart-grid {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgba(108, 123, 105, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(108, 123, 105, 0.05) 1px, transparent 1px);
        }
      `}</style>

      {/* Sidebar Navigation */}
      <DashboardSidebar />

      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col min-h-screen relative overflow-x-hidden">
        
        {/* Top Navigation Bar */}
        <header
          className="flex justify-between items-center px-8 w-full z-40 shadow-sm h-16 sticky top-0 shrink-0"
          style={{
            background: 'var(--ds-surface-lowest)',
            borderColor: 'var(--ds-outline-variant)',
            borderBottomWidth: '1px'
          }}
        >
          {/* Search Input */}
          <div className="flex items-center gap-4">
            <div
              className="relative rounded-full flex items-center px-4 py-2 w-64 focus-within:ring-1 focus-within:ring-[var(--ds-primary)]/20 transition-all"
              style={{ background: 'var(--ds-surface-low)' }}
            >
              <Icon name="search" className="w-4 h-4 mr-2" style={{ color: 'var(--ds-on-surface-variant)' }} />
              <input
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-[var(--ds-on-surface-variant)]/50 focus:ring-0 p-0"
                style={{ color: 'var(--ds-on-surface)' }}
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>

          {/* Quick Actions & Profile */}
          <div className="flex items-center gap-4">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer active:scale-95 hover:bg-[var(--ds-surface-low)]"
              style={{ color: 'var(--ds-on-surface-variant)' }}
              aria-label="Notifications"
            >
              <Icon name="bell" className="w-5 h-5" />
            </button>
            
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer active:scale-95 hover:bg-[var(--ds-surface-low)]"
              style={{ color: 'var(--ds-on-surface-variant)' }}
              aria-label="Help"
            >
              <Icon name="help-circle" className="w-5 h-5" />
            </button>
            
            <button
              className="text-sm font-bold px-4 py-2 rounded-full transition-colors hover:bg-[var(--ds-surface-low)] cursor-pointer"
              style={{ color: 'var(--ds-primary)' }}
            >
              Support
            </button>
            
            <div
              className="w-10 h-10 rounded-full overflow-hidden border cursor-pointer active:scale-95 transition-transform ml-2"
              style={{ borderColor: 'var(--ds-outline-variant)' }}
            >
              <img
                alt="User profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB1B3Wa1C1srUHOvtgMLEf1TikZQcbh8edUv3m7dFidzKjNS9gMj06XQWavpnvVrq1RfdQNvE8R435xEM0skuMAvftwwJCyMEBDSoNQHPMGIQETa1CMyCR-PrPp1Set4ArH49W9lO1wWCjWSt5xfpGbf2T-RYrfaoGYTRgL62o4lWEH35Tc6c1MiZ-UJ0uRyPrCEzDhvDqHhyswgoK31tc9gYHmIJei23FTFsyt7sC93qLAkEG-B0VjYSY5Z3OH1H7LmhIviKD3OLP"
              />
            </div>
          </div>
        </header>

        {/* Scrollable content viewport */}
        <main className="flex-1 overflow-y-auto px-8 py-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-6">
            
            {/* Title / Header Section */}
            {title && (
              <div className="flex justify-between items-end mb-2">
                <div>
                  <h2
                    className="font-black text-3xl tracking-tight mb-1"
                    style={{ color: 'var(--ds-on-surface)' }}
                  >
                    {title}
                  </h2>
                  {subtitle && (
                    <p className="text-sm" style={{ color: 'var(--ds-on-surface-variant)' }}>
                      {subtitle}
                    </p>
                  )}
                </div>
                
                {/* Export PDF Button */}
                <div className="flex gap-2">
                  <button
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-[var(--ds-surface-highest)] cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)'
                    }}
                  >
                    Export PDF
                  </button>
                </div>
              </div>
            )}
            
            {/* Render page children */}
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
