import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/icons'

type ReportCard = {
  title: string
  description: string
  icon: string
  href: string
}

const REPORT_CARDS: ReportCard[] = [
  {
    title: 'Income vs Expenses',
    description: 'Track monthly revenue and spending patterns',
    icon: 'bar-chart-3',
    href: '/reports',
  },
  {
    title: 'Daily Profit Report',
    description: 'Daily profit breakdown and status insights',
    icon: 'trending-up',
    href: '/reports',
  },
  {
    title: 'Expense Breakdown',
    description: 'Visualize spending distribution by category',
    icon: 'pie-chart',
    href: '/reports',
  },
]

export default function ReportsSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline-variant pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-ds-on-surface pt-2">
            Reports & Analytics
          </CardTitle>
          <p className="mt-1 text-sm text-ds-on-surface-variant">
            View detailed business insights and performance metrics
          </p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REPORT_CARDS.map((report) => (
            <Link
              key={report.title}
              to={report.href}
              className="group p-4 rounded-lg bg-ds-surface-low border border-ds-outline-variant/30 hover:bg-ds-surface-mid hover:border-ds-outline-variant transition-all block"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-ds-on-surface text-sm">
                  {report.title}
                </h3>
                <Icon name={report.icon} className="w-4 h-4 text-ds-primary" />
              </div>
              <p className="text-xs text-ds-on-surface-variant mb-3">
                {report.description}
              </p>
              <span className="text-xs font-medium text-ds-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                Lihat laporan <Icon name="arrow-right" className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-ds-outline-variant flex justify-center">
          <Link to="/reports" className="w-full">
            <Button className="w-full bg-ds-primary text-ds-on-primary hover:bg-ds-primary/90">
              <Icon name="arrow-right" className="w-4 h-4 mr-2" />
              View Full Reports
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
