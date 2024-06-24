import React, { ButtonHTMLAttributes, useMemo } from 'react';

interface ButtonProps
    extends Omit<React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
    children: React.ReactNode;
    variant?: 'gradient-purple';
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
    const variantClass = useMemo(
        () =>
            variant === 'gradient-purple'
                ? 'text-white bg-gradient-to-r from-purple-900 to-purple-500 hover:opacity-90 cursor-pointer font-semibold rounded-lg border-none text-sm w-full'
                : 'text-slate-900 dark:text-white bg-transparent font-semibold cursor-pointer border-none text-sm',
        [variant]
    );

    return (
        <button className={`p-4 text-nowrap ${variantClass}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
