import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/icons"
import { dailyProfitData } from "../data/mock-data"

const statusConfig = {
  strong: { bg: "bg-ds-primary/10", text: "text-ds-primary", label: "Strong" },
  stable: { bg: "bg-ds-secondary/10", text: "text-ds-secondary", label: "Stable" },
  "high-cost": {
    bg: "bg-ds-tertiary/10",
    text: "text-ds-tertiary",
    label: "High Cost",
  },
}

export function DailyProfitTable() {
  return (
    <Card className="col-span-1 lg:col-span-3 border-ds-outline/15 bg-ds-surface">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-ds-outline/15 pb-4">
        <CardTitle className="text-lg font-semibold text-ds-on-surface">
          Daily Profit Report
        </CardTitle>
        <button className="p-2 hover:bg-ds-surface-container rounded-full transition-colors">
          <Icon name="more-vertical" className="h-5 w-5 text-ds-on-surface-variant" />
        </button>
      </CardHeader>
      <CardContent className="pt-6 px-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-ds-outline/15 hover:bg-transparent">
                <TableHead className="text-xs font-semibold text-ds-on-surface-variant uppercase tracking-wider pl-6">
                  Date
                </TableHead>
                <TableHead className="text-xs font-semibold text-ds-on-surface-variant uppercase tracking-wider text-right">
                  Revenue
                </TableHead>
                <TableHead className="text-xs font-semibold text-ds-on-surface-variant uppercase tracking-wider text-right">
                  Expenses
                </TableHead>
                <TableHead className="text-xs font-semibold text-ds-on-surface-variant uppercase tracking-wider text-right">
                  Profit
                </TableHead>
                <TableHead className="text-xs font-semibold text-ds-on-surface-variant uppercase tracking-wider text-right pr-6">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dailyProfitData.map((row) => {
                const status = statusConfig[row.status as keyof typeof statusConfig]
                return (
                  <TableRow
                    key={row.id}
                    className="border-b border-ds-outline/15 hover:bg-ds-surface-container/50 transition-colors"
                  >
                    <TableCell className="pl-6 py-4 text-sm text-ds-on-surface font-medium">
                      {new Date(row.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-ds-on-surface text-right font-medium">
                      ${row.revenue.toLocaleString()}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-ds-on-surface text-right font-medium">
                      ${row.expenses.toLocaleString()}
                    </TableCell>
                    <TableCell className="py-4 text-sm text-ds-on-surface text-right font-semibold">
                      ${row.profit.toLocaleString()}
                    </TableCell>
                    <TableCell className="pr-6 py-4 text-right">
                      <Badge className={`${status.bg} ${status.text} border-0`}>
                        {status.label}
                      </Badge>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
