import React from 'react';
import { renderToString } from 'react-dom/server';
// import { NotificationColorTypes } from '../_types';
// type ParamsType = {
//     message?: string;
//     type?: NotificationColorTypes;
// };

// 1
export const getNotification = (): void => {
    // export const getNotification = (params: ParamsType): void => {
    // const { message, type = 'info' } = params;

    const newElement = document.createElement('div');
    // newElement.innerHTML = renderToString(<Notification  />);
    newElement.innerHTML = renderToString(<div />);

    const Notifications = document.getElementById('notifications');

    if (Notifications) {
        Notifications.appendChild(newElement);

        // Notifications.innerHTML = renderToString(
        //     <Notification message={message} type={type} />
        // );
    } else {
        document.body.appendChild(newElement);
    }
};
