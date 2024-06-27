import React, { HTMLInputTypeAttribute } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface BaseFieldProps {
    render: React.ReactElement;
    name: string;
    type?: HTMLInputTypeAttribute;
    id?: string;
}

const BaseField: React.FC<BaseFieldProps> = ({ render, name, type, id }) => {
    const formContext = useFormContext();

    return (
        <>
            {formContext && (
                <Controller
                    defaultValue=""
                    control={formContext.control}
                    render={({ field }) => {
                        const props =
                            type === 'checkbox'
                                ? { ...field, ref: null, checked: field.value, onCheckedChange: field.onChange }
                                : { ...field, ref: null, onChange: field.onChange };

                        return (
                            <>
                                {React.cloneElement(render, { ...props, id: id ?? name })}

                                {formContext.formState && formContext.formState.errors && (
                                    <ErrorMessage
                                        errors={formContext.formState.errors}
                                        name={name}
                                        render={({ message }) => <p className="text-red text-sm m-0">{message}</p>}
                                    />
                                )}
                            </>
                        );
                    }}
                    name={name}
                />
            )}
        </>
    );
};

export default BaseField;
