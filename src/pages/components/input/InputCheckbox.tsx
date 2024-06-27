import React, { InputHTMLAttributes } from 'react';

interface InputCheckboxProps extends React.DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ label, ...props }) => (
    <div className="flex gap-2">
        <input type="checkbox" className="default:ring-2 w-8" id="manter_informado" {...props} />

        {label && (
            <label htmlFor="manter_informado" className="text-gray-900 dark:text-white">
                {label}
            </label>
        )}
    </div>
);

export default InputCheckbox;
