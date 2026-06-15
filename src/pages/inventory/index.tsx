import { useState } from 'react'
import DashboardLayout from '@/layouts/dashboard-layout'
import {
  PackagePlus,
  Layers,
  TrendingDown,
  AlertCircle,
  Filter,
  Download,
  Edit2,
  ChevronsUpDown,
  ImageOff,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Truck,
  BadgeCheck,
  RefreshCw,
} from 'lucide-react'

// Dummy Data
const INVENTORY_ITEMS = [
  {
    id: '1',
    name: 'Minimalist Watch v2',
    category: 'Accessories',
    sku: 'MW-V2-001',
    price: 249.0,
    stock: 42,
    status: 'In Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKBNp2AIHq_1PsKhwYr0_q_ofGEshg4cM3SDxHX0DYGqBxePvXdTGoDHoe2qMN0XWrd2zu5l0MnZ2PLQq30c9jHYwWEKxFm_Ez0g0uC6hQjEbUSV4xHLPiaTj7uaQ4rF9cY0wbzW7vGDcdEHgemrkGAM7Tln2FzBLf0GwLhKyauL0GXfvur4lOSqas0mhFtMj9TLjxn0mRX0yDO_v2hwsbvqEB4IVJkc2HBt_WrCAtdnM9dPfQwn9AX9Rw0NlSZ8hRwuqVEOgjKCbi',
  },
  {
    id: '2',
    name: 'Aero Kinetic Runner',
    category: 'Footwear',
    sku: 'AK-RUN-RED',
    price: 185.0,
    stock: 5,
    status: 'Low Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNGuzPpvRS1R8zDRJJX2Ba0poGMnRkJcKTYNq5vo48A2jNr708GsKlWoFQLiQDudX-Vns4Fvz6RIOA_ccBchut-z0sylXaMIKOT6ksA3lM5f1uIjFqxxv35vOnEwqFPXYUMkxoGpIZgFHzcxViJmwz5YIXXeBGs2_fdGJLfHZHQeKhT0ICbg8HZkjiRxz9gqx_RgieRg8YiHYekJCjUYL-3qfU4bdgMu30D_Z7wK5__vXRf7wTvCnn-3IAhBPGAj3SeUhlviz_jnJX',
  },
  {
    id: '3',
    name: 'Raw Denim Jacket',
    category: 'Apparel',
    sku: 'RD-JKT-IND',
    price: 120.0,
    stock: 0,
    status: 'Out of Stock',
    image: null,
  },
]

