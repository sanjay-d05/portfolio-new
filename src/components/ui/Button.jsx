import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30',
        secondary: 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700',
        outline: 'border-2 border-blue-600 text-blue-400 hover:bg-blue-600/10',
        ghost: 'hover:bg-white/10 text-gray-300 hover:text-white',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <button
            ref={ref}
            className={twMerge(
                'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
});

Button.displayName = 'Button';

export default Button;
