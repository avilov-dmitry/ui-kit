import { FunctionComponent } from 'react';
import { NotificationCloseType, NotificationPositionHorizontalTypes, NotificationPositionVerticalTypes, NotificationType } from './_types';
export declare type NotificationsPropsType = {
    notifications: Array<NotificationType>;
    positionVertical?: NotificationPositionVerticalTypes;
    positionHorizontal?: NotificationPositionHorizontalTypes;
    onClose: NotificationCloseType;
};
export declare const Notifications: FunctionComponent<NotificationsPropsType>;
