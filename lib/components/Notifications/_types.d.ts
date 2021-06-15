export declare type NotificationColorTypes = 'info' | 'warning' | 'error' | 'success';
export declare type NotificationPositionVerticalTypes = 'top' | 'bottom';
export declare type NotificationPositionHorizontalTypes = 'center' | 'left' | 'right';
export declare type NotificationType = {
    id: string;
    type?: NotificationColorTypes;
    message: string;
};
export declare type NotificationCloseParamsType = {
    id: string;
};
export declare type NotificationCloseType = (params: NotificationCloseParamsType) => void;
