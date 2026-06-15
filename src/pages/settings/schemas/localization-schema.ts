import { z } from 'zod'

export const localizationSchema = z.object({
  interfaceLanguage: z.enum([
    'en',
    'es',
    'fr',
    'de',
    'it',
    'pt',
    'ru',
    'ja',
    'zh',
    'ko',
    'id',
  ]),
  timeZone: z.enum([
    'UTC',
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Asia/Singapore',
    'Asia/Jakarta',
    'Australia/Sydney',
    'Asia/Kolkata',
  ]),
  dateFormat: z.enum(['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD']),
  timeFormat: z.enum(['12h', '24h']),
})

export type LocalizationFormValues = z.infer<typeof localizationSchema>

export const localizationDefaultValues: LocalizationFormValues = {
  interfaceLanguage: 'en',
  timeZone: 'UTC',
  dateFormat: 'MM/DD/YYYY',
  timeFormat: '12h',
}
