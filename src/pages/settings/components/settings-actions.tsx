import { Button } from '@/components/ui/button'
import Icon from '@/components/icons'

interface SettingsActionsProps {
  onDiscard: () => void
  isDirty?: boolean
}

export function SettingsActions({ onDiscard, isDirty = false }: SettingsActionsProps) {
  return (
    <div className="flex items-center justify-end gap-4 py-4">
      <Button
        type="button"
        variant="outline"
        onClick={onDiscard}
        disabled={!isDirty}
        className="text-ds-on-surface-variant hover:text-ds-on-surface border-ds-surface-highest px-6 py-2"
      >
        Discard Changes
      </Button>
      <Button
        type="submit"
        disabled={!isDirty}
        className="bg-ds-primary hover:bg-ds-primary/90 text-ds-on-primary disabled:opacity-50 px-6 py-2"
      >
        <Icon name="save" className="w-4 h-4" />
        Save Preferences
      </Button>
    </div>
  )
}

