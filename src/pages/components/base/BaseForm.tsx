import React, { FormHTMLAttributes } from 'react';
import { SubmitHandler, FieldValues, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodObject } from 'zod';

interface BaseFormProps extends React.DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    validationSchema: ZodObject<FieldValues>;
    children: React.ReactNode;
    onSubmit: SubmitHandler<unknown>;
}

const BaseForm: React.FC<BaseFormProps> = ({ validationSchema, children, onSubmit, ...props }) => {
    const methods = useForm<FieldValues>({
        resolver: zodResolver(validationSchema),
    });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
                {children}
            </form>
        </FormProvider>
    );
};

export default BaseForm;
