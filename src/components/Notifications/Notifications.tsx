import React from 'react';
import ReactDOM from 'react-dom';
import { FunctionComponent } from 'react';
import classnames from 'classnames/bind';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    NotificationCloseType,
    NotificationPositionHorizontalTypes,
    NotificationPositionVerticalTypes,
    NotificationType,
} from './_types';
import { Notification } from './_components';
import styles from './Notifications.module.scss';

const cn = classnames.bind(styles);
const CLASS_NAME = 'Notifications';

export type NotificationsPropsType = {
    notifications: Array<NotificationType>;
    positionVertical?: NotificationPositionVerticalTypes;
    positionHorizontal?: NotificationPositionHorizontalTypes;
    delay?: number;
    withClose?: boolean;
    onClose: NotificationCloseType;
};

const CSSTransitionTimeout = {
    enter: 500,
    exit: 500,
};

const CSSTransitionCN = {
    enter: cn(`${CLASS_NAME}__item--enter`),
    exit: cn(`${CLASS_NAME}__item--exit`),
};

export const Notifications: FunctionComponent<NotificationsPropsType> = ({
    notifications,
    positionVertical = 'bottom',
    positionHorizontal = 'center',
    delay,
    withClose,
    onClose,
}) => {
    return ReactDOM.createPortal(
        <TransitionGroup
            className={cn(
                CLASS_NAME,
                `${CLASS_NAME}--position-${positionVertical}`,
                `${CLASS_NAME}--position-${positionHorizontal}`,
                {
                    [`${CLASS_NAME}--isVisible`]: Boolean(notifications.length),
                }
            )}
        >
            {notifications.map((notification: NotificationType) => (
                <CSSTransition
                    key={notification.id}
                    timeout={CSSTransitionTimeout}
                    classNames={CSSTransitionCN}
                >
                    <Notification
                        {...notification}
                        className={cn(`${CLASS_NAME}__item`, {
                            [`${CLASS_NAME}__item--fromTop`]: positionVertical === 'top',
                            [`${CLASS_NAME}__item--fromBottom`]: positionVertical === 'bottom',
                        })}
                        delay={delay}
                        withClose={withClose}
                        onClose={onClose}
                    />
                </CSSTransition>
            ))}
        </TransitionGroup>,
        document.body
    );
};
