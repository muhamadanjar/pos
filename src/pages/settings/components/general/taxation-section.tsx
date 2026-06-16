import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import Icon from '@/components/icons'
import { useWatch } from 'react-hook-form'
import { cn } from '@/lib/utils'
import type { Control } from 'react-hook-form'
import type { GeneralFormValues } from '@/pages/settings/schemas/general-schema'

interface TaxationSectionProps {
  control: Control<GeneralFormValues>
}

export function TaxationSection({ control }: TaxationSectionProps) {
  const enableGlobalTax = useWatch({ control, name: 'enableGlobalTax' })

  return (
    <div className="relative bg-ds-surface-lowest rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(21,30,20,0.05)] border border-ds-surface-highest overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-ds-primary"></div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-ds-surface-high rounded-lg text-ds-primary">
          <Icon name="receipt-text" className="w-5 h-5" />
        </div>
        <h3 className="text-base font-semibold text-ds-on-surface">Taxation Rules</h3>
      </div>
        <div className="space-y-6">
          {/* Enable Global Tax */}
          <FormField
            control={control}
            name="enableGlobalTax"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <FormLabel className="text-sm font-semibold text-ds-on-surface">Enable Global Tax</FormLabel>
                    <FormDescription className="text-xs text-ds-on-surface-variant">Apply tax rules to all transactions</FormDescription>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className={cn('space-y-6', !enableGlobalTax && 'opacity-50 pointer-events-none')}>
            {/* Tax Calculation Mode */}
            <FormField
              control={control}
              name="taxCalculationMode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-ds-on-surface">Tax Calculation Mode</FormLabel>
                  <FormControl>
                    <RadioGroup value={field.value} onValueChange={field.onChange} className="flex gap-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exclusive" id="tax-exclusive" />
                        <FormLabel htmlFor="tax-exclusive" className="!mt-0 cursor-pointer text-sm text-ds-on-surface">
                          Tax Exclusive
                        </FormLabel>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="inclusive" id="tax-inclusive" />
                        <FormLabel htmlFor="tax-inclusive" className="!mt-0 cursor-pointer text-sm text-ds-on-surface">
                          Tax Inclusive
                        </FormLabel>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Default Tax Rate */}
            <FormField
              control={control}
              name="defaultTaxRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-ds-on-surface">Default Tax Rate</FormLabel>
                  <FormControl>
                    <div className="relative w-40">
                      <Input
                        type="number"
                        placeholder="0"
                        step={0.01}
                        min={0}
                        max={100}
                        {...field}
                        onChange={(e) => {
                          const val = e.target.value === '' ? NaN : parseFloat(e.target.value)
                          field.onChange(val)
                        }}
                        className="pr-8 text-right font-mono bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-ds-on-surface-variant">
                        %
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
    </div>
  )
}
