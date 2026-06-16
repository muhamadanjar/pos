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
import type { LocalizationFormValues } from '@/pages/settings/schemas/localization-schema'

interface RegionalSectionProps {
  control: Control<LocalizationFormValues>
}

export function RegionalSection({ control }: RegionalSectionProps) {
  return (
    <div className="relative bg-ds-surface-lowest rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(21,30,20,0.05)] border border-ds-surface-highest overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-ds-primary"></div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-ds-surface-high rounded-lg text-ds-primary">
          <Icon name="globe" className="w-5 h-5" />
        </div>
        <h3 className="text-base font-semibold text-ds-on-surface">Regional Preferences</h3>
      </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Interface Language */}
          <FormField
            control={control}
            name="interfaceLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Interface Language</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-ds-surface-lowest border border-ds-surface-highest">
                      <SelectItem value="en">English (US)</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="it">Italiano</SelectItem>
                      <SelectItem value="pt">Português</SelectItem>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="ja">日本語</SelectItem>
                      <SelectItem value="zh">中文</SelectItem>
                      <SelectItem value="ko">한국어</SelectItem>
                      <SelectItem value="id">Bahasa Indonesia</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Zone */}
          <FormField
            control={control}
            name="timeZone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Time Zone</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent className="bg-ds-surface-lowest border border-ds-surface-highest">
                      <SelectItem value="UTC">UTC+00:00 UTC</SelectItem>
                      <SelectItem value="America/Los_Angeles">
                        GMT-08:00 Los Angeles
                      </SelectItem>
                      <SelectItem value="America/Chicago">
                        GMT-06:00 Chicago
                      </SelectItem>
                      <SelectItem value="America/New_York">
                        GMT-05:00 Eastern Time
                      </SelectItem>
                      <SelectItem value="Europe/London">
                        GMT+00:00 London
                      </SelectItem>
                      <SelectItem value="Europe/Paris">
                        GMT+01:00 Paris
                      </SelectItem>
                      <SelectItem value="Europe/Berlin">
                        GMT+01:00 Berlin
                      </SelectItem>
                      <SelectItem value="Asia/Tokyo">
                        GMT+09:00 Tokyo
                      </SelectItem>
                      <SelectItem value="Asia/Shanghai">
                        GMT+08:00 Shanghai
                      </SelectItem>
                      <SelectItem value="Asia/Singapore">
                        GMT+08:00 Singapore
                      </SelectItem>
                      <SelectItem value="Asia/Jakarta">
                        GMT+07:00 Jakarta
                      </SelectItem>
                      <SelectItem value="Australia/Sydney">
                        GMT+11:00 Sydney
                      </SelectItem>
                      <SelectItem value="Asia/Kolkata">
                        GMT+05:30 Kolkata
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Date Format */}
          <FormField
            control={control}
            name="dateFormat"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Date Format</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="bg-ds-surface-high border-none rounded-lg px-4 py-3 text-ds-on-surface focus:ring-2 focus:ring-ds-primary/20 focus:bg-ds-surface-lowest transition-all">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent className="bg-ds-surface-lowest border border-ds-surface-highest">
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Time Format */}
          <FormField
            control={control}
            name="timeFormat"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-ds-on-surface-variant">Time Format</FormLabel>
                <FormControl>
                  <div className="flex rounded-lg border border-ds-surface-highest overflow-hidden bg-ds-surface-high">
                    <button
                      type="button"
                      className={`flex-1 rounded-none transition-colors px-3 py-2 text-sm font-medium ${field.value === '12h' ? 'bg-ds-primary text-ds-on-primary' : 'bg-transparent text-ds-on-surface hover:bg-ds-surface-mid'}`}
                      onClick={() => field.onChange('12h')}
                    >
                      12-hour (AM/PM)
                    </button>
                    <button
                      type="button"
                      className={`flex-1 rounded-none border-l border-ds-surface-highest transition-colors px-3 py-2 text-sm font-medium ${field.value === '24h' ? 'bg-ds-primary text-ds-on-primary' : 'bg-transparent text-ds-on-surface hover:bg-ds-surface-mid'}`}
                      onClick={() => field.onChange('24h')}
                    >
                      24-hour
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
    </div>
  )
}
