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
              ? 'bg-[var(--mint-300)] text-[var(--mint-900)]'
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-[var(--mint-50)] hover:text-[var(--mint-900)] hover:border-[var(--mint-200)]',
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
