import React, { FunctionComponent, memo, useCallback, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { Icon } from 'components';
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
    ({ id, message, type = 'info', className, delay = 3000, onClose, withClose = false }) => {
        const [timerId, setTimerId] = useState<null | number>(null);

        const handleClose = useCallback(() => onClose({ id }), []);

        const handleMouseEnter = useCallback(() => {
            if (timerId) {
                clearTimeout(timerId);
            }
        }, [timerId]);

        const handleMouseLeave = useCallback(() => {
            setTimerId(Number(setTimeout(handleClose, delay)));
        }, [delay]);

        useEffect(() => {
            setTimerId(Number(setTimeout(handleClose, delay)));
        }, []);

        return (
            <div
                className={cn(CLASS_NAME, `${CLASS_NAME}--type-${type}`, className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className={cn(`${CLASS_NAME}__text`)}>{message}</span>
                {withClose && (
                    <span className={cn(`${CLASS_NAME}__close`)} onClick={handleClose}>
                        <Icon className={cn(`${CLASS_NAME}__icon`)} />
                    </span>
                )}
            </div>
        );
    }
);

Notification.displayName = 'Notification';
