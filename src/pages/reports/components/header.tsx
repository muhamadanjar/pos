import { Button } from "@/components/ui/button"
import Icon from "@/components/icons"
import { useReportsStore } from "../store"

export function ReportsHeader() {
  const period = useReportsStore((s) => s.period)
  const setPeriod = useReportsStore((s) => s.setPeriod)

  const periods = [
    { value: "today" as const, label: "Today" },
    { value: "weekly" as const, label: "Weekly" },
    { value: "monthly" as const, label: "Monthly" },
    { value: "custom" as const, label: "Custom" },
  ]

  return (
    <div className="mb-8 border-b border-ds-outline/15 pb-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ds-on-surface">
            Reports & Analytics
          </h1>
          <p className="mt-1 text-sm text-ds-on-surface-variant">
            Track your business performance and insights
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Icon name="download" className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="flex gap-3">
        {periods.map((p) => (
          <Button
            key={p.value}
            variant={period === p.value ? "default" : "outline"}
            size="sm"
            onClick={() => setPeriod(p.value)}
            className={
              period === p.value
                ? "bg-ds-primary text-ds-on-primary"
                : "border-ds-outline/20 text-ds-on-surface hover:bg-ds-surface-container"
            }
          >
            {p.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
