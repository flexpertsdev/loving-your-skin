import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
  errorMessage?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          className={cn(
            'w-full px-4 py-3 border rounded-lg text-sm bg-white text-text-primary transition-all duration-300',
            'focus:outline-none focus:ring-1 placeholder:text-medium-gray',
            error 
              ? 'border-error-red focus:border-error-red focus:ring-error-red/10' 
              : 'border-border-gray focus:border-rose-gold focus:ring-rose-gold/10',
            className
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <p className="mt-1 text-sm text-error-red">{errorMessage}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }