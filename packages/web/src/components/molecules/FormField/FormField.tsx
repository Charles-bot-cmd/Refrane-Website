import { ReactNode, forwardRef } from 'react';
import { Input, InputProps } from '@/components/atoms/Input';
import { cn } from '@/utils';

export interface FormFieldProps extends Omit<InputProps, 'error'> {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children?: ReactNode;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, hint, required, className, children, ...inputProps }, ref) => {
    return (
      <div className={cn('space-y-2', className)}>
        {label && (
          <label
            htmlFor={inputProps.id}
            className="block text-sm font-medium text-charcoal-700"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}
        
        {children || (
          <Input
            ref={ref}
            error={!!error}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputProps.id}-error` : hint ? `${inputProps.id}-hint` : undefined
            }
            {...inputProps}
          />
        )}
        
        {error && (
          <p id={`${inputProps.id}-error`} className="text-sm text-red-600">
            {error}
          </p>
        )}
        
        {hint && !error && (
          <p id={`${inputProps.id}-hint`} className="text-sm text-mist-600">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export { FormField };