import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxPropsType } from 'ui-kit';
import { useState } from 'react';

export default {
    title: 'Example/Checkbox',
    background: '#EFEEEE',
    component: Checkbox,
    args: {
        content: 'The test tooltip content',
        position: 'auto',
        animationDuration: 400,
    },
} as Meta;

export const Simple: Story<CheckboxPropsType> = (args) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = ({ value }) => {
        setIsChecked(value);
    };
    return (
        <div style={{ margin: 150, height: '100vh', display: 'flex' }}>
            <Checkbox {...args} onClick={handleChange} value={isChecked} />
        </div>
    );
};
