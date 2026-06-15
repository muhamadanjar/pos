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
    console.log('Localization preferences submitted:', values)
    toast.success('Localization preferences saved')
    form.reset(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
        <RegionalSection control={form.control} />
        <SettingsActions
          onDiscard={() => form.reset()}
          isDirty={form.formState.isDirty}
        />
      </form>
    </Form>
  )
}

export default LocalizationTab
