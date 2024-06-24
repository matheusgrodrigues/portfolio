import React, { useImperativeHandle, useCallback, forwardRef, useState } from 'react';

import Button from '../button/Button';

export interface BaseModalRef {
    handleOpen: () => void;
}

interface BaseModalProps {
    children: React.ReactNode;
}

const BaseModal: React.ForwardRefRenderFunction<BaseModalRef, BaseModalProps> = ({ children }, ref) => {
    const [open, setOpen] = useState(false);

    const handleClose = useCallback(() => setOpen(false), []);
    const handleOpen = useCallback(() => setOpen(true), []);

    useImperativeHandle(ref, () => ({ handleOpen }), []);

    return (
        <>
            {open && (
                <div
                    className={`bg-gray-600 w-screen min-h-screen max-w-[99vw] absolute overflow-y-auto flex-col flex top-0 left-0 gap-8 px-8 ${open ? 'z-[9999]' : '-z-50'}`}
                >
                    <header className="justify-end w-full flex pt-8">
                        <Button onClick={handleClose}>X</Button>
                    </header>
                    <div className="container">{children}</div>
                </div>
            )}
        </>
    );
};

export default forwardRef(BaseModal);
