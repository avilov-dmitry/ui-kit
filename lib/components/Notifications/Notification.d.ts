import { FunctionComponent } from 'react';
import { NotificationCloseType, NotificationType } from './_types';
export declare type NotificationPropsType = {
    notification: NotificationType;
    className: string;
    onClose: NotificationCloseType;
};
export declare const Notification: FunctionComponent<NotificationPropsType>;
