import React from 'react';
export declare type ModalPropsType = {
    isOpened: boolean;
    withCloseIcon?: boolean;
    modalClassName: string;
    closeIconClassName: string;
    children: React.ReactNode;
    onClose: () => void;
};
export declare const Modal: React.FunctionComponent<ModalPropsType>;
