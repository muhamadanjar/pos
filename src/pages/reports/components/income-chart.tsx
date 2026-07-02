import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import Icon from "@/components/icons"
import { incomeExpensesData } from "../data/mock-data"

const chartConfig = {
  income: {
    label: "Income",
    color: "var(--ds-primary)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--ds-secondary)",
  },
} satisfies ChartConfig

export function IncomeChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline/15 pb-4">
        <CardTitle className="text-lg font-semibold text-ds-on-surface">
          Income vs Expenses
        </CardTitle>
        <button className="p-2 hover:bg-ds-surface-mid rounded-full transition-colors">
          <Icon name="more-vertical" className="h-5 w-5 text-ds-on-surface-variant" />
        </button>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[300px] w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-ds-primary-container">
          <BarChart data={incomeExpensesData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--ds-outline-variant)"
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
            <Bar
              dataKey="income"
              fill="var(--ds-primary)"
              radius={[8, 8, 0, 0]}
              name="Income"
            />
            <Bar
              dataKey="expenses"
              fill="var(--ds-secondary)"
              radius={[8, 8, 0, 0]}
              name="Expenses"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
