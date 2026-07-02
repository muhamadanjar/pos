import DashboardLayout from '@/layouts/dashboard-layout'
import KpiGrid from './components/kpi-grid'
import RevenueChart from './components/revenue-chart'
import TopProducts from './components/top-products'
import RecentTransactions from './components/recent-transactions'
import ReportsSection from './components/reports-section'

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard" subtitle="Overview of your sales and inventory">
      {/* KPI row */}
      <KpiGrid />

      {/* Chart + Top Products — asymmetric split */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
        <RevenueChart />
        <TopProducts />
      </div>

      {/* Full-width recent transactions */}
      <RecentTransactions />

      {/* Reports & Analytics Section */}
      <ReportsSection />
    </DashboardLayout>
  )
}
