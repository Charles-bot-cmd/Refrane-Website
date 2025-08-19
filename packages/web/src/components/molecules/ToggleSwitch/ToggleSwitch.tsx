import { forwardRef } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cn } from '@shared/utils';

export interface ToggleSwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  label?: string;
  labelPosition?: 'left' | 'right';
}

const ToggleSwitch = forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  ToggleSwitchProps
>(({ className, label, labelPosition = 'right', ...props }, ref) => {
  const switchElement = (
    <SwitchPrimitives.Root
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-primary data-[state=unchecked]:bg-mist-300',
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform',
          'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitives.Root>
  );
  
  if (!label) {
    return switchElement;
  }
  
  return (
    <div className="flex items-center space-x-3">
      {labelPosition === 'left' && (
        <label className="text-sm font-medium text-charcoal-700">{label}</label>
      )}
      {switchElement}
      {labelPosition === 'right' && (
        <label className="text-sm font-medium text-charcoal-700">{label}</label>
      )}
    </div>
  );
});

ToggleSwitch.displayName = SwitchPrimitives.Root.displayName;

export { ToggleSwitch };