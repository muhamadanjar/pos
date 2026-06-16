import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/icons"
import { expenseBreakdownData } from "../data/mock-data"

export function ExpenseBreakdown() {
  return (
    <Card className="col-span-1 border-ds-outline/15 bg-ds-surface">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline/15 pb-4">
        <CardTitle className="text-lg font-semibold text-ds-on-surface">
          Expense Breakdown
        </CardTitle>
        <button className="p-2 hover:bg-ds-surface-container rounded-full transition-colors">
          <Icon name="more-vertical" className="h-5 w-5 text-ds-on-surface-variant" />
        </button>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={expenseBreakdownData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {expenseBreakdownData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--ds-surface-highest)",
                border: "1px solid var(--ds-outline) / 0.15",
                borderRadius: "8px",
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
