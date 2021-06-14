import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Notification, NotificationPropsType } from '../source/components';
import { NotificationCloseParamsType } from '../source/components/Notifications/_types';

export default {
    title: 'Example/Notification',
    background: '#EFEEEE',
    component: Notification,
    args: {
        notification: {
            id: 'story id',
            message: 'test message',
            type: 'error',
        },
        onClose: ({ id }: NotificationCloseParamsType) =>
            console.warn('Close Notification id - ', id),
    },
} as Meta;

export const Simple: Story<NotificationPropsType> = (args: NotificationPropsType) => {
    const styles: any = {
        width: '100%',
        padding: '24px 0',
        display: 'flex',
        justifyContent: 'center',
    };

    return (
        <div style={styles}>
            <Notification {...args} />
        </div>
    );
};
