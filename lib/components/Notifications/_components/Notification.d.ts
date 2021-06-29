import { FunctionComponent } from 'react';
import { NotificationCloseType, NotificationType } from '../_types';
export declare type NotificationPropsType = NotificationType & {
    className: string;
    delay?: number;
    withClose?: boolean;
    onClose: NotificationCloseType;
};
export declare const Notification: FunctionComponent<NotificationPropsType>;
