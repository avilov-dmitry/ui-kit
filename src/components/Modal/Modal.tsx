import React, { memo, useCallback, useEffect } from 'react';
import classnames from 'classnames/bind';
import { Icon, Portal, Overlay } from 'components';
import styles from './Modal.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Modal';

export type ModalPropsType = {
    isOpened: boolean;
    withIcon?: boolean;
    modalClassName: string;
    closeIconClassName: string;
    children: React.ReactNode;
    onClose: () => void;
};

export const Modal: React.FunctionComponent<ModalPropsType> = memo(
    ({
        isOpened,
        children,
        modalClassName = '',
        closeIconClassName = '',
        withIcon = false,
        onClose,
    }) => {
        const handleDocumentKeyDown = useCallback(
            ({ keyCode }) => {
                if (keyCode === keyCode.ESCAPE) {
                    onClose();
                }
            },
            [onClose]
        );

        useEffect(() => {
            document.addEventListener('keydown', handleDocumentKeyDown);

            return () => {
                document.removeEventListener('keydown', handleDocumentKeyDown);
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <Portal isOpened={isOpened}>
                <Overlay>
                    <div className={cn(CLASS_NAME, modalClassName)}>
                        {withIcon && (
                            <Icon
                                className={cn(`${CLASS_NAME}__icon`, closeIconClassName)}
                                onClick={onClose}
                            />
                        )}
                        {children}
                    </div>
                </Overlay>
            </Portal>
        );
    }
);

Modal.displayName = 'Modal';
