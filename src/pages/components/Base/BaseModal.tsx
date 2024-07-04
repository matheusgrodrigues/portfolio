import React, { useImperativeHandle, useCallback, forwardRef, useState } from 'react';

import Button from '../Button/Button';

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
                        <Button onClick={handleClose}>
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    fill="#ffffff"
                                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                />
                            </svg>
                        </Button>
                    </header>
                    <div className="container">{children}</div>
                </div>
            )}
        </>
    );
};

export default forwardRef(BaseModal);
