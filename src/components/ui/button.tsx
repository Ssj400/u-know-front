import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...props }, ref) => {
  return (
    <button
      className={`cursor-pointer inline-flex items-center justify-center rounded-md text-sm text-[black] font-medium ring-offset-background bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className} `}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };