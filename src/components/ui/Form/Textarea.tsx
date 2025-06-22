import { forwardRef, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/utils/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean
  errorMessage?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, errorMessage, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            'w-full px-4 py-3 border rounded-lg text-sm bg-white text-text-primary transition-all duration-300',
            'focus:outline-none focus:ring-1 placeholder:text-medium-gray resize-y min-h-[100px]',
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

Textarea.displayName = 'Textarea'

export { Textarea }