import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/icons'

export default function ReportsSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline/15 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-ds-on-surface">
            Reports & Analytics
          </CardTitle>
          <p className="mt-1 text-sm text-ds-on-surface-variant">
            View detailed business insights and performance metrics
          </p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-ds-surface-container-low border border-ds-outline/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-ds-on-surface text-sm">
                Income vs Expenses
              </h3>
              <Icon name="bar-chart-3" className="w-4 h-4 text-ds-primary" />
            </div>
            <p className="text-xs text-ds-on-surface-variant mb-4">
              Track monthly revenue and spending patterns
            </p>
          </div>

          <div className="p-4 rounded-lg bg-ds-surface-container-low border border-ds-outline/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-ds-on-surface text-sm">
                Daily Profit Report
              </h3>
              <Icon name="trending-up" className="w-4 h-4 text-ds-secondary" />
            </div>
            <p className="text-xs text-ds-on-surface-variant mb-4">
              Daily profit breakdown and status insights
            </p>
          </div>

          <div className="p-4 rounded-lg bg-ds-surface-container-low border border-ds-outline/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-ds-on-surface text-sm">
                Expense Breakdown
              </h3>
              <Icon name="pie-chart" className="w-4 h-4 text-ds-tertiary" />
            </div>
            <p className="text-xs text-ds-on-surface-variant mb-4">
              Visualize spending distribution by category
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-ds-outline/15 flex justify-center">
          <Link to="/reports" className="w-full">
            <Button
              variant="default"
              className="w-full bg-ds-primary text-ds-on-primary hover:bg-ds-primary/90"
            >
              <Icon name="arrow-right" className="w-4 h-4 mr-2" />
              View Full Reports
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
