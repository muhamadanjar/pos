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
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        <div className="space-y-6 pb-24">
          <div className="grid grid-cols-2 gap-6">
            <CurrencySection control={form.control} />
            <TaxationSection control={form.control} />
          </div>
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

export default GeneralTab
