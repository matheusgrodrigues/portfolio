import React, { TextareaHTMLAttributes } from 'react';

interface InputTextareaProps
    extends React.DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    name?: string;
    label?: string;
}

const InputTextarea: React.FC<InputTextareaProps> = ({ label, name, id, ...props }) => {
    return (
        <div className="flex-col flex gap-1">
            {label && (
                <label className="text-sm" htmlFor={id ?? name}>
                    {label}
                </label>
            )}

            <textarea
                className="bg-white text-gray-900 border-none w-full rounded-lg px-3 py-4 h-40"
                name={name}
                id={id ?? name}
                rows={5}
                cols={33}
                {...props}
            />
        </div>
    );
};

export default InputTextarea;
