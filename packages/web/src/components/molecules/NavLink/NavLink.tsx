import { AnchorHTMLAttributes } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const navLinkVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-charcoal-600 hover:text-primary',
        active: 'text-primary font-semibold',
        button: 'bg-primary text-white px-4 py-2 hover:bg-primary/90',
        ghost: 'hover:bg-mist-50 hover:text-charcoal px-3 py-2'
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
);

export interface NavLinkProps
  extends Omit<LinkProps, 'className'>,
    VariantProps<typeof navLinkVariants> {
  className?: string;
  activeClassName?: string;
  external?: boolean;
}

function NavLink({
  to,
  variant,
  size,
  className,
  activeClassName,
  external,
  children,
  ...props
}: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const computedVariant = isActive && variant === 'default' ? 'active' : variant;
  const computedClassName = cn(
    navLinkVariants({ variant: computedVariant, size }),
    className,
    isActive && activeClassName
  );
  
  if (external) {
    return (
      <a
        href={to as string}
        target="_blank"
        rel="noopener noreferrer"
        className={computedClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link to={to} className={computedClassName} {...props}>
      {children}
    </Link>
  );
}

export { NavLink, navLinkVariants };