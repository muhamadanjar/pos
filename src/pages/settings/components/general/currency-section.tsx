import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
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
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Icon name="banknote" className="w-5 h-5" />
          Currency Configuration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {/* Base Currency */}
          <FormField
            control={control}
            name="baseCurrency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Base Currency</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="IDR">IDR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
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
                <FormLabel>Symbol Position</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
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
                <FormLabel>Decimal Separator</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select separator" />
                    </SelectTrigger>
                    <SelectContent>
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
                <FormLabel>Rounding Rule</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select rule" />
                    </SelectTrigger>
                    <SelectContent>
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
      </CardContent>
    </Card>
  )
}
