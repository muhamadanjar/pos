import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Form } from '@/components/ui/form'
import { localizationSchema, localizationDefaultValues, type LocalizationFormValues } from '@/pages/settings/schemas/localization-schema'
import { RegionalSection } from './regional-section'
import { SettingsActions } from '../settings-actions'

function LocalizationTab() {
  const form = useForm<LocalizationFormValues>({
    resolver: zodResolver(localizationSchema),
    defaultValues: localizationDefaultValues,
  })

  const onSubmit = (values: LocalizationFormValues) => {
    toast.success('Localization preferences saved')
    form.reset(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        <div className="space-y-6 pb-24">
          <RegionalSection control={form.control} />
        </div>
        <div className="fixed bottom-0 left-64 right-0 bg-ds-surface border-t border-ds-surface-highest p-6 z-40">
          <div className="max-w-6xl mx-auto">
            <SettingsActions
              onDiscard={() => form.reset()}
              isDirty={form.formState.isDirty}
            />
          </div>
        </div>
      </form>
    </Form>
  )
}

export default LocalizationTab
