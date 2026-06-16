import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/icons"
import { incomeExpensesData } from "../data/mock-data"

export function IncomeChart() {
  return (
    <Card className="col-span-1 lg:col-span-2 border-ds-outline/15 bg-ds-surface">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline/15 pb-4">
        <CardTitle className="text-lg font-semibold text-ds-on-surface">
          Income vs Expenses
        </CardTitle>
        <button className="p-2 hover:bg-ds-surface-container rounded-full transition-colors">
          <Icon name="more-vertical" className="h-5 w-5 text-ds-on-surface-variant" />
        </button>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={incomeExpensesData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--ds-outline) / 0.2"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="var(--ds-on-surface-variant)"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="var(--ds-on-surface-variant)"
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--ds-surface-highest)",
                border: "1px solid var(--ds-outline) / 0.15",
                borderRadius: "8px",
              }}
              cursor={{ fill: "var(--ds-primary) / 0.1" }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "12px",
              }}
            />
            <Bar
              dataKey="income"
              fill="var(--ds-primary)"
              radius={[8, 8, 0, 0]}
              name="Income"
            />
            <Bar
              dataKey="expenses"
              fill="var(--ds-tertiary)"
              radius={[8, 8, 0, 0]}
              name="Expenses"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
