import React, { InputHTMLAttributes } from 'react';

interface InputTelefoneProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string;
    label?: string;
}

const InputTelefone: React.FC<InputTelefoneProps> = ({ label, name, id, ...props }) => {
    return (
        <div className="flex-col flex gap-1">
            {label && (
                <label className="text-sm" htmlFor={id ?? name}>
                    {label}
                </label>
            )}
            <input
                className="bg-white text-gray-900 border-none w-full rounded-lg px-3 h-11"
                type="text"
                name={name}
                id={id ?? name}
                {...props}
            />
        </div>
    );
};

export default InputTelefone;
