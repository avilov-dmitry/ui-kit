import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Calendar, CalendarPropsType } from 'components';

export default {
    title: 'Example/Calendar',
    background: '#EFEEEE',
    component: Calendar,
    argTypes: {
        isDisabled: {
            control: { type: 'boolean' },
        },
        offsetX: {
            control: { type: 'number' },
        },
        offsetY: {
            control: { type: 'number' },
        },
    },
    args: {
        count: 9,
    },
} as Meta;
export const Simple: Story<CalendarPropsType> = (args: CalendarPropsType) => {
    return (
        <div style={{ padding: 25, fontSize: 30 }}>
            <Calendar {...args}>
                <span style={{ height: 40, backgroundColor: 'grey' }}>text</span>
            </Calendar>
        </div>
    );
};
