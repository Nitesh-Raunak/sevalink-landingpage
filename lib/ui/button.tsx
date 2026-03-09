import React from 'react';
import { cn } from '@sevalink/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const buttonClasses = cn(
      'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
      variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
      variant === 'ghost' && 'hover:bg-muted text-foreground',
      variant === 'outline' && 'border border-border hover:bg-muted',
      size === 'sm' && 'px-3 py-1.5 text-sm',
      size === 'md' && 'px-4 py-2 text-base',
      size === 'lg' && 'px-6 py-3 text-lg',
      className
    );

    if (asChild) {
      return React.cloneElement(props.children as React.ReactElement<any>, {
        className: buttonClasses,
      });
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
