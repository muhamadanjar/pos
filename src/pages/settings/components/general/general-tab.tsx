import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Form } from '@/components/ui/form'
import { generalSchema, generalDefaultValues, type GeneralFormValues } from '@/pages/settings/schemas/general-schema'
import { CurrencySection } from './currency-section'
import { TaxationSection } from './taxation-section'
import { SettingsActions } from '../settings-actions'

export function GeneralTab() {
  const form = useForm<GeneralFormValues>({
    resolver: zodResolver(generalSchema),
    defaultValues: generalDefaultValues,
  })

  const onSubmit = (values: GeneralFormValues) => {
    toast.success('General preferences saved')
    form.reset(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-6">
        <div className="grid grid-cols-2 gap-6">
          <CurrencySection control={form.control} />
          <TaxationSection control={form.control} />
        </div>
        <SettingsActions
          onDiscard={() => form.reset()}
          isDirty={form.formState.isDirty}
        />
      </form>
    </Form>
  )
}

export default GeneralTab
