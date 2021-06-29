import React, { FunctionComponent, memo, useEffect, useMemo } from 'react';
import classnames from 'classnames/bind';
import { CloseIcon } from '../../icons';
import { NotificationCloseType, NotificationType } from '../_types';
import styles from './Notification.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Notification';

export type NotificationPropsType = NotificationType & {
    className: string;
    delay?: number;
    withClose?: boolean;
    onClose: NotificationCloseType;
};

export const Notification: FunctionComponent<NotificationPropsType> = memo(
    ({
        id,
        message,
        type = 'info',
        className,
        delay = 3000,
        onClose,
        withClose = false,
    }) => {
        const handleClose = () => onClose({ id });

        useEffect(() => {
            setTimeout(handleClose, delay);
        }, []);

        return (
            <div className={cn(CLASS_NAME, `${CLASS_NAME}--type-${type}`, className)}>
                <span className={cn(`${CLASS_NAME}__text`)}>{message}</span>
                {withClose && (
                    <span className={cn(`${CLASS_NAME}__close`)} onClick={handleClose}>
                        <CloseIcon className={cn(`${CLASS_NAME}__icon`)} />
                    </span>
                )}
            </div>
        );
    }
);

Notification.displayName = 'Notification';
