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
};

export const Notification: FunctionComponent<NotificationPropsType> = memo(
    ({ notification: { id, message, type = 'info' }, className, onClose }) => {
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
