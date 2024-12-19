import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-6 py-3 rounded-full font-medium transition-colors',
        variant === 'primary' && 'bg-purple-600 hover:bg-purple-700 text-white',
        variant === 'secondary' && 'bg-gray-100 hover:bg-gray-200 text-gray-900',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}