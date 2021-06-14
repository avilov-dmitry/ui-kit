import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, Notifications, NotificationsPropsType } from '../source/components';
import { NotificationCloseParamsType } from '../source/components/Notifications/_types';

export default {
    title: 'Example/Notifications',
    background: '#EFEEEE',
    component: Notifications,
} as Meta;

const variants = [
    { id: '0', message: 'Файл восстановлен' },
    {
        id: '1',
        type: 'error',
        message: 'Не удалось создать папку. Попробуйте снова. ',
    },
    { id: '2', type: 'warning', message: 'Файл восстановлен 2' },
    { id: '3', type: 'success', message: 'Файл восстановлен 3' },
];

export const Simple: Story<NotificationsPropsType> = (args: NotificationsPropsType) => {
    const [notifications, setNotifications] = useState([]);

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleClick = () => {
        setNotifications((current) => [variants[current.length], ...current]);
    };

    const handleClose = ({ id }: NotificationCloseParamsType) => {
        setNotifications((current) => current.filter((item) => item.id !== id));
    };

    return (
        <>
            <Button onClick={handleClick}>Show notification</Button>
            <Notifications {...args} notifications={notifications} onClose={handleClose} />
        </>
    );
};
