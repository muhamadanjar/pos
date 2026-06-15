import { z } from 'zod'

export const generalSchema = z.object({
  baseCurrency: z.enum([
    'USD',
    'EUR',
    'GBP',
    'JPY',
    'AUD',
    'CAD',
    'CHF',
    'CNY',
    'INR',
    'IDR',
  ]),
  symbolPosition: z.enum(['before', 'after']),
  decimalSeparator: z.enum(['dot', 'comma']),
  roundingRule: z.enum(['nearest_five', 'nearest_whole', 'none']),
  enableGlobalTax: z.boolean(),
  taxCalculationMode: z.enum(['inclusive', 'exclusive']),
  defaultTaxRate: z.number({ invalid_type_error: 'Tax rate must be a number' })
    .min(0, 'Minimum 0%')
    .max(100, 'Maximum 100%')
    .refine((val) => !Number.isNaN(val), { message: 'Tax rate is required' }),
})

export type GeneralFormValues = z.infer<typeof generalSchema>

export const generalDefaultValues: GeneralFormValues = {
  baseCurrency: 'USD',
  symbolPosition: 'before',
  decimalSeparator: 'dot',
  roundingRule: 'nearest_five',
  enableGlobalTax: false,
  taxCalculationMode: 'exclusive',
  defaultTaxRate: 0,
}