export default function InventoryDashboard() {
  const [isRotating, setIsRotating] = useState(false)

  const handleSync = () => {
    setIsRotating(true)
    setTimeout(() => setIsRotating(false), 1000)
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto pb-20 relative">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight" style={{ color: 'var(--ds-on-surface)' }}>
              Inventory
            </h2>
            <p className="mt-1 text-sm" style={{ color: 'var(--ds-on-surface-variant)' }}>
              Real-time oversight of your boutique's physical stock.
            </p>
          </div>
          <button
            className="px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95"
            style={{
              background: 'var(--ds-surface-highest)',
              color: 'var(--ds-primary)',
            }}
          >
            <PackagePlus className="w-5 h-5" />
            Add New Product
          </button>
        </div>

        {/* Stock Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="p-6 rounded-3xl flex flex-col justify-between h-40 border"
            style={{
              background: 'var(--ds-surface-low)',
              borderColor: 'var(--ds-outline-variant)',
            }}
          >
            <div className="flex justify-between items-start">
              <div
                className="p-2 rounded-xl"
                style={{ background: 'var(--ds-primary-container)', color: 'var(--ds-primary)' }}
              >
                <Layers className="w-6 h-6" />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--ds-on-surface-variant)' }}
              >
                Total Items
              </span>
            </div>
            <div>
              <span className="text-4xl font-black" style={{ color: 'var(--ds-on-surface)' }}>
                1,284
              </span>
              <p className="text-xs mt-1" style={{ color: 'var(--ds-on-surface-variant)' }}>
                +12 from last delivery
              </p>
            </div>
          </div>

          <div
            className="p-6 rounded-3xl flex flex-col justify-between h-40 border"
            style={{
              background: 'var(--ds-surface-low)',
              borderColor: 'var(--ds-outline-variant)',
            }}
          >
            <div className="flex justify-between items-start">
              <div
                className="p-2 rounded-xl"
                style={{ background: 'rgba(255, 186, 154, 0.4)', color: 'var(--ds-tertiary)' }}
              >
                <TrendingDown className="w-6 h-6" />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--ds-on-surface-variant)' }}
              >
                Low Stock
              </span>
            </div>
            <div>
              <span className="text-4xl font-black" style={{ color: 'var(--ds-on-surface)' }}>
                14
              </span>
              <p className="text-xs mt-1" style={{ color: 'var(--ds-tertiary)' }}>
                Requires reorder soon
              </p>
            </div>
          </div>

          <div
            className="p-6 rounded-3xl flex flex-col justify-between h-40 border"
            style={{
              background: 'var(--ds-surface-low)',
              borderColor: 'var(--ds-outline-variant)',
            }}
          >
            <div className="flex justify-between items-start">
              <div
                className="p-2 rounded-xl"
                style={{ background: 'var(--ds-error-container)', color: 'var(--ds-error)' }}
              >
                <AlertCircle className="w-6 h-6" />
              </div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--ds-on-surface-variant)' }}
              >
                Out of Stock
              </span>
            </div>
            <div>
              <span className="text-4xl font-black" style={{ color: 'var(--ds-on-surface)' }}>
                3
              </span>
              <p className="text-xs mt-1" style={{ color: 'var(--ds-error)' }}>
                Lost revenue potential
              </p>
            </div>
          </div>
        </div>

        {/* Product Inventory Table */}
        <section
          className="rounded-3xl overflow-hidden shadow-sm border"
          style={{ background: 'var(--ds-surface-lowest)', borderColor: 'var(--ds-outline-variant)' }}
        >
          <div
            className="px-8 py-6 flex justify-between items-center border-b"
            style={{ borderColor: 'var(--ds-surface-container)' }}
          >
            <h3 className="font-bold text-lg" style={{ color: 'var(--ds-on-surface)' }}>
              Stock Catalog
            </h3>
            <div className="flex gap-2">
              <button
                className="p-2 rounded-lg transition-colors cursor-pointer"
                style={{ color: 'var(--ds-on-surface-variant)' }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ds-surface-container)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <Filter className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-lg transition-colors cursor-pointer"
                style={{ color: 'var(--ds-on-surface-variant)' }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ds-surface-container)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  className="text-xs uppercase tracking-tighter"
                  style={{
                    background: 'var(--ds-surface-container-low)',
                    color: 'var(--ds-on-surface-variant)',
                  }}
                >
                  <th className="px-8 py-4 font-bold">Product Name</th>
                  <th className="px-4 py-4 font-bold">Category</th>
                  <th className="px-4 py-4 font-bold">SKU</th>
                  <th className="px-4 py-4 font-bold text-right">Price</th>
                  <th className="px-4 py-4 font-bold text-center">Stock</th>
                  <th className="px-4 py-4 font-bold">Status</th>
                  <th className="px-8 py-4 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody
                className="divide-y"
                style={{ borderColor: 'var(--ds-surface-container)' }}
              >
                {INVENTORY_ITEMS.map((item) => (
                  <tr
                    key={item.id}
                    className="group transition-colors"
                    style={{ background: 'transparent' }}
                    onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ds-surface-container-low)')}
                    onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shrink-0"
                          style={{
                            background: 'var(--ds-surface-container)',
                            color: 'var(--ds-on-surface-variant)',
                          }}
                        >
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageOff className="w-5 h-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-sm" style={{ color: 'var(--ds-on-surface)' }}>
                            {item.name}
                          </p>
                          <p className="text-xs" style={{ color: 'var(--ds-on-surface-variant)' }}>
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm" style={{ color: 'var(--ds-on-surface-variant)' }}>
                      {item.category}
                    </td>
                    <td className="px-4 py-4 text-sm font-mono" style={{ color: 'var(--ds-on-surface)' }}>
                      {item.sku}
                    </td>
                    <td className="px-4 py-4 text-sm font-bold text-right" style={{ color: 'var(--ds-on-surface)' }}>
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="px-4 py-4 text-sm font-bold text-center" style={{ color: 'var(--ds-on-surface)' }}>
                      {item.stock}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap"
                        style={{
                          background:
                            item.status === 'In Stock'
                              ? 'var(--ds-secondary-container)'
                              : item.status === 'Low Stock'
                              ? 'rgba(255, 186, 154, 0.4)'
                              : 'var(--ds-error-container)',
                          color:
                            item.status === 'In Stock'
                              ? 'var(--ds-on-secondary-container)'
                              : item.status === 'Low Stock'
                              ? 'var(--ds-tertiary)'
                              : 'var(--ds-error)',
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="p-2 rounded-full transition-all cursor-pointer hover:shadow-sm"
                          style={{ color: 'var(--ds-primary)', background: 'var(--ds-surface-lowest)' }}
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 rounded-full transition-all cursor-pointer hover:shadow-sm"
                          style={{ color: 'var(--ds-on-surface-variant)', background: 'var(--ds-surface-lowest)' }}
                        >
                          <ChevronsUpDown className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="px-8 py-4 border-t flex justify-between items-center"
            style={{
              borderColor: 'var(--ds-surface-container)',
              background: 'var(--ds-surface-container-low)',
            }}
          >
            <p className="text-xs" style={{ color: 'var(--ds-on-surface-variant)' }}>
              Showing 3 of 124 products
            </p>
            <div className="flex gap-2">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer"
                style={{ color: 'var(--ds-on-surface-variant)' }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ds-surface-container)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-xs"
                style={{
                  background: 'var(--ds-primary-container)',
                  color: 'var(--ds-on-primary-container)',
                }}
              >
                1
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg font-bold text-xs cursor-pointer transition-colors"
                style={{ color: 'var(--ds-on-surface-variant)' }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ds-surface-container)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                2
              </button>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg transition-all cursor-pointer"
                style={{ color: 'var(--ds-on-surface-variant)' }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ds-surface-container)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Incoming Stock Management */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3
              className="font-extrabold text-2xl tracking-tighter"
              style={{ color: 'var(--ds-on-surface)' }}
            >
              Supply Log
            </h3>
            <button
              className="text-sm font-bold flex items-center gap-1 hover:underline underline-offset-4 transition-all cursor-pointer"
              style={{ color: 'var(--ds-primary)' }}
            >
              View Full History
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supply Item Card 1 */}
            <div
              className="p-6 rounded-3xl border flex flex-col gap-4"
              style={{ background: 'var(--ds-surface-container)', borderColor: 'var(--ds-outline-variant)' }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded uppercase"
                    style={{ background: 'rgba(71, 230, 96, 0.2)', color: 'var(--ds-primary)' }}
                  >
                    Pending
                  </span>
                  <p className="text-lg font-black mt-2" style={{ color: 'var(--ds-on-surface)' }}>
                    Stock Receipt #8902
                  </p>
                </div>
                <span className="text-sm font-bold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                  Oct 24, 2023
                </span>
              </div>
              <div
                className="flex items-center gap-3 py-2 border-y"
                style={{ borderColor: 'var(--ds-outline-variant)' }}
              >
                <Truck className="w-5 h-5" style={{ color: 'var(--ds-on-surface-variant)' }} />
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--ds-on-surface-variant)' }}
                  >
                    Supplier
                  </p>
                  <p className="text-sm font-bold" style={{ color: 'var(--ds-on-surface)' }}>
                    Artisan Goods Co.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm" style={{ color: 'var(--ds-on-surface-variant)' }}>
                  124 Items · 8 Categories
                </p>
                <button
                  className="px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
                  style={{ background: 'var(--ds-surface-lowest)', color: 'var(--ds-on-surface)' }}
                  onMouseOver={(e) => (e.currentTarget.style.background = 'var(--ds-primary-container)')}
                  onMouseOut={(e) => (e.currentTarget.style.background = 'var(--ds-surface-lowest)')}
                >
                  Review Receipt
                </button>
              </div>
            </div>

            {/* Supply Item Card 2 */}
            <div
              className="p-6 rounded-3xl border flex flex-col gap-4"
              style={{ background: 'var(--ds-surface-container-low)', borderColor: 'var(--ds-outline-variant)' }}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded uppercase"
                    style={{
                      background: 'var(--ds-surface-container-high)',
                      color: 'var(--ds-on-surface-variant)',
                    }}
                  >
                    Received
                  </span>
                  <p className="text-lg font-black mt-2" style={{ color: 'var(--ds-on-surface)' }}>
                    Stock Receipt #8894
                  </p>
                </div>
                <span className="text-sm font-bold" style={{ color: 'var(--ds-on-surface-variant)' }}>
                  Oct 21, 2023
                </span>
              </div>
              <div
                className="flex items-center gap-3 py-2 border-y"
                style={{ borderColor: 'var(--ds-outline-variant)' }}
              >
                <BadgeCheck className="w-5 h-5" style={{ color: 'var(--ds-on-surface-variant)' }} />
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--ds-on-surface-variant)' }}
                  >
                    Supplier
                  </p>
                  <p className="text-sm font-bold" style={{ color: 'var(--ds-on-surface)' }}>
                    Luxe Textiles Ltd.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm" style={{ color: 'var(--ds-on-surface-variant)' }}>
                  45 Items · Verified by Alex
                </p>
                <button
                  className="px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer"
                  style={{
                    background: 'var(--ds-surface-container-high)',
                    color: 'var(--ds-on-surface-variant)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--ds-on-surface)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = 'var(--ds-on-surface-variant)')}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky FAB */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={handleSync}
            className="w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
            style={{
              background: 'linear-gradient(180deg, var(--ds-primary-container) 0%, var(--ds-primary) 100%)',
              color: 'var(--ds-on-primary)',
            }}
          >
            <RefreshCw className={`w-8 h-8 transition-transform duration-1000 ${isRotating ? 'rotate-[360deg]' : ''}`} />
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}
