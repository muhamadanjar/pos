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
import { Button } from '@/components/ui/button'
import Icon from '@/components/icons'
import type { Control } from 'react-hook-form'
import type { LocalizationFormValues } from '@/pages/settings/schemas/localization-schema'

interface RegionalSectionProps {
  control: Control<LocalizationFormValues>
}

export function RegionalSection({ control }: RegionalSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <Icon name="globe" className="w-5 h-5" />
          Regional Preferences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {/* Interface Language */}
          <FormField
            control={control}
            name="interfaceLanguage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interface Language</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English (US)</SelectItem>
                      <SelectItem value="id">Bahasa Indonesia</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
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
                <FormLabel>Time Zone</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">
                        GMT-05:00 Eastern Time
                      </SelectItem>
                      <SelectItem value="Europe/London">
                        GMT+00:00 London
                      </SelectItem>
                      <SelectItem value="Asia/Jakarta">
                        GMT+07:00 Jakarta
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
                <FormLabel>Date Format</FormLabel>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
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
                <FormLabel>Time Format</FormLabel>
                <FormControl>
                  <div className="flex rounded-md border border-input overflow-hidden">
                    <Button
                      type="button"
                      variant={field.value === '12h' ? 'default' : 'ghost'}
                      className="flex-1 rounded-none"
                      onClick={() => field.onChange('12h')}
                    >
                      12-hour (AM/PM)
                    </Button>
                    <Button
                      type="button"
                      variant={field.value === '24h' ? 'default' : 'ghost'}
                      className="flex-1 rounded-none border-l border-input"
                      onClick={() => field.onChange('24h')}
                    >
                      24-hour
                    </Button>
                  </div>
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
