import React, { InputHTMLAttributes } from 'react';

interface InputTextProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string;
    label?: string;
}

const InputText: React.FC<InputTextProps> = ({ label, name, id, ...props }) => {
    return (
        <div className="flex-col flex gap-1">
            {label && (
                <label className="text-sm" htmlFor={id ?? name}>
                    {label}
                </label>
            )}
            <input
                className="bg-white text-gray-900 border-none w-full rounded-lg px-3 h-12"
                type="text"
                name={name}
                id={id ?? name}
                {...props}
            />
        </div>
    );
};

export default InputText;
