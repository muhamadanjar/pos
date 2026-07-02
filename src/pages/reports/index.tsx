import DashboardLayout from "@/layouts/dashboard-layout"
import { ReportsHeader } from "./components/header"
import { IncomeChart } from "./components/income-chart"
import { ExpenseBreakdown } from "./components/expense-breakdown"
import { DailyProfitTable } from "./components/daily-profit-table"

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-ds-surface p-8">
        <div className="mx-auto max-w-7xl">
          <ReportsHeader />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <IncomeChart />
            <ExpenseBreakdown />
            <DailyProfitTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
