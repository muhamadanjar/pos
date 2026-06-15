import { Button } from '@/components/ui/button'
import Icon from '@/components/icons'

interface SettingsActionsProps {
  onDiscard: () => void
  isDirty?: boolean
}

export function SettingsActions({ onDiscard, isDirty = false }: SettingsActionsProps) {
  return (
    <div className="flex items-center justify-end gap-3 border-t pt-6">
      <Button
        type="button"
        variant="outline"
        onClick={onDiscard}
        disabled={!isDirty}
      >
        Discard Changes
      </Button>
      <Button
        type="submit"
        disabled={!isDirty}
      >
        <Icon name="save" className="w-4 h-4" />
        Save Preferences
      </Button>
    </div>
  )
}

