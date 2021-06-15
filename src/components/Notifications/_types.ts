export type NotificationColorTypes = 'info' | 'warning' | 'error' | 'success';

export type NotificationPositionVerticalTypes = 'top' | 'bottom';

export type NotificationPositionHorizontalTypes = 'center' | 'left' | 'right';

export type NotificationType = {
    id: string;
    type?: NotificationColorTypes;
    message: string;
};

export type NotificationCloseParamsType = {
    id: string;
};

export type NotificationCloseType = (params: NotificationCloseParamsType) => void;
