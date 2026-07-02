import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  categories: string[]
  selected: string
  onSelect: (category: string) => void
}

function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          className={cn(
            'shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors shadow-sm cursor-pointer',
            selected === cat
              ? 'bg-ds-primary text-ds-on-primary'
              : 'bg-ds-surface-lowest border border-ds-outline-variant/20 text-ds-on-surface-variant hover:bg-ds-surface-low hover:text-ds-on-surface hover:border-ds-outline-variant/40',
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
