import type { ReactNode } from 'react'
import DashboardSidebar from '@/pages/dashboard/components/dashboard-sidebar'
import Icon from '@/components/icons'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

type Props = {
  children: ReactNode
  title?: string
  subtitle?: string
}

export default function DashboardLayout({ children, title, subtitle }: Props) {
  return (
    <div className="h-screen w-screen flex overflow-hidden font-sans" style={{ background: 'var(--ds-surface)' }}>
      {/* Sidebar Navigation */}
      <DashboardSidebar />

      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col relative overflow-x-hidden">
        
        {/* Top Navigation Bar */}
        <header
          className="flex justify-between items-center px-8 w-full z-40 shadow-sm h-14 sticky top-0 shrink-0"
          style={{
            background: 'var(--ds-surface-lowest)',
            borderColor: 'var(--ds-outline-variant)',
            borderBottomWidth: '1px'
          }}
        >
          {/* Search Input */}
          <div className="flex items-center">
            <div
              className="relative rounded-lg flex items-center px-4 py-2 w-72 focus-within:ring-1 focus-within:ring-ds-outline-variant transition-all"
              style={{ background: 'var(--ds-surface-low)' }}
            >
              <Icon name="search" className="w-4 h-4 mr-2" style={{ color: 'var(--ds-on-surface-variant)' }} />
              <input
                className="bg-transparent border-none outline-none text-sm w-full placeholder:text-ds-on-surface-variant/50 focus:ring-0 p-0"
                style={{ color: 'var(--ds-on-surface)' }}
                placeholder="Search..."
                type="text"
              />
            </div>
          </div>

          {/* Quick Actions & Profile */}
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer active:scale-95 hover:bg-[var(--ds-surface-low)]"
              style={{ color: 'var(--ds-on-surface-variant)' }}
              aria-label="Notifications"
            >
              <Icon name="bell" className="w-5 h-5" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[var(--ds-surface-low)] transition-colors cursor-pointer active:scale-95">
                  <Avatar className="size-8">
                    <AvatarImage
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB1B3Wa1C1srUHOvtgMLEf1TikZQcbh8edUv3m7dFidzKjNS9gMj06XQWavpnvVrq1RfdQNvE8R435xEM0skuMAvftwwJCyMEBDSoNQHPMGIQETa1CMyCR-PrPp1Set4ArH49W9lO1wWCjWSt5xfpGbf2T-RYrfaoGYTRgL62o4lWEH35Tc6c1MiZ-UJ0uRyPrCEzDhvDqHhyswgoK31tc9gYHmIJei23FTFsyt7sC93qLAkEG-B0VjYSY5Z3OH1H7LmhIviKD3OLP"
                      alt="User avatar"
                    />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <div className="text-left hidden md:block">
                    <p className="text-xs font-semibold leading-none" style={{ color: 'var(--ds-on-surface)' }}>
                      Admin
                    </p>
                    <p className="text-xs leading-none mt-0.5" style={{ color: 'var(--ds-on-surface-variant)' }}>
                      arvanria@gmail.com
                    </p>
                  </div>
                  <Icon name="chevron-down" className="w-3.5 h-3.5 hidden md:block" style={{ color: 'var(--ds-on-surface-variant)' }} />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface)' }}>
                      Admin
                    </p>
                    <p className="text-xs" style={{ color: 'var(--ds-on-surface-variant)' }}>
                      arvanria@gmail.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icon name="user" className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Icon name="settings" className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Icon name="log-out" className="w-4 h-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
                    className="font-bold text-2xl tracking-tight mb-1"
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
                  <Button variant="outline" size="sm">
                    <Icon name="download" className="w-4 h-4 mr-2" />
                    Export PDF
                  </Button>
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
