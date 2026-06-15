import { useState } from 'react'
import { ShoppingCart, Search } from 'lucide-react'
import { useCartStore, computeTotals, type Customer } from '../store/use-cart-store'
import CartItemRow from './cart-item-row'
import PaymentMethod from './payment-method'
import CartSummary from './cart-summary'
import ReceiptModal, { type Transaction } from './receipt-modal'
import Icon from '@/components/icons'

// Mock member data
const MOCK_MEMBERS: Customer[] = [
  { name: 'Andi Pratama', phone: '081234567890', type: 'member', memberId: 'MBR-001', points: 1250 },
  { name: 'Budi Santoso', phone: '082345678901', type: 'member', memberId: 'MBR-002', points: 850 },
  { name: 'Citra Dewi', phone: '083456789012', type: 'member', memberId: 'MBR-003', points: 3100 },
  { name: 'Dian Rahayu', phone: '085678901234', type: 'member', memberId: 'MBR-004', points: 500 },
  { name: 'Eko Wibowo', phone: '087890123456', type: 'member', memberId: 'MBR-005', points: 2300 },
  { name: 'Fita Lestari', phone: '089012345678', type: 'member', memberId: 'MBR-006', points: 175 },
]

type ModalTab = 'walk-in' | 'member'

function CustomerModal({ onClose }: { onClose: () => void }) {
  const { customer, setCustomer } = useCartStore()
  const [activeTab, setActiveTab] = useState<ModalTab>(customer.type === 'member' ? 'member' : 'walk-in')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMember, setSelectedMember] = useState<Customer | null>(
    customer.type === 'member' ? customer : null
  )
  const [walkInName, setWalkInName] = useState(customer.type === 'walk-in' ? customer.name : '')
  const [walkInPhone, setWalkInPhone] = useState(customer.type === 'walk-in' ? customer.phone : '')

  const filteredMembers = MOCK_MEMBERS.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.phone.includes(searchQuery) ||
      (m.memberId && m.memberId.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const handleSave = () => {
    if (activeTab === 'walk-in') {
      setCustomer({ name: walkInName, phone: walkInPhone, type: 'walk-in', memberId: undefined, points: undefined })
    } else if (selectedMember) {
      setCustomer(selectedMember)
    }
    onClose()
  }

  const canSave = activeTab === 'walk-in' ? true : selectedMember !== null

  return (
    <div className="fixed inset-0 bg-black/55 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl border border-slate-100 flex flex-col overflow-hidden max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-slate-100 shrink-0">
          <h3 className="text-base font-bold text-slate-900">Pilih Pelanggan</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <Icon name="x" className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('walk-in')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'walk-in'
                ? 'text-[var(--mint-800)] border-[var(--mint-500)]'
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            Walk-in Customer
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('member')}
            className={`flex-1 py-3 text-sm font-semibold transition-colors cursor-pointer border-b-2 ${
              activeTab === 'member'
                ? 'text-[var(--mint-800)] border-[var(--mint-500)]'
                : 'text-slate-500 border-transparent hover:text-slate-700'
            }`}
          >
            Member
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeTab === 'walk-in' ? (
            <div className="flex flex-col gap-4">
              <p className="text-sm text-slate-500">Masukkan data pelanggan walk-in atau biarkan kosong.</p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-500">Nama Pelanggan</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-[var(--mint-400)] focus:bg-white transition"
                    placeholder="Contoh: John Doe"
                    value={walkInName}
                    onChange={(e) => setWalkInName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-slate-500">No. Telepon (opsional)</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-[var(--mint-400)] focus:bg-white transition"
                    placeholder="Contoh: 08123456789"
                    value={walkInPhone}
                    onChange={(e) => setWalkInPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Cari nama, telepon, atau ID member..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 py-2.5 text-sm outline-none focus:border-[var(--mint-400)] focus:bg-white transition"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Member List */}
              <div className="flex flex-col gap-2">
                {filteredMembers.length === 0 ? (
                  <p className="text-sm text-center text-slate-400 py-8">Tidak ada member ditemukan</p>
                ) : (
                  filteredMembers.map((member) => {
                    const initials = member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()
                    const isSelected = selectedMember?.memberId === member.memberId
                    return (
                      <button
                        key={member.memberId}
                        type="button"
                        onClick={() => setSelectedMember(member)}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[var(--mint-50)] border-[var(--mint-300)]'
                            : 'bg-white border-slate-200 hover:border-[var(--mint-200)] hover:bg-[var(--mint-50)]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm shrink-0 ${
                          isSelected ? 'bg-[var(--mint-300)] text-[var(--mint-900)]' : 'bg-slate-200 text-slate-600'
                        }`}>
                          {initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-slate-900">{member.name}</p>
                          <p className="text-xs text-slate-500">{member.phone}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-xs font-semibold text-slate-500">{member.memberId}</p>
                          <p className="text-xs text-[var(--mint-700)] font-semibold">{member.points?.toLocaleString()} pts</p>
                        </div>
                        {isSelected && (
                          <div className="shrink-0 w-5 h-5 rounded-full bg-[var(--mint-400)] flex items-center justify-center">
                            <Icon name="check" className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </button>
                    )
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex justify-end gap-2 px-5 py-4 border-t border-slate-100 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={!canSave}
            className="px-5 py-2 text-sm font-semibold bg-[var(--mint-300)] text-[var(--mint-900)] hover:bg-[var(--mint-400)] rounded-lg cursor-pointer transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  )
}

function CartPanel() {
  const { items, customer, paymentMethod, discount, updateQty, clearCart } = useCartStore()
  const [transaction, setTransaction] = useState<Transaction | null>(null)
  const [customerModalOpen, setCustomerModalOpen] = useState(false)

  const { total } = computeTotals(items, discount)
  const totalQty = items.reduce((s, i) => s + i.qty, 0)

  const handleCheckout = () => {
    if (items.length === 0) return
    setTransaction({
      id: Math.random().toString(36).slice(2, 10).toUpperCase(),
      date: new Date(),
      items: [...items],
      customer: { ...customer },
      paymentMethod,
      discount,
    })
    clearCart()
  }

  const customerInitials = customer?.name
    ? customer.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : undefined

  return (
    <>
      <div className="flex flex-col h-full border-l border-slate-200 bg-white">
        {/* Customer Selector Card Header */}
        <header className="p-4 border-b border-slate-200 bg-white shrink-0">
          <div
            onClick={() => setCustomerModalOpen(true)}
            className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-100 cursor-pointer hover:border-[var(--mint-200)] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${
                customer.type === 'member' ? 'bg-[var(--mint-300)] text-[var(--mint-900)]' : 'bg-slate-200 text-slate-600'
              }`}>
                {customerInitials ?? <Icon name="user" className="h-4 w-4" />}
              </div>
              <div>
                <div className="font-medium text-slate-900 text-sm">
                  {customer.name || 'Walk-in Customer'}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  {customer.type === 'member' ? (
                    <>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--mint-500)]" />
                      <span className="text-[var(--mint-700)] font-semibold">{customer.memberId}</span>
                      <span className="text-slate-400">·</span>
                      <span>{customer.points?.toLocaleString()} pts</span>
                    </>
                  ) : (
                    <span>{customer.phone || 'Klik untuk ubah pelanggan'}</span>
                  )}
                </div>
              </div>
            </div>
            <button
              type="button"
              className="p-2 text-slate-400 hover:text-[var(--mint-700)] rounded-lg cursor-pointer"
              title="Change Customer"
            >
              <Icon name="chevron-down" className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto bg-slate-50 p-4">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-semibold text-slate-800 uppercase tracking-wider">Current Order</h2>
              {totalQty > 0 && (
                <span className="rounded-full bg-[var(--mint-300)] text-[var(--mint-900)] text-xs px-2 py-0.5 tabular-nums font-semibold">
                  {totalQty}
                </span>
              )}
            </div>
            {items.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="text-xs font-semibold text-red-500 hover:text-red-700 cursor-pointer"
              >
                Hapus Semua
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400 min-h-[250px]">
              <ShoppingCart className="size-10 mb-2 opacity-20" />
              <p className="text-sm">Belum ada pesanan</p>
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow key={item.product.id} item={item} onUpdateQty={updateQty} />
            ))
          )}
        </div>

        {/* Bottom Summary & Actions */}
        <footer className="bg-white border-t border-slate-200 shrink-0 p-5 space-y-4">
          <PaymentMethod />
          <CartSummary />

          <div className="flex gap-3">
            <button
              type="button"
              className="w-1/3 py-3 px-4 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              Tahan
            </button>
            <button
              type="button"
              disabled={items.length === 0}
              onClick={handleCheckout}
              className="flex-1 py-3 px-4 bg-[var(--mint-300)] text-[var(--mint-900)] font-semibold rounded-xl hover:bg-[var(--mint-400)] transition-colors shadow-sm flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              Bayar ·{' '}
              {total.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              })}
            </button>
          </div>
        </footer>
      </div>

      {customerModalOpen && (
        <CustomerModal onClose={() => setCustomerModalOpen(false)} />
      )}

      <ReceiptModal transaction={transaction} onClose={() => setTransaction(null)} />
    </>
  )
}

export default CartPanel
