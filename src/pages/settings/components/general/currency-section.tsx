import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Icon from '@/components/icons'
import type { Control } from 'react-hook-form'
import type { GeneralFormValues } from '@/pages/settings/schemas/general-schema'

interface CurrencySectionProps {
  control: Control<GeneralFormValues>
}

export function CurrencySection({ control }: CurrencySectionProps) {
  return (
    <div className="relative bg-ds-surface-lowest rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(21,30,20,0.05)] border border-ds-surface-highest overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-ds-primary"></div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-ds-surface-high rounded-lg text-ds-primary">
          <Icon name="banknote" className="w-5 h-5" />
        </div>
        <h3 className="text-base font-semibold text-ds-on-surface">Currency Configuration</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
          {/* Base Currency */}
          <FormField
            control={control}
            name="baseCurrency"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Base Currency</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all w-full">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent className="bg-ds-surface-lowest border border-ds-surface-highest">
                      <SelectItem value="USD">USD — US Dollar</SelectItem>
                      <SelectItem value="EUR">EUR — Euro</SelectItem>
                      <SelectItem value="GBP">GBP — British Pound</SelectItem>
                      <SelectItem value="JPY">JPY — Japanese Yen</SelectItem>
                      <SelectItem value="AUD">AUD — Australian Dollar</SelectItem>
                      <SelectItem value="CAD">CAD — Canadian Dollar</SelectItem>
                      <SelectItem value="CHF">CHF — Swiss Franc</SelectItem>
                      <SelectItem value="CNY">CNY — Chinese Yuan</SelectItem>
                      <SelectItem value="INR">INR — Indian Rupee</SelectItem>
                      <SelectItem value="IDR">IDR — Indonesian Rupiah</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Symbol Position */}
          <FormField
            control={control}
            name="symbolPosition"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Symbol Position</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all w-full">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent className="bg-ds-surface-lowest border border-ds-surface-highest">
                      <SelectItem value="before">Left e.g. $100</SelectItem>
                      <SelectItem value="after">Right e.g. 100€</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Decimal Separator */}
          <FormField
            control={control}
            name="decimalSeparator"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Decimal Separator</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all w-full">
                      <SelectValue placeholder="Select separator" />
                    </SelectTrigger>
                    <SelectContent className="bg-ds-surface-lowest border border-ds-surface-highest">
                      <SelectItem value="dot">Dot 1,000.00</SelectItem>
                      <SelectItem value="comma">Comma 1.000,00</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Rounding Rule */}
          <FormField
            control={control}
            name="roundingRule"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Rounding Rule</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all w-full">
                      <SelectValue placeholder="Select rule" />
                    </SelectTrigger>
                    <SelectContent className="bg-ds-surface-lowest border border-ds-surface-highest">
                      <SelectItem value="nearest_five">Round to nearest .05</SelectItem>
                      <SelectItem value="nearest_whole">Round to nearest whole</SelectItem>
                      <SelectItem value="none">No rounding</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
    </div>
  )
}
