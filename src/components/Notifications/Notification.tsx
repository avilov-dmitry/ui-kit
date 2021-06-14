import React, { FunctionComponent, memo, useEffect } from 'react';
import classnames from 'classnames/bind';
import { NotificationCloseType, NotificationType } from './_types';
import styles from './Notification.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Notification';

export type NotificationPropsType = {
    notification: NotificationType;
    className: string;
    onClose: NotificationCloseType;
    // withCloseIcon?: boolean;
};

export const Notification: FunctionComponent<NotificationPropsType> = memo(
    ({
        notification: { id, message, type = 'info' },
        className,
        onClose,
        // withCloseIcon = false,
    }) => {
        // const [isOpened, setIsOpened] = useState(true);
        // const handleDocumentKeyDown = useCallback(
        //     ({ keyCode }) => {
        //         if (keyCode === KEY_CODES.ESCAPE) {
        //             onClose();
        //         }
        //     },
        //     [onClose]
        // );

        // useEffect(() => {
        //     document.addEventListener('keydown', handleDocumentKeyDown);

        //     return () => {
        //         document.removeEventListener('keydown', handleDocumentKeyDown);
        //     };
        // }, [handleDocumentKeyDown]);

        // const [timer, setTimer] = useState(null);

        useEffect(() => {
            setTimeout(() => onClose({ id }), 4000);
        }, []);

        return (
            <div
                className={cn(
                    CLASS_NAME,
                    {
                        [`${CLASS_NAME}--type-${type}`]: Boolean(type),
                    },
                    className
                )}
            >
                {message}
            </div>
        );
    }
);

Notification.displayName = 'Notification';
