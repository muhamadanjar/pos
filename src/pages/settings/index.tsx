import { useState } from 'react'
import DashboardLayout from '@/layouts/dashboard-layout'
import { Banknote, ReceiptText, Globe, Info, Save } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('localization')

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto pb-10">
        
        <div className="flex flex-col gap-2">
          <h2
            className="text-3xl font-black tracking-tight"
            style={{ color: 'var(--ds-on-surface)' }}
          >
            Settings
          </h2>
          <p className="text-sm" style={{ color: 'var(--ds-on-surface-variant)' }}>
            Manage your store preferences and global configurations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex gap-8 overflow-x-auto border-b"
          style={{ borderColor: 'var(--ds-surface-highest)' }}
        >
          {[
            { id: 'general', label: 'General' },
            { id: 'localization', label: 'Localization & Currency' },
            { id: 'store', label: 'Store Info' },
            { id: 'users', label: 'Users & Permissions' },
            { id: 'security', label: 'Security' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-sm whitespace-nowrap transition-colors border-b-2 -mb-[1px] cursor-pointer ${
                activeTab === tab.id ? 'font-bold' : 'font-medium hover:text-[var(--ds-primary)]'
              }`}
              style={{
                color: activeTab === tab.id ? 'var(--ds-primary)' : 'var(--ds-on-surface-variant)',
                borderColor: activeTab === tab.id ? 'var(--ds-primary)' : 'transparent',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (Wider) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Currency Settings Card */}
            <section
              className="rounded-xl p-6 shadow-sm border relative overflow-hidden flex flex-col gap-6"
              style={{
                background: 'var(--ds-surface-lowest)',
                borderColor: 'var(--ds-surface-high)',
              }}
            >
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: 'var(--ds-primary)' }}
              ></div>
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: 'var(--ds-surface-container)',
                    color: 'var(--ds-primary)',
                  }}
                >
                  <Banknote className="w-6 h-6" />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: 'var(--ds-on-surface)' }}
                >
                  Currency Configuration
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Base Currency
                  </label>
                  <select
                    className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-sm outline-none cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)',
                    }}
                  >
                    <option>USD - US Dollar ($)</option>
                    <option>EUR - Euro (€)</option>
                    <option defaultValue="IDR">IDR - Indonesian Rupiah (Rp)</option>
                    <option>GBP - British Pound (£)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Symbol Position
                  </label>
                  <select
                    className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-sm outline-none cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)',
                    }}
                  >
                    <option>Left (e.g. $100)</option>
                    <option>Right (e.g. 100€)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Decimal Separator
                  </label>
                  <select
                    className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-sm outline-none cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)',
                    }}
                  >
                    <option>Dot (1,000.00)</option>
                    <option>Comma (1.000,00)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Rounding Rule
                  </label>
                  <select
                    className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-sm outline-none cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)',
                    }}
                  >
                    <option>Round to nearest .05</option>
                    <option>Round to nearest whole</option>
                    <option>No rounding</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Tax Settings Card */}
            <section
              className="rounded-xl p-6 shadow-sm border flex flex-col gap-6"
              style={{
                background: 'var(--ds-surface-lowest)',
                borderColor: 'var(--ds-surface-high)',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: 'rgba(255, 186, 154, 0.3)', // tertiary-container opacity
                      color: 'var(--ds-tertiary)',
                    }}
                  >
                    <ReceiptText className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: 'var(--ds-on-surface)' }}
                  >
                    Taxation Rules
                  </h3>
                </div>
                <label className="flex items-center cursor-pointer gap-3">
                  <div className="relative inline-flex items-center">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div
                      className="w-10 h-6 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all"
                      style={{
                        background: 'var(--ds-primary-container)',
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Enable Global Tax
                  </span>
                </label>
              </div>

              <div className="flex flex-col gap-6">
                <div
                  className="p-4 rounded-lg border flex items-start gap-4"
                  style={{
                    background: 'var(--ds-surface-container)',
                    borderColor: 'var(--ds-surface-variant)',
                  }}
                >
                  <Info className="w-5 h-5 mt-0.5 shrink-0" style={{ color: 'var(--ds-primary)' }} />
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: 'var(--ds-on-surface)' }}>
                      Tax Calculation Mode
                    </h4>
                    <p className="text-sm" style={{ color: 'var(--ds-on-surface-variant)' }}>
                      Determine how taxes are applied to your products on the POS and receipts.
                    </p>
                    <div className="mt-4 flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tax_mode"
                          className="w-4 h-4"
                          style={{ accentColor: 'var(--ds-primary)' }}
                        />
                        <span className="text-sm font-medium" style={{ color: 'var(--ds-on-surface)' }}>
                          Tax Exclusive <span className="opacity-70">(Added at checkout)</span>
                        </span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="tax_mode"
                          defaultChecked
                          className="w-4 h-4"
                          style={{ accentColor: 'var(--ds-primary)' }}
                        />
                        <span className="text-sm font-medium" style={{ color: 'var(--ds-on-surface)' }}>
                          Tax Inclusive <span className="opacity-70">(Included in price)</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-1/2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Default Global Tax Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      defaultValue="11.00"
                      className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-right font-mono pr-10 text-sm outline-none"
                      style={{
                        background: 'var(--ds-surface-high)',
                        color: 'var(--ds-on-surface)',
                      }}
                    />
                    <span
                      className="absolute right-4 top-3"
                      style={{ color: 'var(--ds-on-surface-variant)' }}
                    >
                      %
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column (Narrower) */}
          <div className="flex flex-col gap-6">
            {/* Locale Settings Card */}
            <section
              className="rounded-xl p-6 shadow-sm border flex-1 flex flex-col gap-6"
              style={{
                background: 'var(--ds-surface-lowest)',
                borderColor: 'var(--ds-surface-high)',
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: 'rgba(168, 245, 165, 0.3)', // secondary-container opacity
                    color: 'var(--ds-secondary)',
                  }}
                >
                  <Globe className="w-6 h-6" />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ color: 'var(--ds-on-surface)' }}
                >
                  Regional Preferences
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Interface Language
                  </label>
                  <select
                    className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-sm outline-none cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)',
                    }}
                  >
                    <option>English (US)</option>
                    <option>Bahasa Indonesia</option>
                    <option>Français</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Time Zone
                  </label>
                  <select
                    className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-sm outline-none cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)',
                    }}
                  >
                    <option>(GMT-05:00) Eastern Time</option>
                    <option>(GMT+00:00) London</option>
                    <option defaultValue="Jakarta">(GMT+07:00) Jakarta</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Date Format
                  </label>
                  <select
                    className="border-none rounded-lg px-4 py-3 focus:ring-2 transition-all w-full text-sm outline-none cursor-pointer"
                    style={{
                      background: 'var(--ds-surface-high)',
                      color: 'var(--ds-on-surface)',
                    }}
                  >
                    <option>MM/DD/YYYY (12/31/2024)</option>
                    <option>DD/MM/YYYY (31/12/2024)</option>
                    <option>YYYY-MM-DD (2024-12-31)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                    Time Format
                  </label>
                  <div
                    className="flex rounded-lg p-1"
                    style={{ background: 'var(--ds-surface-high)' }}
                  >
                    <button
                      className="flex-1 py-2 text-sm font-medium rounded-md shadow-sm transition-colors cursor-pointer"
                      style={{
                        background: 'var(--ds-surface-lowest)',
                        color: 'var(--ds-on-surface)',
                      }}
                    >
                      12-hour (AM/PM)
                    </button>
                    <button
                      className="flex-1 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer hover:bg-black/5"
                      style={{ color: 'var(--ds-on-surface-variant)' }}
                    >
                      24-hour
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Action Bar */}
        <div
          className="mt-4 flex items-center justify-end gap-4 py-6 border-t"
          style={{ borderColor: 'var(--ds-surface-highest)' }}
        >
          <button
            className="px-6 py-3 rounded-lg font-bold text-sm transition-colors hover:bg-black/5 cursor-pointer"
            style={{ color: 'var(--ds-on-surface-variant)' }}
          >
            Discard Changes
          </button>
          <button
            className="px-8 py-3 rounded-lg font-bold text-sm flex items-center gap-2 transition-all hover:scale-[0.98] shadow-sm cursor-pointer"
            style={{
              background: 'linear-gradient(to bottom right, var(--ds-primary), var(--ds-primary-fixed-dim))',
              color: 'var(--ds-on-primary)',
            }}
          >
            <Save className="w-4 h-4" />
            Save Preferences
          </button>
        </div>

      </div>
    </DashboardLayout>
  )
}