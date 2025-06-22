import { forwardRef } from 'react'
import type { SelectHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
  errorMessage?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, errorMessage, children, ...props }, ref) => {
    return (
      <div className="w-full">
        <select
          className={cn(
            'w-full px-4 py-3 border rounded-lg text-sm bg-white text-text-primary transition-all duration-300',
            'focus:outline-none focus:ring-1 appearance-none cursor-pointer',
            'bg-[url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")] bg-[position:right_0.5rem_center] bg-[size:1.5rem_1.5rem] bg-no-repeat pr-10',
            error 
              ? 'border-error-red focus:border-error-red focus:ring-error-red/10' 
              : 'border-border-gray focus:border-rose-gold focus:ring-rose-gold/10',
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        {errorMessage && (
          <p className="mt-1 text-sm text-error-red">{errorMessage}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select }