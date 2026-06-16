import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart'
import Icon from '@/components/icons'
import { DAILY_REVENUE, fmt } from '../data/mock-data'

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'var(--ds-primary)',
  },
} satisfies ChartConfig

export default function RevenueChart() {
  const totalRevenue = DAILY_REVENUE.reduce((s, d) => s + d.revenue, 0)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline/15 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-ds-on-surface">
            7-Day Revenue
          </CardTitle>
          <p className="mt-2 text-2xl font-bold text-ds-on-surface">
            {fmt(totalRevenue)}
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-ds-surface-mid">
          <Icon name="trending-up" className="w-4 h-4 text-ds-secondary" />
          <span className="text-xs font-semibold text-ds-secondary">This Week</span>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ChartContainer config={chartConfig} className="h-[280px] w-full [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-ds-primary-container">
          <BarChart data={DAILY_REVENUE}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--ds-outline-variant)"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              stroke="var(--ds-on-surface-variant)"
              style={{ fontSize: '12px' }}
            />
            <YAxis
              stroke="var(--ds-on-surface-variant)"
              style={{ fontSize: '12px' }}
              tickFormatter={(value: number) =>
                new Intl.NumberFormat('id-ID', { notation: 'compact' }).format(value)
              }
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-ds-surface-highest border-ds-outline/15"
                />
              }
            />
            <Bar
              dataKey="revenue"
              fill="var(--ds-primary)"
              radius={[8, 8, 0, 0]}
              name="Revenue"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
