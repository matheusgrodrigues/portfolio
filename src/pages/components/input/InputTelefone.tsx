import React from 'react';

import InputMask, { Props } from 'react-input-mask';

interface InputTelefoneProps extends Omit<Props, 'mask'> {
    name?: string;
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
            <InputMask
                className="bg-white text-gray-900 border-none w-full rounded-lg px-3 h-11"
                mask="(99) 99999-9999"
                type="text"
                name={name}
                id={id ?? name}
                {...props}
            />
        </div>
    );
};

export default InputTelefone;
