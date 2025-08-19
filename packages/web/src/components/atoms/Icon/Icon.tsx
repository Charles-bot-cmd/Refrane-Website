import { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const iconVariants = cva('', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
      '2xl': 'h-10 w-10'
    },
    color: {
      default: 'text-current',
      primary: 'text-primary',
      secondary: 'text-mist',
      success: 'text-green-600',
      warning: 'text-yellow-600',
      error: 'text-red-600',
      muted: 'text-mist-500'
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'default'
  }
});

export interface IconProps
  extends Omit<LucideProps, 'size' | 'color'>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
}

function Icon({ icon: IconComponent, className, size, color, ...props }: IconProps) {
  return (
    <IconComponent
      className={cn(iconVariants({ size, color }), className)}
      {...props}
    />
  );
}

export { Icon, iconVariants };