import React, { ButtonHTMLAttributes, forwardRef, useImperativeHandle, useMemo, useState } from 'react';

export interface ButtonRef {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ButtonProps
    extends Omit<React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'className'> {
    children: React.ReactNode;
    variant?: 'gradient-purple';
}

const Button: React.ForwardRefRenderFunction<ButtonRef, ButtonProps> = ({ children, variant, ...props }, ref) => {
    const [loading, setLoading] = useState(false);

    const variantClass = useMemo(
        () =>
            variant === 'gradient-purple'
                ? 'text-white bg-gradient-to-r from-purple-900 to-purple-500 hover:opacity-90 cursor-pointer font-semibold rounded-lg border-none text-sm w-full'
                : 'text-slate-900 dark:text-white bg-transparent font-semibold cursor-pointer border-none text-sm',
        [variant]
    );

    useImperativeHandle(ref, () => ({ setLoading }), []);

    return (
        <button
            className={`p-4 text-nowrap ${variantClass} ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
            disabled={loading}
            {...props}
        >
            {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" strokeWidth="4" stroke="currentColor" cx="12" cy="12" r="10" />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            ) : (
                children
            )}
        </button>
    );
};

export default forwardRef(Button);
