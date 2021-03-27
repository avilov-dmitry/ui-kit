import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Portal, PortalPropsType } from '../components';

export default {
    title: 'Example/Portal',
    background: '#EFEEEE',
    component: Portal,
    argTypes: {
        isOpened: {
            control: { type: 'boolean' }
        },
    },
} as Meta;


export const Simple: Story<PortalPropsType> = (args: PortalPropsType) => {
    const styles = { display: 'inline-block', 'fontSize': '16px', 'lineHeight': '24px' };

    return (
        <Portal {...args} >
            <div>
                <span style={{ ...styles, color: '#333',  textDecoration: 'line-through' }}>99 ₽</span>
            </div>
        </Portal>
    );
};