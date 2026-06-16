import { PieChart, Pie, Cell, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import Icon from "@/components/icons"
import { expenseBreakdownData } from "../data/mock-data"

const chartConfig = {
  value: {
    label: "Expense",
  },
} satisfies ChartConfig

export function ExpenseBreakdown() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline/15 pb-4">
        <CardTitle className="text-lg font-semibold text-ds-on-surface">
          Expense Breakdown
        </CardTitle>
        <button className="p-2 hover:bg-ds-surface-mid rounded-full transition-colors">
          <Icon name="more-vertical" className="h-5 w-5 text-ds-on-surface-variant" />
        </button>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
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
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-ds-surface-highest border-ds-outline/15"
                />
              }
            />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
